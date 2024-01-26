import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;

const connection = async () =>{
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("connection is sussecfull........");
    }catch(e){
        console.log("connection failed........");
    }
};


export default connection;