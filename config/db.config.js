require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    keepAlive: true,
    keepAliveInitialDelay: 300000
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("connection error " + err);
    process.exit();
});
