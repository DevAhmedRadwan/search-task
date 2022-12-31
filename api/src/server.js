const http = require("http");
const app = require("./app");
const { PORT } = require("./configs/env");
const database = require("./configs/database");

database
  .then(() => {
    console.log("Database connection succeeded!");
  })
  .catch((err) => {
    console.log("Database connection failed!");
  });

const server = http.createServer(app);

server.listen(PORT, () => {
  let address = server.address().address;
  if (address === "::") address = "localhost";
  console.log(`App listening on http://${address}:${server.address().port}`);
});
