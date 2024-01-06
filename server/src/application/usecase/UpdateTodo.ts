import { Todo } from "../../domains/todo"
import { todoRepository } from "../Repository/todoRepository"

export class UpdateTodo {
    private todoRepository: todoRepository

    constructor(todoRepository: todoRepository) {
        this.todoRepository = todoRepository
    }

    execute(todo: Todo) {
        const task = new Todo(todo.content)

        if (!task.isContentFilled()) {
            throw new Error("ビジネスルールを破ってますよ！！")
        }

        return this.todoRepository.update(todo)
    }
}
