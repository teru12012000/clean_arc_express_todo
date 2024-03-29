import { Todo } from "../../domains/todo"
import { ID } from "../../types/todo"

export interface todoRepository {
    initializer(): void
    findAll(): Promise<Todo[]>
    create(todo: Todo): string
    update(todo: Todo): string
    delete(id: ID): string
}
