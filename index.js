// Set up router
const express = require("express");
const app = express();
require("./startup/routes")(app);
// Set up database
require("./startup/db")();

const port = process.env.PORT || 8080;
console.log("starting the server...");
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

const { nanoid } = require("nanoid");
console.log(nanoid());


const { Member } = require("./models/Member");

Member.findById("1")
    .then(member => console.log(member));
// const member = new Member({
//     _id: "1",
//     firstName: "Tim",
//     lastName: "a",
//     userName: "user",
//     rank: 1,
//     companyId: "1",
//     teamId: "",
//     password: "user",
//     profilePic:
//         "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
// })

// async function createMembers() {

//     try {
//         const res = await member.save();
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }
// createMembers()
