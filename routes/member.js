const express = require("express");
const router = express.Router();
const { Member } = require("../models/Member.js");

router.get("/:id", async (req, res) => {
    const memberId = req.params.id;
    Member.findById(memberId)
        .then(member => {
            if (!member) {
                return res.status(404).send("No such member");
            }
            res.send(member);
        })
        .catch(err => res.status(500).send("Server err"))
});

// router.put("/", async (req, res) => {
//     const memberId = req.body.memberId;
//     const
// })
module.exports = router;