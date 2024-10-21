import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      validate: {
        validator: function (emailValue) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailValue
          ); // this line takes the email value and test i.e it follow this pattrn;
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true }
); //timestamp-> it will add two extra properties ,createdAt and updatedAt.it will handled by mongoose.


userSchema.pre('save',function modifyPassword(next){
    //incoming user obj

    const user = this; //object with plain password;

const SALT = bcrypt.genSaltSync(9);

//hash password
const hashedPassword = bcrypt.hashSync(user.password,SALT);

//replace plain password with hashed password

user.password=hashedPassword;

next();
})

const user = mongoose.model("User", userSchema); // user collection

export default user;
