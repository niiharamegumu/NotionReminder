import { Constants } from './Constants'
import { Convert } from './Convert'

export namespace NotionApi {
  export const getDatabase = (databaseId: string, status?: string) => {
    const result = UrlFetchApp.fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'post',
      headers: {
        'Notion-Version': '2022-06-28',
        Authorization: `Bearer ${Constants.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify({
        filter: {
          property: 'ステータス',
          select: {
            equals: status,
          },
        },
      }),
    })
    return Convert.toNotionResponse(result.getContentText()).results
  }
}
