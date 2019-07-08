var PORT = process.env.PORT || 3000;
require("dotenv").config();
const express = require("express");
const path = require("path");

//database 
const Sequelize = require("./config/database");

//importing models

//importing routes
const teamRouter = require("./routes/team");
const userRouter = require("./routes/user");
const fixtureRouter = require("./routes/fixtures");
const authRouter = require("./routes/auth");

const app = express();

// This parses all json request so we can access
// its contents via 'req.body' object
app.use(express.json());

//base route
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/fixtures", fixtureRouter);
app.use("/api/v1/auth", authRouter);


// app.use((req, res, next) => {
//     res.send("<h2>Hello world</h2>")
// });

Sequelize.sync()
//this creates and listens to the server
.then(() => {
    app.listen(3000, () => console.log("App is running on port 3000"))
})


