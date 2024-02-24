const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "El Paso",
  "Nashville",
  "Detroit",
  "Oklahoma City",
  "Portland",
  "Las Vegas",
  "Memphis",
  "Louisville",
  "Baltimore",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Sacramento",
  "Mesa",
  "Kansas City",
  "Atlanta",
  "Long Beach",
  "Colorado Springs",
  "Raleigh",
  "Miami",
  "Virginia Beach",
  "Omaha",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "New Orleans",
  "Wichita",
  "Cleveland",
  "Tampa",
  "Bakersfield",
  "Aurora",
  "Anaheim",
  "Honolulu",
  "Santa Ana",
  "Riverside",
  "Corpus Christi",
  "Lexington",
  "Stockton",
  "Pittsburgh",
  "Anchorage",
  "Cincinnati",
  "St. Louis",
  "Plano",
  "Henderson",
  "Orlando",
  "Irvine",
  "Lincoln",
  "Newark",
  "Durham",
  "Chula Vista",
  "Toledo",
  "Fort Wayne",
  "St. Petersburg",
  "Laredo",
  "Jersey City",
  "Chandler",
  "Madison",
  "Lubbock",
  "Buffalo",
  "Laredo",
  "Scottsdale",
  "Reno",
  "Glendale",
  "Gilbert",
  "Winston-Salem",
  "North Las Vegas",
  "Norfolk",
  "Chesapeake",
  "Garland",
  "Irving",
  "Hialeah",
  "Fremont",
  "Boise",
  "Richmond",
];


const searchInput = document.getElementById("searchInput");
const cityList = document.getElementById("cityList");

const getSuggestedCities = (keyWord = "") => {
  console.log("API calls");
  const pr = new Promise((resolve, reject) => {
    const filteredArray = cities.filter(
      (city) =>
        city.substring(0, keyWord.length).toLowerCase() ===
        keyWord.toLowerCase()
    );
    setTimeout(() => {
      resolve(filteredArray);
    }, 1000);
  });
  return pr;
};



const getSuggestion = async (keyWord) => {
  const data = await getSuggestedCities(keyWord);

  if (data) {
    cityList.innerHTML = ""; // very important
    data.forEach((city, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.innerText = city;
      optionDiv.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log(event.currentTarget.innerText);
        searchInput.value = event.currentTarget.innerText;
      });
      cityList.appendChild(optionDiv);
    });
  }
};

const handleSearchInput = (e) => {
  if (e.target.value !== "") {
    cityList.classList.add("showCityContainer");
  } else {
    cityList.classList.remove("showCityContainer");
  }
  getSuggestion(e.target.value);
};

const debouncedFunction = (fn, d) => {
  let timer = null;
 
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

(() => {
  searchInput.addEventListener(
    "input",
    debouncedFunction(handleSearchInput, 1000)
  );
})();
