import mongoose from "mongoose";

export const Connection = () =>{
    const MONGOOSE_URL = 'mongodb+srv://guptakajal040917:c6MMBrcdbMEbr1w4@todo-database.e14h7tw.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true});
    mongoose.connection.on('connected', () => {
        console.log('databse connect successfully...');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('databse disconnected...');
    })
    mongoose.connection.on('error', () => {
        console.log('databse error...');
    })
}