var express = require('express');
var router = express.Router();

var categories = [
    {
        id: 1,
        nom: "Calcul",
    }, 
    {
        id: 2,
        nom: "Logique",
    }, 
    {
        id: 3,
        nom: "Culture générale",
    }, 
    {
        id: 4,
        nom: "Anglais",
    }, 
]

var exercice = {
    questions: [
        {
            id: 1,
            categorie: "Calcul",
            niveau: 5,
            enonce: "Bla bla bla 1",
            reponses: {
                qcm: [ "reponse 1", "reponse 2", "reponse 3" ],
                exact: [ "reponse 1", "reponse1", "rep1" ],
            }
        },
        {
            id: 2,
            categorie: "Calcul",
            enonce: "Bla bla bla 2",
            niveau: 5,
            reponses: {
                qcm: [ "reponse 1", "reponse 2", "reponse 3" ],
            }
        }
    ]
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercice', questions: exercice.questions });
});

module.exports = router;
