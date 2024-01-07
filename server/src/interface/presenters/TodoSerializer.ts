/*
ここではoutputする際の型変換をしている。
外部で使用する際の形をここで変更している。
本来はもっと複雑で膨大な量になる。
*/

import { Todo } from "../../domains/todo"
import { TodoResponse, TodoSerializerType } from "./todoInterface"

const serialize = (todo: Todo): TodoResponse => {
    return {
        id: todo.id,
        content: todo.content,
        isChecked: todo.isChecked,
    }
}

export class TodoSerializer implements TodoSerializerType {
    todo(todo: Todo[]): TodoResponse[] {
        return todo.map((item) => serialize(item))
    }
}
