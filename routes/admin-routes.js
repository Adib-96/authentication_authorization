const express  = require("express");
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const router = express.Router();




router.get("/welcome", authMiddleware, adminMiddleware,(req, res) => {
    console.log(req.user);
    res.json({message: "Welcome to the admin panel"});
});
module.exports = router;