const router = require("express").Router();
const db = require("../models/");
const uniqid = require("uniqid");

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
    //configure auth, returns token or authorizes here
  });
});

module.exports = router;
