/* 
ここはコントロールの部分を実装している
*/

import { Request } from "express"
import { TodoSerializer } from "../presenters/TodoSerializer"
import { TodoRepository } from "../getway/TodoRepository"
import { CreateTodo } from "../../application/usecase/CreateTodo"
import { GetTodoList } from "../../application/usecase/GetTodoList"
import { Todo } from "../../domains/todo"
import { UpdateTodo } from "../../application/usecase/UpdateTodo"
import { DeleteTodo } from "../../application/usecase/DeleteTodo"
import { InitializeTodo } from "../../application/usecase/InitializeTodo"

type Req = {
    req: Request
}

export class TodoController {
    private todoSerilizer: TodoSerializer
    private todoRepository: TodoRepository

    constructor() {
        this.todoSerilizer = new TodoSerializer()
        this.todoRepository = new TodoRepository()
    }

    initialize() {
        const usecase = new InitializeTodo(this.todoRepository)
        usecase.execute()
    }

    create({ req }: Req) {
        const { content } = req.body
        const usecase = new CreateTodo(this.todoRepository)
        const result: string = usecase.execute(content)

        return result
    }

    async findAll() {
        const usecase = new GetTodoList(this.todoRepository)
        const result = await usecase.execute()

        return this.todoSerilizer.todo(result)
    }

    update({ req }: Req) {
        const { id, content, isChecked } = req.body
        const usecase = new UpdateTodo(this.todoRepository)
        const result: string = usecase.execute(id, content, isChecked)

        return result
    }

    delete({ req }: Req) {
        const { id } = req.params
        const usecase = new DeleteTodo(this.todoRepository)
        const result: string = usecase.execute(id)

        return result
    }
}
