// récupérer les deux champs

const eurosInput = document.getElementById("euros");
const frsInput = document.getElementById("frS");

// associer les changements par rapport aux valeurs

eurosInput.addEventListener ('input',()=> {
// Récupérer la valeur

 const eur = eurosInput.value;
 //convertir en nombre
 const eurNumber= parseFloat (eur);

// Recupérer le taux

 const taux = eurosInput.getAttribute ('data-taux');
// Calculer la nouvelle conversion

const newConvert = eurNumber * taux;
// mettre a jour
frsInput.value = newConvert;
console.log ( newConvert);


})

frSInput.addEventListener ('input',()=> {

    
})