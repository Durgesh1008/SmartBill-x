const mongoose = require('mongoose');
const User = require('../Models/User');
const bcrypt = require('bcrypt');

async function registerMiddleWare(req, res, next) {
    const { name, email, password, role } = req.body;

    if (!name || !password || !role || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword, 
            role
        });

        await newUser.save();
        next();
    } catch (error) {
        console.error('Error in registerMiddleWare:', error); 
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = registerMiddleWare;
