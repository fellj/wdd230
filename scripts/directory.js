// Business Directory Data in JSON format
const dataURL = 'https://fellj.github.io/wdd230/lesson09/json/data.json';

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

 gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
} 

// Fetches data from the json source url using await.
async function getDirectoryData() {
  const response = await fetch(dataURL);
  const data = await response.json();
  displayBusinesses(data.businesses);
}  

getDirectoryData();

// Display the fetched json business data  
const displayBusinesses = (businesses) => {

    // Create a placeholder for the output business cards container element
    const cards = document.querySelector('div.cards'); // select the output container element

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
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '300');
        
        
        // Append the section(card) with the created elements
        card.appendChild(h3);
        card.appendChild(para1);
        card.appendChild(url);
        card.appendChild(logo);
        
        // Append the card to the cards output element
        cards.appendChild(card);

        }) // end of forEach loop
    }     // end of function expression





