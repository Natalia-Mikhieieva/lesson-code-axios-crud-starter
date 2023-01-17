// routes/movie-characters.routes.js

const router = require("express").Router();
const ApiService = require("../services/api.service");
const apiService = new ApiService();
const axios = require("axios");

router.get("/movie-characters/list", (req, res) => {
  axios.get("https://ih-crud-api.herokuapp.com");
});

router.get("/movie-characters/create", (req, res) => {
  res.render("pages/new-character-form");
});

router.post("/movie-characters/create", (req, res) => {
  const characterInfo = req.body;

  apiService.createCharacter(characterInfo).then((result) => {
    res.redirect("/movie-characters/list");
  })
})

/* // List all the characters from the API.


// Render a form to edit a character.


// Submit info to edit a character with a matching id.


// Delete a character with a matching id.
router.get("/movie-characters/delete/:id", (req, res) => {
  res.send(`Here we'll delete character with ID ${req.params.id}`);
});
 */
module.exports = router;
