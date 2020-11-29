// const MongoStore = require("connect-mongo")(session);
// const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const session = require("express-session");


const auth = require("../routes/auth");
const member = require("../routes/member");

const sessionChecker = (req, res, next) => {
    if (!req.session.memberId) {
        res.status(401).send("Not logged in");
    } else {
        next();
    }
};

module.exports = function (app) {
    // Session management
    app.use(
        session({
            secret: "keyboard cat",
            resave: true,
            saveUninitialized: true,
            cookie: {
                // 15 minutes
                maxAge: 15 * 60 * 1000,
                secure: false // when deployed to heroku, set to true
            },
            rolling: true
        })
    );
    // Express middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // Session checking
    app.use("/api", sessionChecker);
    // Routing
    app.use("/auth", auth);
    app.use("/api/member", member);
    // app.use("/api/project", project);
    // app.use("/api/team", team);
    // app.use("/api/task", task);
};
