const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

async function loginMiddleware(req, res, next) {
    const { email, password, role } = req.body;
    if (!password || !role || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }

        
        if (user.role !== role) {
            return res.status(400).json({ error: 'Incorrect role' });
        }

       
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // console.log(token)
        
        return res.status(200).json({ token, user: { id: user._id, email: user.email, role: user.role } });
    } catch (error) {
        console.error('Error in loginMiddleware:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = loginMiddleware;
