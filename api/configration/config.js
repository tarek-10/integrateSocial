const mongoose = require("mongoose");

const connection = async () => {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("Db Connected Successfully...!");
    })
    .catch((error) => {
      console.log("Fail To Connect Db...!");
    });
};

module.exports = connection;
