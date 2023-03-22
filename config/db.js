const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to MongoDb ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(error);
    console.log(`Mongoose Database Error ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
