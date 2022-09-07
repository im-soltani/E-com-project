/* eslint-disable quotes */
const express = require("express");

const router = express.Router();

const { sendEmail } = require("./mail");

router.post("/", (req, res) => {
  sendEmail(req.body.email, req.body.subject, req.body.description);
  res.status(201).send({ success: true });
});

module.exports = router;
