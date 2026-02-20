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
connection.execute(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error");
        }
        res.json(results);
    }
);
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

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);