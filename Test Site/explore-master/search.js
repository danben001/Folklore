// Interactive Digital Media
// Daniel Benhamou – 3011151 – danielb009@hotmail.com
// Referenced From Hilman Ramadhan https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/

function liveSearch() {
  // Locate all comic elements
  let comics = document.querySelectorAll('.comicSearch')
  // Locate the search bar
  let search_query = document.getElementById("search-item").value;
  // Loop through the comics
  for (var i = 0; i < comics.length; i++) {
    // If text content exists in the comic element..
    if (comics[i].textContent.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
      // ...remove the `.is-hidden` class.
      comics[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      comics[i].classList.add("is-hidden");
    }
  }
}
