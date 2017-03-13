function setupEventListeners() {
   var searchButton = document.getElementById('search-button'); 
   searchButton.addEventListener('click', submitSearch); 
   var searchResultsDiv = document.getElementById('search-results-section');
   searchResultsDiv.addEventListener('click', function(event){openResultLink(event);});
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
    resultsArray = results.query.search;
    resultsArray.forEach(function(item) {
        var resultsDiv = document.getElementById('search-results-section');
        var individualResultDiv = document.createElement('div');
        individualResultDiv.classList.add("individual-result");
        var title = document.createElement('h3');
        title.innerHTML = item.title;
        var snippet = document.createElement('p');
        snippet.innerHTML = item.snippet;
        individualResultDiv.appendChild(title);
        individualResultDiv.appendChild(snippet);
        resultsDiv.appendChild(individualResultDiv);
    });
}

function openResultLink(event) {
    console.log('click!', event.target);
};
 // window.location = 'https://en.wikipedia.org/wiki/' + item.title;
