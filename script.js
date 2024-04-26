//scrolleffekt

function updateProgressBar() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledPercentage = (window.scrollY / scrollableHeight) * 98;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.display = 'block'; // Show progress bar
  progressBar.style.height = scrolledPercentage + '%'; // Update height based on scroll
}

// Event listener for scroll event
window.addEventListener('scroll', updateProgressBar);


//Skygge på box-knapper



// Lyt efter mouseover-hændelsen på det overordnede element
document.getElementById('question').addEventListener('mouseover', function(event) {
  // Kontroller om mouseover-hændelsen er fra en knap
  if (event.target.matches('.box')) {
    // Tilføj skyggeeffekten
    event.target.classList.add('shadow');
  }
});

// Lyt efter mouseout-hændelsen på det overordnede element
document.getElementById('question').addEventListener('mouseout', function(event) {
  // Kontroller om mouseout-hændelsen er fra en knap
  if (event.target.matches('.box')) {
    // Fjern skyggeeffekten
    event.target.classList.remove('shadow');
  }
});





/* fungerende kode:
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
*/


//Branching


let answer1Btn = document.getElementById('answer1');
let answer2Btn = document.getElementById('answer2');
let answer3Btn = document.getElementById('answer3');

// Tilføj event listeners til hver knap
answer1Btn.addEventListener('click', function() {
  nextQuestion('answer1');
});

answer2Btn.addEventListener('click', function() {
  nextQuestion('answer2');
});

answer3Btn.addEventListener('click', function() {
  nextQuestion('answer3');
});

// Funktion til at skifte spørgsmål og svarmuligheder
function nextQuestion(answer) {
  let questionDiv = document.getElementById('question');
  
  // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
  if (answer === 'answer1') {
    questionDiv.innerHTML = `
      <h3>Spørgsmål 2</h3>
      <p>Vælg en svarmulighed:</p>
      <a href="#" id="svar1" class="box">Svarmulighed 1</a>
      <a href="#" id="svar2" class="box">Svarmulighed 2</a>
      <a href="#" id="svar3" class="box">Svarmulighed 3</a>
    `;
  } else if (answer === 'answer2') {
    questionDiv.innerHTML = `
      <h3>Spørgsmål 3</h3>
      <p>Vælg en svarmulighed:</p>
      <a href="#" id="svar1" class="box">Svarmulighed 1</a>
      <a href="#" id="svar2" class="box">Svarmulighed 2</a>
      <a href="#" id="svar3" class="box">Svarmulighed 3</a>
    `;
  } else if (answer === 'answer3') {
    questionDiv.innerHTML = `
      <h3>Spørgsmål 4</h3>
      <p>Vælg en svarmulighed:</p>
      <a href="#" id="svar1" class="box">Svarmulighed 1</a>
      <a href="#" id="svar2" class="box">Svarmulighed 2</a>
      <a href="#" id="svar3" class="box">Svarmulighed 3</a>
    `;
  }
}