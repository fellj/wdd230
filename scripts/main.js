// select the elements to manipulate (output to)
// const datefieldUK = document.querySelector("aside");

//current date logic
// const now = new Date();

// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);

// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//copyright year logic
const year =  new Date().getFullYear();
document.querySelector("#copyyear").textContent = year;

//Last updated logic
let lastupdate = new Date(document.lastModified);
document.querySelector("#lastupdate").innerHTML = lastupdate;


//takes the 0 index list item ("Menu") and toggles between displaying "menu" and not displaying "menu" (.classList & .toggle are keywords). class changes to "responsive when toggle is triggered."
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false); */
const date = new Date();
const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerText = completeDate;

//get day of the week and display banner


const bannerDay = date.getDay();

	if(bannerDay == "1" || bannerDay == "2"){
		document.querySelector(".banner").style.display = "flex";
		
}
	
function hideAnnouncement(){
	document.querySelector(".banner").style.display = "none";
}


// if (document.location.pathname.includes('discover.html')){

// initialize display elements
/* const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");

const daysSinceDisplay = document.getElementById("daysSince");
// get the stored value in local storage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("lastVisitDate"));

// determine if this is the first visit
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits
}else {
	visitsDisplay.textContent = "This is your first visit!";
}
// increment the number of visits
numVisits++;

//store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

let daysSince = (Date.now() - lastVisit)/86400000;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisitDate", Date.now());

let rounded = Math.round(daysSince);
if (rounded !==0){
	daysSinceDisplay.textContent= rounded;
}else{
	daysSinceDisplay.textContent = "It hasn't been a day yet";
} */

