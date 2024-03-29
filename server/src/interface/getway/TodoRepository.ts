import { todoRepository } from "../../application/Repository/todoRepository"
import { db } from "../../infrestructure/db/db"
import { Todo } from "../../domains/todo"
import { res } from "../../types/res"

const getTodo = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all("SELECT * FROM todo", (err, rows: res[]) => {
                if (!err) {
                    resolve(rows)
                }
            })
        })
    })
}

export class TodoRepository implements todoRepository {
    initializer(): void {
        db.serialize(() => {
            db.run(
                "CREATE TABLE IF NOT EXISTS todo(ID VARCHAR(255),CONTENT VARCHAR(255),CHECKED INTAGER)",
            )
        })
    }

    create(todo: Todo): string {
        db.serialize(() => {
            db.run(
                "INSERT INTO todo (ID,CONTENT,CHECKED) VALUES(?,?,?)",
                [todo.id, todo.content, todo.isChecked],
                (err) => {
                    if (err) {
                        return "SQL ERROR"
                    }
                },
            )
        })

        return "SUCCESSFUL INSERTION"
    }

    async findAll(): Promise<Todo[]> {
        const data: res[] = (await getTodo()) as res[]
        const result: Todo[] = []

        data.map((item) => {
            const todo = new Todo(item.CONTENT)
            todo.id = item.ID
            todo.isChecked = item.CHECKED
            result.push(todo)
        })

        return result
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
                if (err) {
                    return "SQL ERROR"
                }
            })
        })

        return "DELETION SUCCESS"
    }
}
