import express from "express";

const app = express();

//postman with app.route()
app.route("/student")
.get((req, res) => res.send("All student"))
.post((req, res) => res.send("Add student"))
.put((req, res) => res.send("Update student"))
.delete((req, res) => res.send("Delete student"));

app.listen(8000, () => {
  console.log("Server Up!");
});
