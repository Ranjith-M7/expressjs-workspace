import express from "express";
import path from "path";

// built in middleware function serves static files

const app = express();

app.use(express.static("./public"));

app.get("/home", (req, res) => {
  res.sendFile(path.join(process.cwd(), "/public/index.html"));
  console.log("Response ok");
});

app.listen(8000, () => console.log("Server up!"));
