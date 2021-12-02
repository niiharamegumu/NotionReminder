// NOTE: スクリプトプロパティの設定方法
// https://auto-worker.com/blog/?p=2365

export namespace Constants {
  /** 投稿したいChannelの名前 */
  export const CHANNEL = "#";
  /** 何の名前でSlackに投稿するか */
  export const USERNAME = "";
  /** Slackの In Coming Webhook URL */
  export const SLACK_URL =
    PropertiesService.getScriptProperties().getProperty("SLACK_URL");
  /** 取得対象のNotionのDBのIDを設定してください */
  export const DATABASE_ID =
    PropertiesService.getScriptProperties().getProperty("DATABASE_ID");
  /** Notionトークン */
  export const NOTION_TOKEN =
    PropertiesService.getScriptProperties().getProperty("NOTION_TOKEN");
}
