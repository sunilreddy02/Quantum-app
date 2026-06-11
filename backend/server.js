const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Quantum Backend Running");
});

app.get("/hello", (req, res) => {
    res.json({
        message: "Hello Sunil"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});