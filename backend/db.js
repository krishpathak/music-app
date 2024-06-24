const mongoose =require('mongoose')
const mongoURI='mongodb://localhost:27017';
const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Succesfully connected to MongoDB")}
    ).catch((err)=>{
        console.log("Error connecting to mongoDB")}
    )
}

module.exports=connectToMongo