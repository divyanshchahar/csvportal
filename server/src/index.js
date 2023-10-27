const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/fileRoute");

const app = express();

const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/file", fileRoute);

app.listen(3200, () => {
  console.log("server listening on port 3200");
});
