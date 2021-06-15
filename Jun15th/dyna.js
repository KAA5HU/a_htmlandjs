const searchResultsEle = document.getElementById('searchResults');
const inputEle = document.getElementById("input");

let results = []

function createAndAppend(each) {
    let divEle = document.createElement("div");
    divEle.classList.add("each-person")

    let nameEle = document.createElement("p")
    nameEle.textContent = each.name
    divEle.appendChild(nameEle)

    let emailEle = document.createElement("p")
    emailEle.textContent = each.email
    divEle.appendChild(emailEle)

    searchResultsEle.appendChild(divEle)
}

function displayResults(results) {
    for (let each of results) {
        createAndAppend(each)
        
    }
    
    
}

function getData(event) {
            
            let url = 'https://jsonplaceholder.typicode.com/users'
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    console.log(jsonData)
                    results = jsonData
                    displayResults(results)
                })
}

inputEle.addEventListener("keyup", getData)