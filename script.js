function setupEventListeners() {
   var searchButton = document.getElementById('search-button'); 
   searchButton.addEventListener('click', submitSearch); 
}

setupEventListeners();

function submitSearch() {
    var searchString = document.getElementById('search-string').value;
    console.log(searchString);
}

