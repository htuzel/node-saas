import mongoose from "mongoose";

mongoose.connect("mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE + "", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("open", () => {
  console.log("MongoDB connected.");
});
mongoose.connection.on("error", (error) => {
  console.log("MongoDB error: " + error);
});