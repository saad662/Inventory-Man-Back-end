const { Router } = require('express');
const User = require('../db/User');
const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

const router = Router();

router.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "Something went wrong" })
        }
        resp.send({ result, auth: token })
    })
});


router.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "Something went wrong" })
                }
                resp.send({ user, auth: token })
            })
        }
        else {
            resp.send({ result: "No user Found" })
        }
    }
    else {
        resp.send({ result: "No user Found" })
    }
});


module.exports = router;