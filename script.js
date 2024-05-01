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
      <h2>Genbrug? Nej tak!</h2>
      <p>Det er nemt at komme til at genbruge sine passwords igen og igen. Der er mange specifikke krav til passwords og det kan virke uoverskueligt at finde på nye komplicerede koder - og også huske dem igen. 
      </p><p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt. Hvordan vil du skabe dit nye password?:</p>
      <a href="#" id="nytSvar1" class="box">Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</a>
      <br><br>
      <a href="#" id="nytSvar2" class="box">Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</a>
    `;
  } else if (answer === 'answer2') {
    questionDiv.innerHTML = `
      <h2>Password 2.0</h2>
      <p>Undersøgelser viser at mange opdaterer et gammelt password i stedet for at skifte til et nyt. Ofte bliver et årstal eller en årstid blot tilføjet. 
      </p><p>
      Dette er en dårlig vane. Hackere er også bekendt med denne vane. Hvis dit gamle password er blevet lækket, er det meget nemt at finde frem til den opdaterede version af dit gamle password.</p>
      <p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt. Hvordan vil du skabe dit nye password?:</p>
      <a href="#" id="nytSvar1" class="box">Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</a>
      <br><br>
      <a href="#" id="nytSvar2" class="box">Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</a>
    `;
  } else if (answer === 'answer3') {
    questionDiv.innerHTML = `
      <h2>Sådan - det er nemlig vigtigt at have unikke passwords til forskellige platforme.</h2>
      <p>Hvordan skaber du dit nye password?</p>
      <a href="#" id="nytSvar1" class="box">Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</a>
      <br><br>
      <a href="#" id="nytSvar2" class="box">Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</a>
    `;
  } else if (answer === 'nytSvar1') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Lidt har også ret</h2>
      <p>Det er naturligvis okay blot at opfylde hjemmesidens krav til et password. Langt de fleste hjemmesider kræver et paswword på mindst 8 tegn - og derfor findes der også flest passwords med netop det antal karakterer. Det gør denne længde passwords mere sårbare overfor hackere. Overvej derfor om du kan lave et længere password. Center for Datasikkerhed anbefaler 15 tegn.</p>
      <a href="#" id="nytSvar3" class="box">Videre</a>
    `;
  } else if (answer === 'nytSvar2') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Dit nye og sikre password er blevet lækket. Du skal derfor på den igen - lave endnu et nyt password. Hvordan forholder du dig?</p>
      <a href="#" id="nytSvar4" class="box">Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</a>
      <br><br>
      <a href="#" id="nytSvar5" class="box">Jeg laver et helt nyt unikt password igen.</a>
    `;
  } else if (answer === 'nytSvar3') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Dit nye og sikre password er blevet lækket. Du skal derfor på den igen - lave endnu et nyt password. Hvordan forholder du dig?</p>
      <a href="#" id="nytSvar4" class="box">Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</a>
      <br><br>
      <a href="#" id="nytSvar5" class="box">Jeg laver et helt nyt unikt password igen.</a>
    `;
  } else if (answer === 'nytSvar4') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Genbrug? Nej tak!</h2>
      <p>Det er nemt at komme til at genbruge sine passwords igen og igen. Der er mange specifikke krav til passwords og det kan virke uoverskueligt at finde på nye komplicerede koder - og også huske dem igen. 
      </p><p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt.</p>
      <a href="#" id="nytSvar6" class="box">Forstået - videre</a>
    `;
  } else if (answer === 'nytSvar5'|| answer === 'nytSvar6' ) {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Du har nu skabt et sikkert password</h2>
      <p>Tillykke med det - det er både langt og kryptisk. Hvordan husker du det?</p>
      <a href="#" id="nytSvar7" class="box">Jeg memorerer det</a>
      <br><br>
      <a href="#" id="nytSvar8" class="box">Jeg skriver det ned</a>
      <br><br>
      <a href="#" id="nytSvar9" class="box">Jeg bruger en password manager</a>
    `;
  } else if (answer === 'nytSvar7') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Huskespillet</h2>
      <p>Det er en udemærket strategi. Men mens du husker dit password, så husk på at du gerne skal have unikke passwords til hvert login. Hvis det er for overvældende, kan du overveje at benytte en password manager.</p>
    `;
  } else if (answer === 'nytSvar8') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Skriv det ned</h2>
      <p>Det kan være særdeles hjælpsomt at skrive sine passwords ned. Men om du gør det fysisk eller digitalt, så sørg endelig for at henholdsvis lås dem inde eller kryptere dem.</p>
    `;
  } else if (answer === 'nytSvar9') {
    // Skift spørgsmålet og svarmulighederne baseret på det valgte svar
    questionDiv.innerHTML = `
      <h2>Password manageren</h2>
      <p>Med dine passwords sikkert gemt i en password manager kan du glemme dine passwords. Du bliver logget ind med biometrisk input - ansigtsgenkendelse eller fingeraftryk. Og hvis du skal bruge et password på en enhed der ikke er sat op med din password manager kan du blot åbne manageren på en af dine andre enheder og finde dit kartotek af adgangskoder.</p>
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