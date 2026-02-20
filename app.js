const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    const username = req.query.username;

    // ❌ SQL Injection Vulnerability
    const query = "SELECT * FROM users WHERE username = '" + username + "'";

    console.log(query);
    res.send("User fetched");
});

app.listen(3000, () => {
    console.log("Server running");
});