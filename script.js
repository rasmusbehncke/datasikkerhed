//Skygge på box-knapper


var boxes = document.querySelectorAll('.box');

boxes.forEach(function(box) {
  box.addEventListener('mouseover', addShadow);
  box.addEventListener('mouseout', removeShadow);
});

function addShadow() {
  this.classList.add('shadow');
}

function removeShadow() {
  this.classList.remove('shadow');
}
