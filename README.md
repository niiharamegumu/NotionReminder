[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

# 事前に必要な設定

- slack の incoming app の設定
- notion のインテグレーション設定
  - インテグレーション設定後は Notion の DB 作成とインテグレーションとのコネクト設定をする必要がある。

# 環境構築

## 1. ログイン

`clasp login` で使用する Google アカウントにログインしてください

## 2. プロジェクトの作成

`npm run create-app` で GAS のプロジェクトを作成
`.clasp.json` が作成されます。

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

`npm run deploy`

> 🔔 環境変数・トークンなどを登録する場合
>
> [【GAS】コードに API トークンや ID のベタ書きを避ける（プロパティサービスの活用） - Qiita](https://qiita.com/massa-potato/items/2209ff367d65c5dd6181)

## 謝辞

このリポジトリは[Suyama-Daichi/NotionReminder](https://github.com/Suyama-Daichi/NotionReminder)をもとに独自に手を加えたものです。ありがとうございます 🙇‍♂️
