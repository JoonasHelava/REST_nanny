const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const MONGO_URI = require("./config");
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.json());

app.use("/api/plants", require("./api/routes/route"));

app.listen(port, () => console.log(`Server started on port ${port}`));
