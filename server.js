const app = require("./app/app");

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.log("happened error: ", error);
    process.exit(1);
  } else {
    console.log(`server running. use port ${PORT}`);
  }
});
