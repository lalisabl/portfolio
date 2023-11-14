require("dotenv").config();
const app = require("./app.js");
const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
