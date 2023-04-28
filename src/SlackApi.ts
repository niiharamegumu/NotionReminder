import { SlackField } from './type'

export namespace SlackApi {
  export const sendToSlack = (url: string, fields: SlackField[], fallback: string) => {
    const payload = JSON.stringify({
      text: '<!channel>',
      attachments: [
        {
          fallback: fallback,
          color: '#1e90ff',
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
