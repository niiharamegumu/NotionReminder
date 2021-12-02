[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

# 準備

## 1. ログイン

`clasp login` で使用する Google アカウントにログインしてください

## 2. プロジェクトの作成

`yarn create-app` で GAS のプロジェクトを作成
`.clasp.json` が作成されます。

> 🔔 既存のプロジェクトで使う場合
>
> `.clasp.json_`を `.clasp.json`にリネームし、`scriptId`に AppScript の ScriptID を設定してください

> 🔔 タイムゾーンの設定
>
> 任意で `appsscript.json` の `timeZone`はデフォルトでアメリカ時間が指定されるので、 `"Asia/Tokyo"` に設定する
>
> ```json
> {
>   "timeZone": "Asia/Tokyo",
>   "dependencies": {},
>   "exceptionLogging": "STACKDRIVER",
>   "runtimeVersion": "V8"
> }
> ```

## 依存関係のインストール

`yarn install` or `npm install`

# デプロイ

`yarn deploy`

> 🔔 環境変数・トークンなどを登録する場合
>
> [【GAS】コードに API トークンや ID のベタ書きを避ける（プロパティサービスの活用） - Qiita](https://qiita.com/massa-potato/items/2209ff367d65c5dd6181)
