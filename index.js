import express from "express";
import routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs"); // tell express to use EJS
app.use(bodyParser.json());
app.use("/", routes);

app.post("/data", (req, res) => {
  const { name, youtube, age } = req.body;
  res.send(`${name}, ${youtube}, ${age}`);
});

app.listen(8000, () => console.log("Server up!"));
