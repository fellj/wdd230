// Latter Day Prophets Data listed chronologically in JSON format
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Fetches data from the json source url using await.
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }

getProphetData();

// Display the fetched json prophet data  
const displayProphets = (prophets) => {

    // Create a placeholder for the output cards container element
    const cards = document.querySelector('div.cards'); // select the output container element

    // For each loop that builds prophet cards
    prophets.forEach((prophet) => {

        // Create elements to add to the div.cards element
        let card     = document.createElement('section');
        let h2       = document.createElement('h2');
        let portrait = document.createElement('img');
        let para1    = document.createElement('p');
        let br       = document.createElement('br');
        let para2    = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        // Finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname} `;

        // Build the paragraph content with date of birth and place
        // of birth
        para1.style.textAlign = "center";
        para1.innerHTML       = `Date of Birth: ${prophet.birthdate}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `Place of Birth: ${prophet.birthplace}`;
        //para2.style.textAlign = "center";
        //para2.textContent     = `Place of Birth: ${prophet.birthplace}`;
        


        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(para1);
        //card.appendChild(br);
        //card.appendChild(para2);
        card.appendChild(portrait);
        
        // Append the card to the cards output element
        cards.appendChild(card);

        }) // end of forEach loop
    }     // end of function expression





