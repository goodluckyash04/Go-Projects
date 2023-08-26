const mongoose = require("mongoose");

const connectToMongo = () => {
  // mongoose.connect("mongodb://localhost:27017/mynotebook?directConnection=true")
  mongoose.connect("mongodb://localhost:27017/mynotebook?directConnection=true", () => {
    console.log("conected to mongos");
  });
};
module.exports = connectToMongo;


  // if you want to verify it use console.log
  


