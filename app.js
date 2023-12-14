const express = require("express");
const app = express();
const port = 9003;

const Calling = require("./routes/Calling");
app.use("/api/endpoints", Calling);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
