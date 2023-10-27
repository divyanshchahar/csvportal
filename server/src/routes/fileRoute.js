const express = require("express");
const fs = require("node:fs/promises");

const router = express.Router();

router.route("/:fileName").get(async (req, res) => {
  try {
    const fileData = fs.readFile(`./files/${req.params.fileName}`);
    console.log(fileData);
  } catch (err) {
    console.error(err.mesage);
  }
});

module.exports = router;
