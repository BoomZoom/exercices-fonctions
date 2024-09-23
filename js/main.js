import showModal, {showModalBlock,showModalBlockConfirm} from './src/modal.js'


function Exercice1() {
    console.log("😄 Exercice 1 : Calculer l’aire d’un rectangle");

    console.log("Objectif: Créez une fonction `calculerAireRectangle` qui prend en paramètres la largeur et la hauteur d’un rectangle et retourne l’aire du rectangle.");

    console.log("Résultat attendu:");
    console.log("calculerAireRectangle(5, 10) // 50");
    console.log("calculerAireRectangle(8, 3) // 24");

    function calculerAireRectangle(largeur, hauteur) {
        return largeur * hauteur;
    }

    console.log(`Le résultat résultant pour 5x10: ${calculerAireRectangle(5, 10)}`);
    console.log(`Le résultat résultant pour 8x3: ${calculerAireRectangle(8, 3)}`);
}

function Exercice2() {
    console.log("😄 Exercice 2 : Conversion de température");

    console.log("Objectif: Créez une fonction `convertirEnCelsius` qui prend une température en Fahrenheit et la convertit en Celsius.");

    console.log("Résultat attendu:");
    console.log("convertirEnCelsius(32) // 0");
    console.log("convertirEnCelsius(68) // 20");

    function convertirEnCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    console.log(`Le résultat résultant pour 32°F: ${convertirEnCelsius(32)}`);
    console.log(`Le résultat résultant pour 68°F: ${convertirEnCelsius(68)}`);
}

function Exercice3() {
    console.log("😊 Exercice 3 : Déterminer si un nombre est pair");

    console.log("Objectif: Créez une fonction `estPair` qui prend un nombre en paramètre et retourne true si le nombre est pair, et false sinon.");

    console.log("Résultat attendu:");
    console.log("estPair(4) // true");
    console.log("estPair(7) // false");

    function estPair(nombre) {
        return nombre % 2 === 0;
    }

    console.log(`Le résultat résultant pour 4: ${estPair(4)}`);
    console.log(`Le résultat résultant pour 7: ${estPair(7)}`);
}

function Exercice4() {
    console.log("😊 Exercice 4 : Calculer la factorielle d’un nombre");

    console.log("Objectif: Créez une fonction `factorielle` qui prend un nombre entier positif en paramètre et retourne la factorielle de ce nombre.");

    console.log("Résultat attendu:");
    console.log("factorielle(5) // 120");
    console.log("factorielle(3) // 6");

    function factorielle(nombre) {
        let resultat = 1;
        for (let i = 1; i <= nombre; i++) {
            resultat *= i;
        }
        return resultat;
    }

    console.log(`Le résultat résultant pour 5: ${factorielle(5)}`);
    console.log(`Le résultat résultant pour 3: ${factorielle(3)}`);
}

function Exercice5() {
    console.log("😅 Exercice 5 : Trouver le plus grand nombre dans un tableau");

    console.log("Objectif: Créez une fonction `trouverMax` qui prend un tableau de nombres en paramètre et retourne le plus grand nombre du tableau.");

    console.log("Résultat attendu:");
    console.log("trouverMax([3, 7, 2, 5, 10]) // 10");
    console.log("trouverMax([1, 20, 3, 14]) // 20");

    function trouverMax(tableau) {
        let max = tableau[0];
        for (let i = 1; i < tableau.length; i++) {
            if (tableau[i] > max) {
                max = tableau[i];
            }
        }
        return max;
    }

    console.log(`Le résultat résultant pour [3, 7, 2, 5, 10]: ${trouverMax([3, 7, 2, 5, 10])}`);
    console.log(`Le résultat résultant pour [1, 20, 3, 14]: ${trouverMax([1, 20, 3, 14])}`);
}

function Exercice6() {
    console.log("😰/😡 Exercice 6 : Compter les voyelles dans une chaîne de caractères");

    console.log("Objectif: Créez une fonction `compterVoyelles` qui prend une chaîne de caractères en paramètre et retourne le nombre de voyelles présentes dans la chaîne.");

    console.log("Résultat attendu:");
    console.log("compterVoyelles('Bonjour tout le monde') // 8");
    console.log("compterVoyelles('JavaScript') // 3");

    function compterVoyelles(chaine) {
        const voyelles = "aeiouyAEIOUY";
        let compteur = 0;
        for (let i = 0; i < chaine.length; i++) {
            if (voyelles.includes(chaine[i])) {
                compteur++;
            }
        }
        return compteur;
    }

    console.log(`Le résultat résultant pour 'Bonjour tout le monde': ${compterVoyelles("Bonjour tout le monde")}`);
    console.log(`Le résultat résultant pour 'JavaScript': ${compterVoyelles("JavaScript")}`);
}

function Exercice7() {
    console.log("😊 Exercice 7 : Doubler un nombre avec une fonction fléchée");

    console.log("Objectif: Créez une fonction fléchée `doubler` qui prend un nombre en paramètre et retourne le double de ce nombre.");

    console.log("Résultat attendu:");
    console.log("doubler(5) // 10");
    console.log("doubler(7) // 14");

    const doubler = (nombre) => nombre * 2;

    console.log(`Le résultat résultant pour 5: ${doubler(5)}`);
    console.log(`Le résultat résultant pour 7: ${doubler(7)}`);
}


function executeExercises() {
    Exercice1();
    Exercice2();
    Exercice3();
    Exercice4();
    Exercice5();
    Exercice6();
    Exercice7();
}


executeExercises();