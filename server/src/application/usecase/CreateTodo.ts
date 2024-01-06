import { Todo } from "../../domains/todo"
import { todoRepository } from "../Repository/todoRepository"
import { v4 } from "uuid"

export class CreateTodo {
    private taskRepository: todoRepository

    constructor(taskRepository: todoRepository) {
        this.taskRepository = taskRepository
    }

    execute(content: string) {
        const task = new Todo(content)

        if (!task.isContentFilled()) {
            throw new Error("ビジネスルールを破ってますよ！！")
        }

        //ここでidを生成する
        task.id = v4()

        return this.taskRepository.create(task)
    }
}
