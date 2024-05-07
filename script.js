//JS koden er delvist skabt i dialog med chatGPT. Jeg gav den en promt på den specifikke opgave og har selv rettet koden til, sådan at den blev ordenligt integreret i resten af min kode. 

//scrolleffekt

function updateProgressBar() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledPercentage = (window.scrollY / scrollableHeight) * 98;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.display = 'block'; // Vis progress bar
  progressBar.style.height = scrolledPercentage + '%'; // Opdaterer height baseret på scrollpositionen
}

// Event listener for scroll event
window.addEventListener('scroll', updateProgressBar);


//Skygge på knapper i branching scenario

// Lyt efter mouseover på knap (box)
document.getElementById('question').addEventListener('mouseover', function(event) {
  // Kontroller om mouseover-hændelsen er fra en knap
  if (event.target.matches('.box')) {
    // Tilføj skyggeeffekten
    event.target.classList.add('shadow');
  }
});

// Lyt efter mouseout 
document.getElementById('question').addEventListener('mouseout', function(event) {
  // Kontroller om mouseout-hændelsen er fra en knap
  if (event.target.matches('.box')) {
    // Fjern skyggeeffekten
    event.target.classList.remove('shadow');
  }
});




//Branching scenario

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
  if (answer === 'answer1') {
    questionDiv.innerHTML = `
      <h2>Genbrug? Nej tak!</h2>
      <p>Det er nemt at komme til at genbruge sine passwords igen og igen. Der er mange specifikke krav til passwords og det kan virke uoverskueligt at finde på nye komplicerede koder - og også huske dem igen. 
      </p><p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt. Hvordan vil du skabe dit nye password?:</p>
      <a href="#">
      <div id="nytSvar1" class="box"> Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</div>
      <a href="#"> 
      <div id="nytSvar2" class="box"> Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</div>
    `;
  } else if (answer === 'answer2') {
    questionDiv.innerHTML = `
      <h2>Password 2.0</h2>
      <p>Undersøgelser viser at mange opdaterer et gammelt password i stedet for at skifte til et nyt. Ofte bliver et årstal eller en årstid blot tilføjet. 
      </p><p>
      Dette er en dårlig vane. Hackere er også bekendt med denne vane. Hvis dit gamle password er blevet lækket, er det meget nemt at finde frem til den opdaterede version af dit gamle password.</p>
      <p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt. Hvordan vil du skabe dit nye password?:</p>
      <a href="#"> 
      <div id="nytSvar1" class="box"> Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</div>
      <a href="#"> 
      <div id="nytSvar2" class="box"> Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</div>
    `;
  } else if (answer === 'answer3') {
    questionDiv.innerHTML = `
      <h2>Sådan - det er nemlig vigtigt at have unikke passwords til forskellige platforme.</h2>
      <p>Hvordan skaber du dit nye password?</p>
      <a href="#">
      <div id="nytSvar1" class="box"> Jeg danner et password der lige præcis opfylder sidens minimumskrav - ofte 8 tegn.</div>
      <a href="#"> 
      <div id="nytSvar2" class="box">Jeg danner et password på mindst 15 tegn med en blanding af små og store bogstaver, tal og tegn.</div>
    `;
  } else if (answer === 'nytSvar1') {
    questionDiv.innerHTML = `
      <h2>Lidt har også ret</h2>
      <p>Det er naturligvis okay blot at opfylde hjemmesidens krav til et password. Langt de fleste hjemmesider kræver et paswword på mindst 8 tegn - og derfor findes der også flest passwords med netop det antal karakterer. Det gør denne længde passwords mere sårbare overfor hackere. Overvej derfor om du kan lave et længere password. Center for Cybersikkerhed anbefaler 15 tegn.</p>
      <a href="#"> 
      <div id="nytSvar3" class="box">Videre</div>
    `;
  } else if (answer === 'nytSvar2') {
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Åh nej! Dit nye og sikre password er blevet lækket. Du skal derfor på den igen - lave endnu et nyt password. Hvordan forholder du dig?</p>
      <a href="#">
      <div id="nytSvar4" class="box"> Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</div>
      <a href="#">
      <div id="nytSvar5" class="box">Jeg laver et helt nyt unikt password igen.</div>
    `;
  } else if (answer === 'nytSvar3') {
    questionDiv.innerHTML = `
      <h2>Læk!</h2>
      <p>Dit nye og sikre password er blevet lækket. Du skal derfor på den igen - lave endnu et nyt password. Hvordan forholder du dig?</p>
      <a href="#">
      <div id="nytSvar4" class="box"> Jeg genbruger mit unikke password men tilføjer noget ekstra, såsom årstal. Det er nemmere at huske.</div>
      <a href="#">
      <div id="nytSvar5" class="box">Jeg laver et helt nyt unikt password igen.</div>
    `;
  } else if (answer === 'nytSvar4') {
    questionDiv.innerHTML = `
      <h2>Genbrug? Nej tak!</h2>
      <p>Det er nemt at komme til at genbruge sine passwords igen og igen. Der er mange specifikke krav til passwords og det kan virke uoverskueligt at finde på nye komplicerede koder - og også huske dem igen. 
      </p><p>
      Der er hjælp at få, men der er desværre ingen vej uden om - dit password skal være unikt.</p>
      <a href="#"> 
      <div id="nytSvar6" class="box">Forstået - videre</div>
    `;
  } else if (answer === 'nytSvar5'|| answer === 'nytSvar6' ) {
    questionDiv.innerHTML = `
      <h2>Du har nu skabt et sikkert password</h2>
      <p>Tillykke med det - det er både langt og kryptisk. Hvordan husker du det?</p>
      <a href="#"> 
      <div id="nytSvar7" class="box">Jeg memorerer det</div>
      <a href="#"> 
      <div id="nytSvar8" class="box">Jeg skriver det ned</div>
      <a href="#"> 
      <div id="nytSvar9" class="box">Jeg bruger en password manager</div>
    `;
  } else if (answer === 'nytSvar7') {
    questionDiv.innerHTML = `
      <h2>Huskespillet</h2>
      <p>Det er en udemærket strategi. Men mens du husker dit password, så husk på at du gerne skal have unikke passwords til hvert login. Hvis det er for overvældende, kan du overveje at benytte en password manager.</p>
      <a href="index.html"> Tak for din opmærksomhed. Du kan vende tilbage til forsiden her. </a>
    `;
  } else if (answer === 'nytSvar8') {
    questionDiv.innerHTML = `
      <h2>Skriv det ned</h2>
      <p>Det kan være særdeles hjælpsomt at skrive sine passwords ned. Men om du gør det fysisk eller digitalt, så sørg endelig for at henholdsvis lås dem inde eller kryptere dem.</p>
      <a href="index.html"> Tak for din opmærksomhed. Du kan vende tilbage til forsiden her. </a>
    `;
  } else if (answer === 'nytSvar9') {
    questionDiv.innerHTML = `
      <h2>Password manageren</h2>
      <p>Med dine passwords sikkert gemt i en password manager kan du glemme dine passwords. Du bliver logget ind med biometrisk input - ansigtsgenkendelse eller fingeraftryk. Og hvis du skal bruge et password på en enhed der ikke er sat op med din password manager kan du blot åbne manageren på en af dine andre enheder og finde dit kartotek af adgangskoder.</p>
      <a href="index.html"> Tak for din opmærksomhed. Du kan vende tilbage til forsiden her. </a>
    `;
  } 




  // Tilføj event listeners til de nye svarmuligheder
  addAnswerEventListeners();
}

// Kald funktionen første gang
addAnswerEventListeners();

