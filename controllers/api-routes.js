const router = require("express").Router();
const db = require("../models/");
const uniqid = require("uniqid");

router.post("/signup", (req, res)=>{
const {firstName, lastName, email, password} = req.body
console.log(req.body);

db.Users.create({
id: uniqid(),
email: email,
first_name: firstName,
last_name: lastName,
hashPass: password
}, (err, result)=>{
    if(err) {console.log(err); return err;}
    return res.status(200);

})

res.sendStatus(200)
})


module.exports = router;