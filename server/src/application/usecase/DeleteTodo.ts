import { ID } from "../../types/todo"
import { todoRepository } from "../Repository/todoRepository"

export class DeleteTodo {
    private todoRepository: todoRepository

    constructor(taskRepository: todoRepository) {
        this.todoRepository = taskRepository
    }

    execute(id: ID) {
        return this.todoRepository.delete(id)
    }
}
