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
      <h2>Nej - lav unikt</h2>
      <p>Hvordan laver du et unikt password?:</p>
      <a href="#" id="svar1" class="box">Minimumskrav</a>
      <a href="#" id="svar2" class="box">Minimum 15 tegn etc</a>
    `;
  } else if (answer === 'answer2') {
    questionDiv.innerHTML = `
      <h2>En ny version af et gammelt password er skidt</h2>
      <p>Dan i stedet et nyt. Hvordan? </p>
      <a href="#" id="svar1" class="box">Minimumskrav - for memory</a>
      <a href="#" id="svar2" class="box">Minimum 15 tegn etc.</a>
    `;
  } else if (answer === 'answer3') {
    questionDiv.innerHTML = `
      <h2>Super - det er vigtigt at have unikke passwords til forskellige platforme.</h2>
      <p>Hvordan skaber du dit nye password?</p>
      <a href="#" id="svar1" class="box">Minimumskrav</a>
      <a href="#" id="svar2" class="box">Minimum 15 tegn etc.</a>
    `;
  }
}