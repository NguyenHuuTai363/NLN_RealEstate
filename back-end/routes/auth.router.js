const router = require("express").Router();
const User = require("../models/User.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password, 
        process.env.PASS_SEC).toString(),
    
      phone: req.body.phone,
      });
      
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// Log in

router.post('/login', async (req, res) => {
  try{
    const user = await User.findOne(
      {
        username: req.body.username
      }
    );

    if(!user) {
      return res.status(401).json("Wrong User Name");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );


    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;
    
    if(originalPassword != inputPassword ) {
      return res.status(401).json("Wrong Password");
    }

    // Accept Token Login
    const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const refreshToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    res.cookie("refreshToken", refreshToken,{
      httpOnly: true,
      secure:false,
      path: '/',
      sameSite: 'strict',
    });

    const { password, ...others } = user._doc;  
    res.status(200).json({...others, accessToken, refreshToken});

  } catch(err){
      res.status(500).json(err);
  }

});

module.exports = router;