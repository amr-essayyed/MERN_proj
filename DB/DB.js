import mongoose from 'mongoose';

export default async function connectToDB(){
    mongoose.connect(process.env.DB_URI, {dbName: "blog_db"})
    .then(() => 
        {
            console.log("Connected to MongoDB!");
            //todo: emit event 'DBConnected'
        })
    .catch(err => console.error("Error connecting to MongoDB: ",err));

}