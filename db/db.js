const mongoose = require("mongoose");

async function main(){
    mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
     console.log("Database Connected");
  }).catch((err) => {
    console.log(err);
  })

module.exports = main;  