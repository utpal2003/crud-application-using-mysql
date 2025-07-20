const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

app.get("/", (req, res) => {
    const sql = "select * from student";
    db.query(sql, (err, data) => {
        if (err) return res.json({ error: err });
        return res.json(data);

    })
})

app.listen(8000, () => {
    console.log("port is listening on port 8000")
})