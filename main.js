// Build random Bible verse generator that puts a new verse in the website's footer each day

const verses = [
    {location: "John 3:16", verse: "For God so loved the world..."},
    {location: "Genesis 1:1", verse: "In the beginning..."},
    {location: "Proverbs 3:5-6", verse: "Trust in the Lord..."}
];

const day = 1000 * 60 * 60 * 24; // Turns milliseconds into days

let days = Math.round(Date.now() / day); // Rounds days to an integer

if (days > days) {

}
let verseOfTheDay = Math.floor(Math.random() * verses.length);

console.log(verses[verseOfTheDay].location);
console.log(localStorage.Date());

//could use onload event to simply display a random verse whenever the page is loaded

//Setinterval


// Build slider for front page

// Make navbar responsive

