import { Constants } from "./Constants";
import { Convert } from "./Convert";

export namespace NotionApi {
  export const getDatabase = (databaseId: string) => {
    const result = UrlFetchApp.fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "post",
        headers: {
          "Notion-Version": "2021-05-13",
          Authorization: `Bearer ${Constants.NOTION_TOKEN}`,
        },
      }
    );
    return Convert.toNotionResponse(result.getContentText()).results;
  };
}
