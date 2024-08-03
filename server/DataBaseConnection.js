const mongoose = require('mongoose');
require('dotenv').config()
const DataBaseConnections = async () => {
    try {
        await mongoose.connect(process.env.mongodb_Url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DB Connected");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = DataBaseConnections;
