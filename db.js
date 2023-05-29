const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
exports.connectMongoose = () =>{
mongoose
.connect("mongodb://0.0.0.0:27017/passport")
.then((e) => console.log(`Connected to MongoDB:${e.connection.host}`))
.catch((e) => console.log(e));
}




const userSchema =new mongoose.Schema({
    name:String,
        username:{
        type:String,
        required:true,
            unique: true
    },
    password:{
        type:String,
        required:true
    }
    // token:{
    //     type:String,
    //     required:true
    // }

})
exports.User = mongoose.model('User', userSchema);

// const collection = new mongoose.model('LogInCollection',LogInSchema)

// module.exports = collection