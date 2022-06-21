const inventeurs = [
    { first: "Albert", last: "Einstein", year: 1879, mort: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, mort: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, mort: 1642 },
    { first: "Marie", last: "Curie", year: 1867, mort: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, mort: 1630 },
]


const people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley,Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berling, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Betea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black, Elk", "Blair, Robert", "Blair, Tony", "Blake, William"];


// Array.prototype.filter()
// Filtre les personnes nées en 1500 ou plus et mortes en 1600 ou moins.
/*
Cette manière d'écrire fonctionne :
const fifteen = inventeurs.filter( inventeur => (inventeur.year >= 1500 && inventeur.year <= 1600 ))
*/
const fifteen = inventeurs.filter(function(inventeur){
    if(inventeur.year >= 1500 && inventeur.year <= 1600) {
        return true; // tu le gardes !
    };
});

// Affiche les résultats sous forme d'Array.
console.log(fifteen);

// Affiche les résultats sous forme de tableau.
console.table(fifteen);



// Array.prototype.map
// Affiche tout les first & last de l'array inventeurs sous forme d'Array.
const fullNames = inventeurs.map(inventeur => `${inventeur.first} ${inventeur.last}`);
console.log(fullNames);



// Array.prototype.sort()
// filtre les inventeurs par date de naissances, du plus vieux au plus jeune
const ordered = inventeurs.sort(function(firstPerson, secondPerson) {
    if(firstPerson.year > secondPerson.year) {
        return 1;
    }else{
        return -1;
    };
});
/*
Version raccourcie :
const ordered = inventeurs.sort((a, b) => a.year > b.year ? 1 : -1)
*/
console.table(ordered);



// Array.prototype.reduce()
// Nous indique combien d'années cumulées les inventeurs ont vécus.
const totalYears = inventeurs.reduce((total, inventeur) => {
    return total + (inventeur.mort - inventeur.year);
}, 0);
console.log(totalYears);



// filtrer les inventeurs par années vécus.
const oldest = inventeurs.sort(function(a, b) {
    const lastGuy = a.mort - a.year;
    const nextGuy = b.mort - b.year;
    // return lastGuy > nextGuy ? -1 : 1;
    if(lastGuy > nextGuy){
        return -1;
    }else{
        return 1;
    }
})
console.table(oldest);



// Créer une liste des boulevards de Paris contenant "de" n'importe où dans le nom
// lien : https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));

// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes("de"))



// exercise de filtrage
// filtrer les persnnes par ordre alphabétique du lastName.
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
})



// exercise de réduction
// reduire le nombre de valeurs dans la const data.
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {})