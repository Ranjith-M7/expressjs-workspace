import express from "express";
import userCredentials from "./middlewares/log.js";

// validating the user request to the user, authenticate the user, authorization the usetr - middleware
// request - middleware - response

const app = express();

app.use(userCredentials);

app.get("/", (req, res) => {
  res.send("<h1>Home Screen</h1>");
  console.log("Response ok");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Screen</h1>");
  console.log("Response ok");
});

app.listen(8000, () => console.log("Server up!"));

