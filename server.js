const app = require("./app/app");
const {DB_LINK,PORT} = require('./app/config')
const mongoose = require('mongoose')

mongoose
  .connect(DB_LINK)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, (error) => {
      if (error) {
        console.log("happened error: ", error);
        process.exit(1);
      } else {
        console.log(`server running. use port ${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.log("Error with connect to database", err);
    process.exit(1);
  });


