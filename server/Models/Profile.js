const mongooes = require('mongoose');
const UserProfile = new mongooes.Schema({
    imgUrl: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});

const Profile = mongooes.model('Profile', UserProfile);
module.exports = Profile