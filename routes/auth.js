const express = require("express");
const router = express.Router();
const { Member } = require("../models/Member");

// localhost:8080/auth/curr
router.get("/curr", async (req, res) => {
    if (req.session.memberId) {
        res.status(200).send(req.session.memberId);
    } else {
        res.status(404).send();
    }
});

router.put("/signup", async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, companyId, userName, password } = req.body;
    let member;
    try {
        // if does not exist
        if (!firstName || !lastName || !companyId || !userName || !password) {
            res.status(400).send("Missing signup fields");
            console.log(firstName, lastName, companyId, userName, password)
            return;
        }

        // Check companyId is actually a company in the database
        const company = await Company.findById(companyId);
        if (!company) return res.status(400).send("No such companyId");
        member = await new Member({
            firstName: firstName,
            lastName: lastName,
            companyId: companyId,
            userName: userName,
            password: password
        }).save();
        console.log(member);
    } catch (err) {
        console.log(err);
        console.log("sign up failed!");
        res.status(400).send();
        return;
    }
    req.session.memberId = member._id;
    console.log(req.session);
    await req.session.save();
    return res.status(200).send();
});


router.post("/login", async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        console.log(userName, password)
        res.status(400).send("Missing login fields");
        return;
    }
    let member = await Member.findOne({ userName: userName, password: password });
    if (!member) {
        console.log("no such user")
        res.status(400).send("Invalid login fields");
        return;
    }
    req.session.memberId = member._id;
    res.status(200).send("Successful login");
});

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
            res.status(500).send("Cannot logout");
            return
        }
    });

    res.status(200).send("Successful logout")
});

module.exports = router;
