const {Schema , model} = require('mongoose');

const adminSchema = new Schema({

    userName:{
        type:String,
        required:[true , "user name is required...!"],
    },
    email:{
        type:String,
        required:[true , "email is required...!"],
        unique:[true ,"this email is already taken...!"],
    },
    password:{
        type:String,
        required:[true , "password is required...!"],
        unique:[true , "this password is already taken...!"],
    },
    image:{
        type:String,
        default:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
    },
    role:{
        type:String,
        enum:["admin" , "user"],
        default:"user"
    },

});

module.exports = model("admins",adminSchema);