function setupEventListeners() {
   var searchButton = document.getElementById('search-button'); 
   searchButton.addEventListener('click', submitSearch); 
   var searchInput = document.getElementById('search-string');
   searchInput.addEventListener('keyup', function(event) {
       if (event.which === 13) {
            submitSearch();
       }
   });
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
    console.log(resultsArray);
    var resultsDiv = document.getElementById('search-results-section');
    if (resultsArray.length < 1) {
        resultsDiv.innerHTML = "";
        console.log("No results!")
        var message = document.createElement('p');
        message.innerHTML = "No results!";
        resultsDiv.appendChild(message);
    } else {
            resultsDiv.innerHTML = "";
            resultsArray.forEach(function(item) {
            var individualResultDiv = document.createElement('div');
            individualResultDiv.classList.add("individual-result");
            var title = document.createElement('h3');
            title.innerHTML = item.title;
            var snippet = document.createElement('p');
            snippet.innerHTML = item.snippet.replace(/<[^>]*>/g, '');
            snippet.innerHTML += "... (click to read article)";
            individualResultDiv.appendChild(title);
            individualResultDiv.appendChild(snippet);
            resultsDiv.appendChild(individualResultDiv);
        });
    }      
}

function openResultLink(event) {
    var t = event.target;
    var articleName = "";
    if (t.tagName !== "DIV") {
        articleName = t.parentNode.firstChild.innerHTML;
    } else {
        articleName = t.firstChild.innerHTML;
    }
    window.open('https://en.wikipedia.org/wiki/' + articleName);
};
