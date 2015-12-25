var myArray = ["Julie", "David", "Chloé"];
alert(myArray);  // affiche « Bob,Julien,Roger »

// Parcourir un tableau à la main
alert(myArray[0]); // affiche « Julie »
alert(myArray[1]); // affiche « David »
alert(myArray[2]); // affiche « Chloé »

// Parcourir un tableau automatiquement

for (i = 0; i < myArray.length; i++) {
alert(myArray[i]);
}

// Supprimer le dernier élément
alert(myArray.pop()); // affiche « Roger »
alert(myArray); // affiche « Bob, Julien »

// Ajouter un élément à la fin
myArray.push("Marion");
alert(myArray); // affiche « "Julie", "David", "Marion" » 

var $liste = document.getElementById("liste");
var $prenom = document.getElementById("prenom");
var $nom = document.getElementById("nom");
var $numero = document.getElementById("numero");
var $ajouter = document.getElementById("ajouter");

var contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();