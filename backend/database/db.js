import mongoose from 'mongoose';

export const Connection = async(username, password) => {

    const MONGODB_URI = `mongodb+srv://${username}:${password}@freecluster0.ivqqsjq.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
        console.log("Database connected Successfully!");
    }catch(error){
        console.log(`Error while connecting the database: `, error);
    }
}

export default Connection;