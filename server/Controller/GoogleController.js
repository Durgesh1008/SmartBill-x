const User = require("../Models/User");

const SucsessGoogleLogin = async (req, res) => {
    if (!req.user) {
        return res.redirect('/failure');
    }

    try {
        const { displayName, emails } = req.user;

        const name = displayName || 'No Name';
        const email = (emails && emails.length > 0) ? emails[0].value : 'No Email';

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({
                name,
                email,
                password: 'N/A',
                role: 'customer'
            });

            await user.save();
        }

        if (!res.headersSent) {
            res.status(200).json({ message: `Welcome ${user.email}` });
            
        }
    } catch (error) {
        console.error('Error storing user data:', error);
        if (!res.headersSent) {
            res.status(500).send('Internal Server Error');
        }
    }
};

const Googlefailure = (req, res) => {
    res.status(400).send('Google login failed. Please try again.');
};

module.exports = {
    SucsessGoogleLogin,
    Googlefailure,
};
