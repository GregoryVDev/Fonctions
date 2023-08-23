// ** Les fonctions **


// fonction classique (à l'ancienne)
function faireQuelqueChose()
{
    console.log("Je fais un truc");
    console.log(5+6);
    alert("Calcule terminé !");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
//  appel de la fonction : faireQuelqueChose();

// fonction flêchée
const addition = (a, b) =>
{
    // console.log(a + b);
};

addition(4,3);
addition(432, 21512121);


// ** La portée des variables **

function add2()
{
    let num = 4;
    console.log(num + 2); // Faut ajouter une fonction qui l'appelle : add2() sinon on peut mettre "return 4 + 2" et il n'y a plus besoin de faire une fonction qui appel
}

