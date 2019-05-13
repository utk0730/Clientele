const config = require("config");
const mongoose = require("mongoose");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db,{ useNewUrlParser: true,useCreateIndex: true, } );
    console.log('database connection successfull')
  } catch (err) {
      console.log('error connecting to database',err.message)
      process.exit(1) // exit process with failure
  }
};

module.exports = connectDB;