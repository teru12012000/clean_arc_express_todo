import { todoRepository } from "../../application/Repository/todoRepository"
import { db } from "../../db/db"
import { Todo } from "../../domains/todo"

export class TodoRepository implements todoRepository {
    private todoData: Todo[]

    constructor() {
        db.serialize(() => {
            db.all("SELECT * FROM todo", (err, rows: Todo[]) => {
                if (err) {
                    throw new Error("SQLに問題があります")
                }
                this.todoData = rows
            })
        })
    }

    create(todo: Todo): string {
        db.serialize(() => {
            db.run(
                "INSERT INTO todo (ID,CONTENT,CHECKED) VALUES(?,?,?)",
                [todo.id, todo.content, todo.isChecked],
                (err) => {
                    return "SQL ERROR"
                },
            )
        })

        return "SUCCESSFUL INSERTION"
    }

    findAll(): Todo[] {
        return this.todoData
    }

    update(todo: Todo): string {
        db.serialize(() => {
            db.run(
                "UPDATE todo SET CONTENT=?, CHECKED=? WHERE ID=?",
                [todo.content, todo.isChecked, todo.id],
                (err) => {
                    if (err) {
                        return "SQL ERROR"
                    }
                },
            )
        })

        return "SUCCESSFUL UPDATING"
    }

    delete(id: string): string {
        db.serialize(() => {
            db.run(`DELETE FROM todo WHERE id=$1`, [id], (err) => {
                return "SQL ERROR"
            })
        })

        return "DELETION SUCCESS"
    }
}
