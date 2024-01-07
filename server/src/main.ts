import cors from "cors"
import express, { Express } from "express"
import { createRouter } from "./infrestructure/createRouter"
import { getRouter } from "./infrestructure/getRouter"
import { updateRouter } from "./infrestructure/updateRouter"
import { deleteRouter } from "./infrestructure/deleteRouter"

const app: Express = express()
const PORT: number = 8080

app.use(express.json())
app.use(cors())

app.use("/create", createRouter)
app.use("/get", getRouter)
app.use("/update", updateRouter)
app.use("/delete", deleteRouter)

app.listen(PORT, () => {
    console.log("go!!")
})
