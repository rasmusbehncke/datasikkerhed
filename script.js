//skygge på box-knapper

// Hent referencer til alle box-elementerne
var boxes = document.querySelectorAll('.box');

// Tilføj event listeners til hver box
boxes.forEach(function(box) {
  box.addEventListener('mouseover', addShadow);
  box.addEventListener('mouseout', removeShadow);
});

// Funktion til at tilføje skygge
function addShadow() {
  this.classList.add('shadow');
}

// Funktion til at fjerne skygge
function removeShadow() {
  this.classList.remove('shadow');
}



/* tidligere version

function addShadow(element) {
    element.classList.add('shadow');
}

function removeShadow(element) {
    element.classList.remove('shadow');
}

*/