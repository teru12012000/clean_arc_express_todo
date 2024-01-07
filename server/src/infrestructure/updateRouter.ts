import { Router, Request, Response } from "express"
import { TodoController } from "../interface/controllers/TodoController"

export const updateRouter = Router()

const todoController = new TodoController()

updateRouter.put("/updateTodo", (req: Request, res: Response) => {
    const result = todoController.update({ req })

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
