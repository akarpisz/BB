const router = require("express").Router();
const db = require("../models/");
const uniqid = require("uniqid");
const jwt = require("jsonwebtoken");
router.post("/signup", (req, res) => {
  console.log(req.body);
  const user = req.body;
  const userData = {
    id: uniqid(),
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
    hashPass: user.password,
  };
  db.Users.create(userData)
    .then(() => {
      return res.status(200);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
});

router.post("/signin", (req, res) => {
  console.log(req.body);
  let user = req.body;
  db.Users.findOne({ where: { email: user.email } }, (err, result) => {
    if (err) return err;
    console.log(result);
    return result;
  }).then(async (data) => {
    console.log(data.dataValues.hashPass);
    let auth = await db.Users.prototype.validPassword(user.password, data.dataValues.hashPass );
    console.log(auth);
    if(auth) {
      const token = jwt.sign({ user: data.dataValues.email }, process.env.SECRET);  
      const exp = user.rememberme ? {expires: new Date(new Date.getTime()+172800000)} : {expires: new Date(new Date.getTime()+7200000)} ;
      res.cookie('token', token, { httpOnly: true, sameSite: true, secure: true, exp})
      res.json({ token });
    }
    else{
      res.status(403).send("User not authorized");
    }
  });
});

module.exports = router;
