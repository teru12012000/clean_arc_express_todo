import { Router, Request, Response } from "express"
import { TodoController } from "../interface/controllers/TodoController"

export const createRouter = Router()

const todoController = new TodoController()

createRouter.post("/createTodo", (req: Request, res: Response) => {
    const result = todoController.create({ req })

    if (result === "SQL ERROR") {
        return res.status(502).json({
            message: "エラー",
        })
    } else {
        return res.status(200).json({
            message: "OK",
        })
    }
})
