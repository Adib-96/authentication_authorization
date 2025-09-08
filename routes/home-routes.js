const express = require("express");
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();


router.get("/welcome", authMiddleware, (req, res) => {
    const {username,id,role} = req.user;
    console.log(username + " " + "is now connected from frontend");
    
    res.json({
        message :"welcome to the home page",
        user: {
            _id: id,
            username,
            role
        }
    });
});


module.exports = router;

