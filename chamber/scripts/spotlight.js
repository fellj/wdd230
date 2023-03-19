// Business Directory Data in JSON format
const dataURL = 'https://fellj.github.io/wdd230/lesson09/json/data.json';

const display = document.querySelector("#spotlights");

// Select one or more random numbers from an array
function random(mn, mx) {
  return Math.floor(Math.random() * (mx - mn) + mn);
}

// Fetches data from the json source url using await.
async function getDirectoryData() {
  const response = await fetch(dataURL);
  const data = await response.json();

  // Select three random business items
  const randomBusinesses = data.businesses[random(1,3) - 1];
  const businesses = randomBusinesses;
  
  displayBusinesses(businesses);
}  

getDirectoryData();

// Display the fetched json business data  
const displayBusinesses = (businesses) => {

    // Create a placeholder for the output business cards container element
    const cards = document.querySelector('div.businesses'); // select the output container element

    // For each loop that builds prophet cards
    businesses.forEach((business) => {

        // Create elements to add to the div.cards element
        let card     = document.createElement('section');
        let h3       = document.createElement('h3');
        let logo     = document.createElement('img');
        let para1    = document.createElement('p');
        let url      = document.createElement('a');


        // Build the h2 content out to show the company name
        // Finish the template string
        h3.textContent = `${business.companyname} `;

        // Build the paragraph content with contact name and phone number
        para1.style.textAlign = "center";
        para1.innerHTML       = `Contact Name: ${business.contactname}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `Phone Number: ${business.phone}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `Membership Level: ${business.membershiplevel}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `<a href="${business.businessurl}" target="_blank"> Company Website</a>`;

        // Build the company url
        url.setAttribute('href', business.businessurl);
        url.setAttribute('target', "_blank");

        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', business.imageurl);
        logo.setAttribute('alt', `Logo for ${business.companyname} `);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '200');
        
        
        // Append the section(card) with the created elements
        card.appendChild(h3);
        card.appendChild(para1);
        card.appendChild(url);
        card.appendChild(logo);
        
        // Append the card to the cards output element
        cards.appendChild(card);

        }) // end of forEach loop
    }     // end of function expression





