const mongoose = require('mongoose');
const env = require('dotenv');
env.config()
const connectToDb = async ()=>{
   try {
        const mongoUri = process.env.mongo_uri;
        const connected = await mongoose.connect(mongoUri);
        if (connected) {
            console.log("Connected To DB");
        }
   } catch (error) {
        console.log(error)
   }
}
module.exports = connectToDb