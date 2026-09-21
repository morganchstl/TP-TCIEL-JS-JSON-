const express = require("express");
const app = express();



let champs = [
  { id: 1, nom: "Aatrox", categorie: "bruiser" },
  { id: 2, nom: "Ahri", categorie: "mage" },
  { id: 3, nom: "Akali", categorie: "assassin/mage" }
];

app.get("/champs", (req, res) => {
  res.json(champs);
});



// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});