import { NotionApi } from './NotionApi'
import { SlackApi } from './SlackApi'
import { Result, SlackField } from './type'
import { Constants } from './Constants'
const { SLACK_URL, DATABASE_ID } = Constants

// テーブルのカラム名をオブジェクトで定義
const tableColumnObj = {
  title: 'タイトル',
  description: '内容',
  status: 'ステータス',
  noticeDate: '通知日',
  expiredDate: '期限日',
}
const popUpTitle = 'PECOFREE 運用リマインド'

// 今日以前の通知日でかつ未対応の通知を行う
const checkNoticeDate = (table: Result<any>[], genMessage: (row: Result<any>) => SlackField) => {
  const fields: SlackField[] = table.map((row) => {
    const title = row.properties[tableColumnObj.title]?.title[0]?.plain_text
    const description = row.properties[tableColumnObj.description]?.rich_text[0]?.plain_text
    const status = row.properties[tableColumnObj.status]?.select?.name
    const noticeDate = row.properties[tableColumnObj.noticeDate]?.date
    const expiredDate = row.properties[tableColumnObj.expiredDate]?.date
    if (!title || !description || !status || !noticeDate || !expiredDate) return

    // 今日の日付より後の通知日の場合は通知しない
    const notice = new Date(noticeDate.start)
    const today = new Date()
    if (notice.getTime() > today.getTime()) return

    return genMessage(row)
  })
  return fields.filter((field) => field)
}

// 未完了で期限切れのタスクを通知する
export function doPostByNotCompleted() {
  const table = NotionApi.getDatabase(DATABASE_ID, '未完了')
  if (!table.length) return

  const genMessage = (row: Result<any>): SlackField => {
    return {
      title: `👉【${row.properties[tableColumnObj.title].title[0].plain_text}】のリマインド`,
      value: `
      タイトル：<${row.url} | ${row.properties[tableColumnObj.title].title[0].plain_text}>
      内容：${row.properties[tableColumnObj.description].rich_text[0].plain_text}
      ステータス：${row.properties[tableColumnObj.status].select.name}
      通知日：${row.properties[tableColumnObj.noticeDate].date.start}
      期限日：${row.properties[tableColumnObj.expiredDate].date.start}
      `,
    }
  }
  const fields: SlackField[] = checkNoticeDate(table, genMessage)
  if (!fields.length) return
  SlackApi.sendToSlack(SLACK_URL, fields, popUpTitle)
}
