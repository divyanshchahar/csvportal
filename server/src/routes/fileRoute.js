const express = require("express");
const fs = require("node:fs/promises");

const router = express.Router();

router.route("/:fileName").get(async (req, res) => {
  try {
    const fileData = await fs.readFile(
      `./src/files/${req.params.fileName}.csv`,
      "utf-8"
    );
    res.send(fileData).status(200);
  } catch (err) {
    console.error(err);
    res.send(err).status(500);
  }
});

module.exports = router;
