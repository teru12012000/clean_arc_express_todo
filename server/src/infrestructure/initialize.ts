import { TodoController } from "../interface/controllers/TodoController"

const todoController = new TodoController()

export const initialize = () => {
    todoController.initialize()
}
