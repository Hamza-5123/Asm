const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const BASE = "panel/uploads";

router.post("/mkdir", (req, res) => {
  const { folder } = req.body;
  const full = path.join(BASE, folder);
  fs.mkdirSync(full, { recursive: true });
  res.json({ success: true });
});

module.exports = router;
