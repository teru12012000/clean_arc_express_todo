import cors from "cors"
import express, { Express } from "express"
import { createRouter } from "./infrstructure/createRouter"
import { getRouter } from "./infrstructure/getRouter"
import { updateRouter } from "./infrstructure/updateRouter"
import { deleteRouter } from "./infrstructure/deleteRouter"

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
