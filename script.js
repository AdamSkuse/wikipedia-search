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
    // console.log(results.query.search[0].title, results.query.search[1].title);
    resultsArray = results.query.search;
    var resultsDiv = document.getElementById('search-results-section');
    var individualResultDiv = document.createElement('div');
    individualResultDiv.classList.add("individual-result");
    resultsArray.forEach(function(item) {
        console.log(item.title, item.snippet);
        thisResultDiv = individualResultDiv;
        var title = document.createElement('h3');
        title.innerHTML = item.title;
        var snippet = document.createElement('p');
        snippet.innerHTML = item.snippet;
        thisResultDiv.appendChild(title);
        thisResultDiv.appendChild(snippet);
        resultsDiv.appendChild(thisResultDiv);
    });
}

