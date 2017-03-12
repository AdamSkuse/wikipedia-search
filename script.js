function setupEventListeners() {
   var searchButton = document.getElementById('search-button'); 
   searchButton.addEventListener('click', submitSearch); 
}

setupEventListeners();

function submitSearch() {
    var searchString = document.getElementById('search-string').value;
    console.log(searchString);
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=&origin=*&srsearch=" + searchString, function(json) {
        renderResults(json);
    });
}

function renderResults(results) {
    console.log('RESULTS START HERE', JSON.stringify(results));
}

