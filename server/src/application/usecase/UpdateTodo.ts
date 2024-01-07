import { Todo } from "../../domains/todo"
import { todoRepository } from "../Repository/todoRepository"

export class UpdateTodo {
    private todoRepository: todoRepository

    constructor(todoRepository: todoRepository) {
        this.todoRepository = todoRepository
    }

    execute(id: string, content: string, isChecked: number) {
        const task = new Todo(content)

        if (!task.isContentFilled()) {
            throw new Error("ビジネスルールを破ってますよ！！")
        }

        task.id = id
        task.isChecked = isChecked

        return this.todoRepository.update(task)
    }
}
