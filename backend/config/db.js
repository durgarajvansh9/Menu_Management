import mongoose from "mongoose";
const mongoDBUrl = process.env.MONOG_URL || "mongodb+srv://durgarajvansh3:5MGU7hJOtqg3M1Ep@cluster0.jnryhzx.mongodb.net/?retryWrites=true&w=majority";
;
const connectDB = async () => {
  try {
    mongoose.connect(mongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to mongoDB");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
