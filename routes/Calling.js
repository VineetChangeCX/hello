const express = require("express");
const router = express.Router();
const endingCall = require("../controller/endingCall");

router.get("/names", endingCall.names);
router.get("/designation", endingCall.designation);

module.exports = router;
