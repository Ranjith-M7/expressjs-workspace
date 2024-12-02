function homeController(req, res) {
  const data = {
    name: "nishi",
    userId: 22,
  };
  res.render("index", data);
}

export default homeController;
