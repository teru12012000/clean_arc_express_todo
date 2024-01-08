import { todoRepository } from "../Repository/todoRepository"

export class InitializeTodo {
    private todoRepository: todoRepository

    constructor(taskRepository: todoRepository) {
        this.todoRepository = taskRepository
    }

    execute() {
        this.todoRepository.initializer()
    }
}
