const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
});

app.get("/user", (req, res) => {
    const username = req.query.username;

    // ❌ REAL SQL Injection Sink
    const query = "SELECT * FROM users WHERE username = '" + username + "'";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error");
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running");
});