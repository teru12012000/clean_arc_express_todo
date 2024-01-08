import { Router, Request, Response } from "express"
import { TodoController } from "../interface/controllers/TodoController"

export const deleteRouter = Router()

const todoController = new TodoController()

deleteRouter.delete("/deleteTodo/:id", (req: Request, res: Response) => {
    const result = todoController.delete({ req })

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
