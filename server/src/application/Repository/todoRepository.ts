import { Todo } from "../../domains/todo"
import { ID } from "../../types/todo"

export interface todoRepository {
    findAll(): Promise<Todo>
    create(todo: Todo): Promise<Todo>
    update(todo: Todo): Promise<Todo>
    delete(id: ID): Promise<Todo>
}
