export namespace Constants {
  /** Slackの In Coming Webhook URL */
  export const SLACK_URL = PropertiesService.getScriptProperties().getProperty('SLACK_URL')
  /** 取得対象のNotionのDBのIDを設定してください */
  export const DATABASE_ID = PropertiesService.getScriptProperties().getProperty('DATABASE_ID')
  /** Notionトークン */
  export const NOTION_TOKEN = PropertiesService.getScriptProperties().getProperty('NOTION_TOKEN')
  /** プッシュ通知のカードタイトル */
  export const PUSH_NOTICE_CARD_TITLE =
    PropertiesService.getScriptProperties().getProperty('PUSH_NOTICE_CARD_TITLE')
  /** 対象ステータス名 */
  export const TARGET_STATUS = PropertiesService.getScriptProperties().getProperty('TARGET_STATUS')
}
