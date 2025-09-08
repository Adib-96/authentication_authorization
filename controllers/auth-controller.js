const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// register endpoint
const User = require('../models/User');
const jwt_secret = '12345';

const registerUser = async (req,res) => {
    try {
        //extracting user details
        const { username, password,email,role } = req.body;
        console.log(req.body);

        //checking for existing user
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (checkExistingUser) {
            return res.status(400).json({ success: false, message: 'Username or email already exists' });
        }
        //hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);
        //*creating a new user
        const newUser = new User({ username, email, password: hashedPassword, role: role || 'user' });
        await newUser.save();
        if (newUser) {
            console.log('User registered:', newUser);
            return res.status(201).json({ success: true, message: 'User registered successfully' });
        }else {
            return res.status(400).json({ success: false, message: 'User registration failed' });
        }

    }catch(err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
} 



const loginUser = async (req,res) => {
    try {
        const userInfo = req.body;
        //user and password
        
        const user = await User.findOne({ username: userInfo.username });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(userInfo.password, user.password);
        
        
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, jwt_secret, { expiresIn: '1h' });
        return res.status(200).json({ success: true, message: 'Login successful', token });
    }catch(err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}



//login endpoint

module.exports = { registerUser, loginUser };