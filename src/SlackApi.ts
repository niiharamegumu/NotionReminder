import { SlackField } from './type'

export namespace SlackApi {
  export const sendToSlack = (
    url: string,
    channel: string,
    username: string,
    fields: SlackField[],
    fallback: string
  ) => {
    const payload = JSON.stringify({
      channel: channel,
      username: username,
      attachments: [
        {
          fallback: fallback,
          color: '#FFC800', // 好きな色に変更してください
          fields: fields,
          mrkdwn_in: ['fields'],
        },
      ],
    })
    UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      payload: payload,
    })
  }
}
