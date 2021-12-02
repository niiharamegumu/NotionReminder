import { NotionResponse } from "./type";

// Converts JSON strings to/from your types
export namespace Convert {
  export const toNotionResponse = (json: string): NotionResponse<any> => {
    return JSON.parse(json);
  };

  export const appNotionResponseToJson = (
    value: NotionResponse<any>
  ): string => {
    return JSON.stringify(value);
  };
}
