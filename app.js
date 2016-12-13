var input = document.getElementById("query");
var button = document.getElementById("getdata");
var results = document.getElementById("results");
var header = document.getElementById("header");

button.addEventListener("click", function() {
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", callback);
    xhr.open("GET", "http://api.fixer.io/latest?base=USD");
    xhr.send();
    
    function callback() {
        var data = JSON.parse(xhr.responseText);
        var htmlString = "";
        if (isNaN(input.value)){
            alert("Must input number(s)");
            return false;
        }
        htmlString += 'Date: '+ data.date;
        header.innerHTML = htmlString;
        var listString = "<ul>";

        for (var type in data.rates) {
            listString += '<li>' + type + ': ' + parseFloat(input.value*(data.rates[type])).toFixed(2) + '</li>';
        }
        listString += "</ul>"

        console.log(htmlString);
        results.innerHTML = listString;
    }
    
});