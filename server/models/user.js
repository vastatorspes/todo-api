var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
})

// var user = new User({
//     email: "gerryfernando@gmail.com"
// });

// user.save().then((doc)=>{
//     console.log('User saved', doc)
// }, (e)=>{
//     console.log('Unable to save user', e)
// });

module.exports = {User}