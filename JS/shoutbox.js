

var allmsg = [];

function relou() {  //fonction appelée qd click
  var msg = document.getElementById('message').value; //récupère le dernier mess entré
  document.getElementById('contenu').innerHTML = ""; //réinitilisation de la box
  allmsg.push(msg);                                //ajout newmess au tableau des mess
  if (allmsg.length>20){                            //si plus de 20mess
      allmsg.shift();                               //...on dégage le plus vieux
  }
  for (var i=(allmsg.length-1);i>=0;i--){          //on parcours les mess avec le plus récent en haut
    document.getElementById('contenu').innerHTML += "<p>"+ allmsg[i] +"</p>";
  }                                                //on applique les mess dans la box au fur et à mesure
  sessionStorage.setItem("contenu", document.getElementById('contenu').innerHTML); //on enregistre le contenu de box
  sessionStorage.setItem("allmsg", JSON.stringify(allmsg));      //on enregistre le tableau, d'où json car relou sinon
}


function load(){                                           //on charge au démarrage
  document.getElementById("contenu").innerHTML +=  sessionStorage.getItem("contenu"); //on charge le contenu de la box
  allmsg = JSON.parse(sessionStorage.getItem("allmsg"));   //chargement tableau Json/relou
  if (!allmsg) {                                             //si erreur recherchement du tableau
      allmsg = [];                                          //pn recréé un tableau vide
  }
}


//revoir le focus dans la box (saisissez voitre texte)
