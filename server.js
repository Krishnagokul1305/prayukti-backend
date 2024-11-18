const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const app = require("./app/app");
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, () => console.log("server listening..."));
