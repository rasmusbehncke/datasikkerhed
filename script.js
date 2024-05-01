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




//Branching version 2

// Deklaration af variabler
let questionDiv = document.getElementById('question');
let answersContainer = document.getElementById('answers');

// Tilføj event listener til det overordnede svar-container
answersContainer.addEventListener('click', function(event) {
  let answer = event.target.dataset.answer;
  if (answer) {
    nextQuestion(answer);
  }
});

// Funktion til at tilføje event listeners til svarmulighederne
function addAnswerEventListeners() {
  for (let i = 1; i <= 9; i++) {
    let svarBtn = document.getElementById(`nytSvar${i}`);
    if (svarBtn) {
      svarBtn.addEventListener('click', function() {
        nextQuestion(`nytSvar${i}`);
      });
    }
  }
}

// Funktion til at skifte spørgsmål og svarmuligheder
function nextQuestion(answer) {
  // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
  if (answer === 'answer1') {
    questionDiv.innerHTML = `
      <h2>Nej - lav unikt</h2>
      <p>Hvordan laver du et unikt password?:</p>
      <a href="#" id="nytSvar1" class="box">Minimumskrav</a>
      <a href="#" id="nytSvar2" class="box">Minimum 15 tegn etc</a>
    `;
  } else if (answer === 'answer2') {
    questionDiv.innerHTML = `
      <h2>En ny version af et gammelt password er skidt</h2>
      <p>Dan i stedet et nyt. Hvordan? </p>
      <a href="#" id="nytSvar1" class="box">Minimumskrav - for memory</a>
      <a href="#" id="nytSvar2" class="box">Minimum 15 tegn etc.</a>
    `;
  } else if (answer === 'answer3') {
    questionDiv.innerHTML = `
      <h2>Super - det er vigtigt at have unikke passwords til forskellige platforme.</h2>
      <p>Hvordan skaber du dit nye password?</p>
      <a href="#" id="nytSvar1" class="box">Minimumskrav</a>
      <a href="#" id="nytSvar2" class="box">Minimum 15 tegn etc.</a>
    `;
  } else if (answer === 'nytSvar1') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Yderligere spørgsmål 1</h2>
      <p>Det er ok, men ikke det mest sikre valg</p>
      <a href="#" id="nytSvar3" class="box">Videre</a>
    `;
  } else if (answer === 'nytSvar2') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Dit sikre password er blevet lækket. Hvordan forholder du dig?</p>
      <a href="#" id="nytSvar4" class="box">Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</a>
      <a href="#" id="nytSvar5" class="box">Jeg laver et helt nyt unikt password</a>
    `;
  } else if (answer === 'nytSvar3') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Dit sikre password er blevet lækket. Hvordan forholder du dig?</p>
      <a href="#" id="nytSvar4" class="box">Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</a>
      <a href="#" id="nytSvar5" class="box">Jeg laver et helt nyt unikt password</a>
    `;
  } else if (answer === 'nytSvar4') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Ikke Genbrug</h2>
      <p>ikke genbrug bla bla lav unikt </p>
      <a href="#" id="nytSvar6" class="box">Forstået - videre</a>
    `;
  } else if (answer === 'nytSvar5'|| answer === 'nytSvar6' ) {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Du har nu skabt et sikkert password</h2>
      <p>Og du ved hvordan du skal forholde dig i fobindelse med læk. Men hvordan husker du?</p>
      <a href="#" id="nytSvar7" class="box">Memorere</a>
      <a href="#" id="nytSvar8" class="box">skriver det ned</a>
      <a href="#" id="nytSvar9" class="box">Password manager</a>
    `;
  } else if (answer === 'nytSvar7') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Memorerer</h2>
      <p>Udemærket - men hvis du føler dig overvældet kan du bruge en password manager</p>
    `;
  } else if (answer === 'nytSvar8') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Skriv det ned</h2>
      <p>Udemærket - men for at opnå den bedst sikkerhed, krypter eller lås inde</p>
    `;
  } else if (answer === 'nytSvar9') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Password manager</h2>
      <p>Du har nu et bådet sikkert og sikret password. </p>
    `;
  } 




  // Tilføj event listeners til de nye svarmuligheder
  addAnswerEventListeners();
}

// Kald funktionen første gang
addAnswerEventListeners();






/* første udkast 

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
*/