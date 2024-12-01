import express from "express";
import routes from "./routes/route.js";

const app = express();

app.set("view engine", "ejs");
app.use("/",routes)

app.listen(8000, () => console.log("Server up!"));
