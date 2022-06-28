const canvas = document.querySelector("#draw");
// le contexte permet de dessiner sur le canvas
const context = canvas.getContext("2d");
// Pour que le canvas soit de la même taille que la fenêtre du navigateur
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// La couleur de la ligne
context.strokeStyle = "#BADA55";

// Plus d'info sur https://developer.mozilla.org/fr/
// Pour le style des lignes
context.lineJoin = "round";
// Pour les jointures de lignes
context.lineCap = "round";
// la taille de la ligne
context.lineWidth = 100;

// Pour faire en sorte que les lignes se superposent ( ceci est un exemple, il existe plusieurs méthodes )
// context.globalCompositeOperation = "multiply"

// Pour ne pas dessiner quand la souris n'est pas cliqué
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; // stop la fonction quand le clic de la souris n'est pas activé
    console.log(e)
    context.strokeStyle = `hsl(${hue++}, 100%, 50%)`;
    context.beginPath();
    // commence le dessin à lastX et lastY
    context.moveTo(lastX, lastY);
    // va jusqu'à l'offsetX et l'offsetY
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    // on peut les écrire en une ligne : 
    // [lastX, lastY] = [e.offsetX, e.offsetY];

    if(hue >= 360){
        hue = 0;
    }

    if(context.lineWidth >= 100 || context.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        context.lineWidth++;
    }else{
        context.lineWidth--;
    }
}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);