const router = require("express").Router();
const db = require("../models/");
const uniqid = require("uniqid");

router.post("/signup", (req, res)=>{
    console.log(req.body);
const user = req.body
const userData = {
    id: uniqid(),
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
    hashPass: user.password
    }

db.Users.create(userData)
.then(()=>{ return res.status(200)})
.catch(err=>{ console.log(err); return res.status(500)});


res.sendStatus(200)
})


module.exports = router;