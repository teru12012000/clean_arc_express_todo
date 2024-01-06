import { todoRepository } from "../Repository/todoRepository"

export class GetTodoList {
    private todoRepository: todoRepository

    constructor(todoRepository: todoRepository) {
        this.todoRepository = todoRepository
    }

    execute() {
        return this.todoRepository.findAll()
    }
}
