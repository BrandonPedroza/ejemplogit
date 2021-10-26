const mongoose = require('mongoose');

const connectDB = async () => {
   try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host} `);
   } catch (error) {
       console.error(error);
   }
};

module.exports = connectDB;