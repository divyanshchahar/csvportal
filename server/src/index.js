const express = require("express");
const cors = require("cors");

const app = express();

const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.listen(3200, () => {
  console.log("server listening on port 3200");
});

