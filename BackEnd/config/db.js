// here we write logic, using that we can connect with the database

import mongoose  from "mongoose";

export const connectDB = async ()=> {
   await mongoose.connect('mongodb+srv://bisenanshu48:anshu123@cluster0.buphz.mongodb.net/cuisine-courier').then(()=> console.log("DB Connected"));

}  