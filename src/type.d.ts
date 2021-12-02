export interface SlackField {
  title: string
  value: string
}

export interface NotionResponse<T> {
  object: string
  results: Result<T>[]
  next_cursor: null
  has_more: boolean
}

export interface Result<T> {
  object: string
  id: string
  created_time: Date
  last_edited_time: Date
  cover: null
  icon: null
  parent: Parent
  archived: boolean
  properties: T
  url: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface FileElement {
  name: string
  type: string
  file: FileFile
}

export interface FileFile {
  url: string
  expiry_time: Date
}

export interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: null
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Text {
  content: string
  link: null
}

export interface Formula {
  type: string
  string: string
}

export interface DateClass {
  start: Date
  end: null
}

export interface Select {
  id: string
  name: string
  color: string
}
