//sélectionne tous les input
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

//fonction pour changer la valeurs des variables
function handle_update(){

    //récupère le data-sizing des inputs
    const suffix = this.dataset.sizing || '';

    //on sélectionne le document dans son intégralité et on lui attribut les propriétées des inputs ( ici les variables CSS )
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//Pour chaque inputs on lui indique un changement ou un mouvement du pointeur de la souris, et si c'est le cas, la fonction s'active.
inputs.forEach(input => input.addEventListener("change", handle_update));
inputs.forEach(input => input.addEventListener("mousemove", handle_update));