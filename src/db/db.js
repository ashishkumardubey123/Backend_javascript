import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URL) {
      const connection =  await mongoose.connect(`${process.env.MONGODB_URL}`);
      console.log(`\n MongoDB connected`);
      
    }
    else{

      console.log("error")
    }
    
  
  
  } catch (error) {
    console.log("MongoDB connection error", error.message);
    process.exit(1)
  }
};

export default connectDB;
