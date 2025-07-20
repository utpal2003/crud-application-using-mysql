const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();


app.use(express.json());
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

app.post('/addstudent', (req, res) => {
    const sql = "INSERT INTO student (`Name`,`Email`) VALUES (?)";
    const Values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [Values], (err, res) => {
        if (err) return res.json({ error: err });
        return res.json(res)
    })

})

app.listen(8000, () => {
    console.log("port is listening on port 8000")
})