const express = require("express");
const app = express();
const path = require("path");

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "../build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"))
);
app.listen(5000, () => {
  console.log("server is running");
});
