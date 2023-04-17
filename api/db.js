import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"james",
    password:"Gopies#0",
    database:"blog"
})