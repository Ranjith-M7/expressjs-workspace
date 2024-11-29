import express from "express";

const app = express();

// Query string
app.get("/product", (req, res) => {
  const { model, id } = req.query;
  console.log(`Product Model: ${model}, Product Id: ${id}`);
  res.send("Response ok")
});

app.listen(8000, () => console.log("Server up!"));