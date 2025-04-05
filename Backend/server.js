const express = require("express");
const path = require("path");
const connect = require("./db");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
connect();
app.use(express.json(), cookieParser());
app.use(express.static(__dirname));
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const User = mongoose.model("users", schema);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});
app.post("/", (req, res) => {
    async function checker() {
        if (await User.findOne({ name: req.body.name, email: req.body.email }))
            res.send(`You have already been logged in with name ${req.body.name} and email ${req.body.email}`);
        else
            saver();
    }
    checker();
    async function saver() {
        res.send("You have been logged in successfully");
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        await user.save();
    };
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});