import express from "express";

const app = express();

// regex
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("It's working...");
});

// app.get(/x/, (req, res) => {
//   res.send("It's working...");
// });

// app.get("/products/product/1", (req, res) => {
//   res.send("It's working...");
// });

app.listen(8000, () => {
  console.log("Server Up!");
});
