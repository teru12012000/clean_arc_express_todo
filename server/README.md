# `Node.js`の`express`による API

## 概要

ここでは`Node.js`の`express`によって todo を実装している。今回はクリーンアーキテ
クチャを活用している。

## 実行方法

-   `Node.js`をインストールしてない人はしてください
-   `yarn`が入っていない人は`npm i -g yarn`を実行
-   `yarn install`でパッケージをインストール
-   `yarn start`にてローカルサーバー`8080`で起動する

> [!WARNING]
> 他のアプリケーション開発等でポート番号が被っておりそちらを起動している場合は起動している場合は起動しない

## API 動作方法

### SQL 初期化について

-   今回は SQL ファイルを`ignore`してある
-   サーバー起動時に実際に自身の SQL ファイルが作成される(はず)

### API 動作

-   動作確認ツールは`postman`か`vscode`の`thunder client`を使用
-   `GET`,`POST`,`PUT`,`DELETE`とそれぞれの`HTTPメソッド`の処理を記載しているの
    でパスを指定して実行する

## API 情報

| method | URL                                                   | body                                                                   | params | detail                        |
| ------ | ----------------------------------------------------- | ---------------------------------------------------------------------- | ------ | ----------------------------- |
| GET    | http://localhost:8080/get/getTodo                     | なし                                                                   | なし   | todo のリストを取得する API。 |
| POST   | http://localhost:8080/create/createTodo               | `{"content":"TODOの内容"}`                                             | なし   | todo リストに追加する API     |
| PUT    | http://localhost:8080/update/updateTodo               | `{"id":"変更したいTODOのID","content":"TODOの内容","isChecked": 0か1}` | なし   | TODO を変更する API           |
| DELETE | http://localhost:8080/delete/deleteTodo/(消したい id) | なし                                                                   | `id`   | TODO を削除する API           |
