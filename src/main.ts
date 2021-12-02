import { NotionApi } from "./NotionApi";
import { SlackApi } from "./SlackApi";
import { Result, SlackField } from "./type";
import { Constants } from "./Constants";
const { SLACK_URL, CHANNEL, USERNAME, DATABASE_ID } = Constants;

/** 監視対象の列名 */
const displayColumnName = "契約名";
const targetColumnName = "契約終了日";

const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 1);

const checkDeadline = (
  table: Result<any>[],
  columnName: string,
  genMessage: (row: Result<any>, term: string) => SlackField
) => {
  const fields: SlackField[] = table.map((row) => {
    const dates = row.properties[columnName]?.date;
    if (!dates) return;
    let termString: string;
    const date = new Date(dates.start);
    const term = (currentDate.getTime() - date.getTime()) / 86400000;
    if (term < 0) {
      return;
    } else if (term < 1) {
      termString = "1日";
    } else if (term < 7) {
      termString = "1週間";
      console.log(date);
    } else if (term < 31) {
      termString = "1ヶ月";
    } else {
      return;
    }
    return genMessage(row, termString);
  });

  return fields.filter((field) => field);
};

export function doPost() {
  const table = NotionApi.getDatabase(DATABASE_ID);
  const genMessage = (row: Result<any>, term: string): SlackField => {
    return {
      title: `${row.properties[displayColumnName].title[0].plain_text}の終了まで${term}です`,
      value: `<${row.url} | ${row.properties[displayColumnName].title[0].plain_text}>`,
    };
  };
  const fields: SlackField[] = checkDeadline(
    table,
    targetColumnName,
    genMessage
  );
  SlackApi.sendToSlack(
    SLACK_URL,
    CHANNEL,
    USERNAME,
    fields,
    "締切が迫っています"
  );
}
