const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
const axios = require('axios');
const fetchuser = require('../middleware/fetchuser');
const verifyToken = require('../middleware/verifyToken');
const Follow = require('../models/Follow');
const JWT_SECRET = 'Krishkrishpathak@happend#';

router.post('/cheak', [
    body('email', "Enter the correct email").isEmail(),
    body('password', "Enter mininmun 6 letter passowrd").isLength(6)
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(400).json({message:"The account with this email id already exist"});
    }
    let name = await User.findOne({ username: req.body.username });
    if (name) {
        return res.status(400).json({message:"The person which has this username already exist. Choose different username"});
    }
    function OTP() {
        const min = 100000;
        const max = 999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
    const otp = OTP();
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "krishpathak20@gmail.com",
            pass: "ozav lnnj uvvb satg"
        }
    })

    const mailoptions = {
        from: "krishpathak20@gmail.com",
        to: req.body.email,
        subject: `OTP for Musicify`,
        html: `<p>The OTP for logging in the Musicify is ${otp}.</p><br></br><p>Do not share it with anyone.</p>`
    }
    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            console.log("email is not sent");
        } else {
            console.log("email is sent successfully");
        }
    })
    res.json({'okay':123,'otp':otp});
}
)
router.post('/signup', [
    body('email', "Enter the correct email").isEmail(),
    body('password', "Enter mininmun 6 letter passowrd").isLength(6)
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({message:"The account with this email id already exist"});
        }
        let name = await User.findOne({ username: req.body.username });
        if (name) {
            return res.status(400).json({message:"The person which has this username already exist. Choose different username"});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt)
        
        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: secPass
        })

        const data={
            user:{
                id:user.id
            }
        }

        const authToken=jwt.sign(data,JWT_SECRET)

        await user.save();
        res.json(authToken);


    } catch (err) {
        return res.status(404).json({message:"Sorry! Server error has been detected"})
    }

})
//Login for user data
router.post('/login', [
    body('password',({ message :"Enter mininmun 6 letter password"})).isLength(6)
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username : req.body.username});
        
        if (!user) {
            return res.status(400).json({message:"Sorry! User has been not exist"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        
        const data = {
            user: {
                username: user.username,
                password: user.password
            }
        }

        const data1={
            user:{
                id:user.id
            }
        }
        const authToken= jwt.sign(data1,JWT_SECRET,{expiresIn:'7d'})
         res.redirect(`/${authToken}`)
       
        
    }
    catch {
        return res.status(500).json({message:"Sorry! Server error has been detected"})
    }
})
//Forget password
router.post('/getotp',async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if(!user){
        return res.status(500).json({message:"Unauthorised access of user"});
    }
    function OTP() {
        const min = 100000;
        const max = 999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
    const otp = OTP();
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "krishpathak20@gmail.com",
            pass: "ozav lnnj uvvb satg"
        }
    })

    const mailoptions = {
        from: "krishpathak20@gmail.com",
        to: req.body.email,
        subject: `OTP for Musicify`,
        html: `<p>The OTP for reseting password in the Musicify is ${otp}.</p><br></br><p>Do not share it with anyone.</p>`
    }
    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            console.log("email is not sent");
        } else {
            console.log("email is sent successfully");
        }
    })
    res.json({'okay':123,'otp':otp});
}
)
router.put('/changepass',async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if(!user){
        return res.status(500).json({message:"Unauthorised access of user"});
    }
    const password=req.body.password
    const passwordCompare= await bcrypt.compare(password,user.password)
    console.log(passwordCompare)
    if(!passwordCompare)
    {
        user.save();
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt)
        user.password=secPass
        user.save();
        res.json({data:"Password changed succesfully"})
    }
    else{
        return res.status(500).json({message:"New password is same as old password"})
    }
}
)



module.exports = router;
