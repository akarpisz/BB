const router = require("express").Router();
const db = require("../models/");
const uniqid = require("uniqid");
const jwt = require("jsonwebtoken");


const extractUser = (req) => {
  const authHeader = req.headers.cookie;
	const token = authHeader && authHeader.split("=")[1];
	let decoded = jwt.decode(token);
	return decoded;
};

// const checkToken = (req, res, next) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     if (token == null) return res.status(401).send("token error");
  
//     jwt.verify(token, process.env.SECRET, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
// };

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
    try {
      console.log(data.dataValues.hashPass);
      let auth = await db.Users.prototype.validPassword(
        user.password,
        data.dataValues.hashPass
      );
      console.log(auth);
      if (auth && !user.rememberme) {
        let cookieConfig;
        let now = new Date().getTime();
        console.log(now);
        if (user.rememberme) {
          
          cookieConfig = { httpOnly: true,
            sameSite: true,
            secure: true,
            expires: new Date(now + 172800000) };
        } else {
          cookieConfig = { httpOnly: true,
            sameSite: true,
            secure: true,
            expires: new Date(now + 7200000) };
        }
        const token = jwt.sign(
          { user: data.dataValues.email },
          process.env.SECRET
        );

        res.cookie("token", token, cookieConfig);
        res.json({ token });
        res.status(200);
      } else {
        res.status(403).send("User not authorized");
      }
    } catch (err) {
      console.log("catchErr: ", err);
    }
  });
});

router.get("/posts", (req, res)=>{
    
    
    let { user } = extractUser(req);
    console.log(user);

    db.Posts.findAll({
      where: {
        author: user
      }
    }, (err, data)=>{
      if(err) return err;
      console.log(data)
      return data;
    })
})

module.exports = router;
