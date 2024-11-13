/* BOUCLES - PRÉPA 4 : Le Devin
N.B. Cet exercice est à faire après avoir vu les fonctions
Ecrivez un programme qui va deviner le nombre auquel vous avez pensé (voir livre p.99 et 100)
- Demandez à l'utilisateur d'entrer un nombre entier entre 1 et 10 auquel il pense
	et annoncez-lui que vous allez essayer de le deviner.
	Le message pourrait être : "Pensez très fort à un nombre entier entre 1 et 10
	et entrez-le ici (je ne regarde pas, c'est promis !), je vais essayer de le deviner…"
- Affichez "Ce n'est pas …" tant que vous n'avez pas trouvé le nombre auquel il pensait
	et puis "J'ai trouvé ! Vous pensiez à …" lorsque vous avez trouvé.
*/

/* AIDES :
- Vous allez avoir besoin de la fonction Math.random() :
	cette fonction vous donne un nombre aléatoire entre 0 et 1 ;
- Vous allez avoir besoin aussi de la fonction Math.floor() :
	cette fonction vous donne l'arrondi vers le bas d'un nombre décimal :
	par exemple Math.floor(10.8) = 10 (la fonction tronque, ne garde que la partie entière)
- Pour une meilleure compréhension, prenez le temps de consulter la documentation pour savoir comment utiliser
	ces fonctions, y compris leurs paramètres et les valeurs qu'elles retournent.
*/
// Écrivez le code JavaScript pour résoudre cet exercice en essayant de deviner le nombre auquel l'utilisateur pense.

/*const numberUser = parseInt(prompt('Nombre ?'));
if (numberUser){
    if (numberUser > 0 && numberUser < 11){
        for (let i = 1;i <= 10; i++){
            if (numberUser === i) {
                console.log(`J'ai trouvé ! Vous pensiez à ${i}`);
                break;
            } else{
                console.log(`Ce n'est pas ${i}`);
            }
        }
    } else {
        console.log('Le nombre doit être entre 1 et 10 !');
    }
} else {
    console.log('Veuillez entrer un nombre !');
}*/


//LES FONCTIONS

// On peut écrire ça (C'est le mieux)
function sayHello(firstName, lastName){ // dans la parenthèses, c'est le paramètre; l'ordre est super important !
    console.log(`Bonjour ${firstName} ${lastName} !`);
}
sayHello('Lorian', 'Flamant');

//-------------------------------------------------------------------------------------//

/*function sayHello(firstName, lastName){ // dans la parenthèses, c'est le paramètre; l'ordre est super important !
    return `Bonjour ${firstName} ${lastName} !`;
    console.log('Bonjour'); // Code non-atteignable car il est après le return !
}
sayHello('Lorian', 'Flamant');*/

//-------------------------------------------------------------------------------------//

//Bonne syntaxe des fonctions



// Arow functions (c'est bien de faire ça, c'est plus court)
const toto = ()=>{
    console.log('Bonjour');
};

toto();

// OU (On évite de faire ça !!)
/*const sayHello = function(){
    console.log('Hello World !');
}
sayHello();*/
function isBissextile (year){
    if (year%4 === 0 && year%100 !== 0) {
        return true;
    }
    if (year%400 === 0){
        return true;
    }
    return false;
}

const year = parseInt(prompt('Veuillez entrer une année :'));
console.log(`C'est une année : ${isBissextile(year)}`);

