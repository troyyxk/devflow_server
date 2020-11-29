// Set up database
const mongoose = require("mongoose");
const MONGODB = "mongodb+srv://team34:team34Password@devflow.oddf0.mongodb.net/devflow";
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
module.exports = function () {
    mongoose
        .connect(MONGODB)
        .then(() => console.log("Connected to MongoDB..."))
        .catch((err) => console.log("Could not connect to MongoDB", err));
};
