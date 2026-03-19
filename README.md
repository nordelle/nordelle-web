# nordelle-web

Kodning
Projektet er en webapplikation, hvor brugeren kan se og interagere med makeup produkter. Brugeren kan klikke på produkter og få vist yderligere information om produktet. Siden er bygget med HTML, CSS og JavaScript og anvender JSON-fil til håndtering af data. 

Projektstruktur
Projektet er opdelt i HTML, CSS og JavaScript-filer.
project/
├── index.html
├── parfume.html
├── makeup.html
├── product.html
├── css/
│   ├── general.css
│   ├── header_footer.css
│   ├── index.css
│   ├── parfumer.css
│   └── product.css
├── js/
│   ├── menu.js
│   ├── makeup.js
│   ├── parfumer.js
│   └── products.js
└── README.md

Filbeskrivelser

- HTML (index.html, makeup.html, perfume.html,product.html)
  Indeholder strukturen og opsætningen af siden.

- CSS (general.css, header_footer.css, index.css, parfumer.css, product.css)
  Står for styling og layout på de enkelte sider

- JavaScript (menu.js, ….)
  Håndterer det dynamiske indhold, interaktioner og opdatering af siden.

- JSON (databasen)
  Indeholder alle dataene om produkterne på vores side.

Scripts og funktioner
Vores kode er opdelt i funktioner, som hver har deres ansvar

- Datahåndtering 
  henter produktdata fra JSON

- Card Sorting
  Viser produkter som card, på de forskellige sider

- UI-opdatering 
  Opdaterer vores side uden genindlæsning

Eksempler på Script og funktioner i vores kode:

- // Henter data fra JSON function loadProducts() { // kode }

- // Viser produkter som cards function displayProducts(products) { // kode }

Navnekonventioner
I vores kode har vi blandt andet navne koventioner som camelCase, beskrivende navne og bare nogle enkle og simple navne.

- CamelCase
  Det har vi brugt til variabler og funktioner, det kunne eksempelvis være “loadProducts” eller “productList”. Det er en måde at sammensætte ord, uden at bruge bindestreg eller mellemrum. 

- Beskrivende navne
  Vi har brugt beskrivende navne, når et navn afspejler funktionens formål. Det kunne være “site-header” som beskriver headeren for hele siden, eller  “hero-content” som beskriver alt indhold i hero-sektion. 

- Enkle og simple navne
  Vi har benyttet som af enkle navne, for at gøre koden nem at læse og forstå. Navne som “header”, “footer” og “logo”, gør koden overskuelig at navigere rundt i. 

Bæredygtighed

- Vi har på vores siden brugt følgende tiltag, for at gøre det mere bæredygtigt. En simpel og effektiv kode uden unødvendig kompleksitet. Hvilket JSON data hjælper med, grundet dets lette natur og simple struktur. Dette gør også at vi kan dynamisk opdatere  vores side, hvilket reducerer antallet af reload. Vi har også et begrænset brug af tunge elementer, som store billeder eller unødvendige funktioner i koden. Dette er med til at gøre load tiden hurtigere, og dermed også et lavere energiforbrug. 

Git og branches

- Under vores kodning har vi brugt GitHub som versions styringsværktøj , til at organisere vores arbejde i gruppen. Vi har oprettet branches, hvor hver person har haft sin egen gren. Dette har gjort det muligt at hver medlem har kunne kode, uden at påvirke main branchen. Når en branches var færdig, blev den committed, hvilket betyder at ændringerne gemt med en beskrivelse af branchen. Dette har gjort det nemt at holde overblik over kodningsprocessen. Derefter blev ændringer merget ind i main, som indeholder den færdige version. 

Database (JSON)

- Vores data bliver håndteret af en JSON-struktur. Vi bruger JSON-filen som databse til at gemme produktdata, som hentes og vises dynamisk på siden med JavaScript

Eksempler på data fra datasættet
{ 
"products": [ 
{ 
"id": 1, 
"title": "Essence Mascara Lash Princess", 
"category": "beauty"
"price": 9.99,
 },
 { 
"id": 6, 
"title": “Calvin Klein CK One", 
"category": "fragrances" 
"price": 49.99,
} 
] 
}

Gruppemedlemmer

- Thomas Severin Jørgensen
- Joel Hald Fabrin
- Lua Skov Rudkjøbing
- Markus Harries Næsted
