/* 
ここではpresentersの型宣言をしている
*/

import { Todo } from "../../domains/todo"
import { ID } from "../../types/todo"

export interface TodoResponse {
    id: ID
    content: string
    isChecked: number
}

export interface TodoSerializerType {
    todo(todo: Todo[]): TodoResponse[]
}
