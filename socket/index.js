const app = require("express")();
const http = require("require").server(app);
app.get("/", (req, res) => {
  const option = {
    root: path.join(__dirname),
  };
  const filename = "index.html";
  res.sendfile(filename, option);
});
app.listen(8000, () => {
  console.log("app is runing");
});
