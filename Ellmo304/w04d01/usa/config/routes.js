const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.get("/donald", (req, res) => res.render("donald"));
router.get("/hilary", (req, res) => res.render("hilary"));
router.get("/polls", (req, res) => res.render("polls"));


module.exports = router;
