// 3 étapes dans la boucle while :
// 1. Initialisation de la variable
// 2. Condition
// 3. Mise à jour de la variable

let i = 1;
while (i <= 42){
    console.log(i);
    i++; // i=i+1; ou i+= 1;
}
for (let i = 0; i<10; i++){
    console.log(i);
}
for (let i = 9; i>=0; i--){
    console.log(i);
}
for (let i = 20; i>=0; i-= 2){
    console.log(i);
}
// --> Exercices pour les tables de multiplication
for (let i = 1; i <= 10; i++){
    for (let j = i; j <= i * 10; j+=i){
    console.log(j);
    }
}