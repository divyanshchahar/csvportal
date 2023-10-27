const express = require("express");
const fs = require("node:fs/promises");

const router = express.Router();

router.route("/:fileName").post(async (req, res) => {
  try {
    const fileData = fs.writeFile(
      `./src/files/${req.params.fileName}.csv`,
      req.body.data
    );
    console.log(req.body.data);
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

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

router.route("/:fileName").put(async (req, res) => {
  try {
    const fileData = fs.writeFile(
      `./src/files/${req.params.fileName}.csv`,
      req.body.data
    );
    console.log(req.body.data);
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

router.route("/:fileName").delete(async (req, res) => {
  try {
    const fileData = fs.unlink(`./src/files/${req.params.fileName}.csv`);
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

module.exports = router;
