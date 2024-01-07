import { Request, Response, Router } from "express"
import { TodoController } from "../interface/controllers/TodoController"

export const getRouter = Router()

const todoController = new TodoController()

getRouter.get("/getTodo", async (req: Request, res: Response) => {
    const result = await todoController.findAll()

    return res.status(200).json({
        data: result,
    })
})
