import { todoRepository } from "../Repository/todoRepository"

export class GetTodoList {
    private todoRepository: todoRepository

    constructor(todoRepository: todoRepository) {
        this.todoRepository = todoRepository
    }

    async execute() {
        const data = await this.todoRepository.findAll().then((item) => {
            return item
        })

        return data
    }
}
