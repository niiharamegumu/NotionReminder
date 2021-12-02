// NOTE: スクリプトプロパティの設定方法
// [【GAS】コードにAPIトークンやIDのベタ書きを避ける（プロパティサービスの活用） - Qiita](https://qiita.com/massa-potato/items/2209ff367d65c5dd6181)

export namespace Constants {
  /** Slackの In Coming Webhook URL */
  export const SLACK_URL = PropertiesService.getScriptProperties().getProperty('SLACK_URL')
  /** 取得対象のNotionのDBのIDを設定してください */
  export const DATABASE_ID = PropertiesService.getScriptProperties().getProperty('DATABASE_ID')
  /** Notionトークン */
  export const NOTION_TOKEN = PropertiesService.getScriptProperties().getProperty('NOTION_TOKEN')
}
