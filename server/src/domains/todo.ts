import { ID } from "../types/todo"
/*
ここではdomainを実装している。
domainsはルールの手続きみたいなもの。
今回はtodoなのでtodoのルールを定義している

例えば
今回はユーザからtodoの内容(content)を受け取ることになっている。
コンテントは空文字だとおかしなことになってしまう。
フロントエンドであらかじめバリデーションをチェックすることもできるが
今回はここでチェックする
*/
export class Todo {
    private _id: ID
    private _content: string
    private _isChecked: number

    get id(): ID {
        return this._id
    }

    set id(id: ID) {
        this._id = id
    }

    get content(): string {
        return this._content
    }

    set content(content: string) {
        this._content = content
    }

    get isChecked(): number {
        return this._isChecked
    }

    set isChecked(isChecked: number) {
        this._isChecked = isChecked
    }

    //ここではコンテンツが空だとfalseを返す
    isContentFilled(): boolean {
        return this._content.length > 0
    }

    //初期化
    constructor(content: string) {
        this._id = ""
        this._content = content
        this._isChecked = 0
    }
}

/*
getとsetについては後にまとめる
*/
