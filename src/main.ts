export function doPost(): GoogleAppsScript.Content.TextOutput {
  console.log("called");
}

interface SlackData {
  text: string;
  response_type: "ephemeral" | "in_chanel";
}
