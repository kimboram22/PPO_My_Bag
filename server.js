const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const router = require("./src/index");
const pool = require("./lib/pool");

app.set("view engine", "html");
nunjucks.configure("templates", {
    express: app,
});

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use(router);
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000, async () => {
    try {
        const connection = await pool.getConnection();
        console.log(`Connection to the DB!`);
        connection.release();
    } catch (e) {
        throw new Error("SERVER ERROR", e.message);
    }
    console.log(`server start`);
});
