const express = require("express");
const router = express.Router()

router.route("/").get((req, res) => {
  res.status(200).json({message:"Get all contacts"});
})
router.route("/").post((req, res) => {
  res.status(200).json({message:"Create contact"});
})
//get individual contacts
router.route("/:id").get((req, res) => {
  res.status(200).json({message:`Get contact for ${req.params.id}`});
})
//update individual contacts
router.route("/:id").put((req, res) => {
  res.status(200).json({message:`Update contact for ${req.params.id}`});
})
//delete individual contacts
router.route("/:id").delete((req, res) => {
  res.status(200).json({message:`Delete contact for ${req.params.id}`});
})

module.exports = router