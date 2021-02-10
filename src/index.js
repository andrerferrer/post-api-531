const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      // digging the json
      // console.log(data.hits[0].locale_names.default[0]);
      const cityName = data.hits[0].locale_names.default[0];

      // insert the city name to the list
      const list = document.querySelector('#results');
      list.innerText = cityName;
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);


// GET VS POST
// // GET
// fetch(url)
//   .then

// // POST 
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({ query: event.currentTarget.value })
// })
//   .then