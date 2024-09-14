const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://kaushikshailen131:CCARxYhOfWSOvJnP@harkirat.2tbsw.mongodb.net/paytm')

const userSchema=new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    username: String
})

const User=mongoose.model('User',userSchema);


module.exports={
    User
};