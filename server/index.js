const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const DataBaseConnections = require('./DataBaseConnection');
const registerMiddleware = require('./Middleware/RegiaterMiddleware');
const loginMiddleware = require('./Middleware/LoginMiddleware');
const session = require('express-session');
const passport = require('passport');
const { SucsessGoogleLogin, Googlefailure } = require('./Controller/GoogleController')
require('./Middleware/Authmiddleware')


dotenv.config();
const app = express();
DataBaseConnections();

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.CLIENT_SECRET
}));
app.use(passport.initialize())
app.use(passport.session())

app.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }
    
))

app.get('/google/callbacks',
    passport.authenticate('google',  { failureRedirect: '/failure' }),
    (req, res) => {
        res.redirect('/success'); 
    }
);

app.get('/success', SucsessGoogleLogin);
app.get('/failure', Googlefailure);

app.post('/register',registerMiddleware, (req, res) => {
    console.log('Request Body:', req.body);
    res.status(200).json({ message: "Registration successful" });
});

app.post('/login',loginMiddleware, (req, res) => {
    console.log('Request Body:', req.body);
    res.status(200).json({ message: "Registration successful" });
})

app.use((req, res, next) => {
    // console.log(`404 Error for: ${req.method} ${req.url}`);
    res.status(404).json({ error: 'Page Not Found' });
    next();
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
