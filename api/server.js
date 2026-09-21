const express = require("express");
const app = express();
app.use(express.json());


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


// GET /produits/2 -> renvoie le produit dont l id vaut 2
app.get("/champs/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const champ = champs.find((p) => p.id === id);
  if (!champ) {                              // rien trouve
    return res.status(404).json({ erreur: "champion introuvable" });
  }
  res.json(champ);
});

// POST /produits -> ajoute un produit envoye dans le corps de la requete
app.post("/produits", (req, res) => {
  if (!req.body.nom) {                          // donnee obligatoire manquante
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = {
    id: champs.length + 1,
    nom: req.body.nom,
    prix: req.body.prix
  };
  champs.push(nouveau);                       // on ajoute au tableau
  res.status(201).json(nouveau);                // 201 = cree
});