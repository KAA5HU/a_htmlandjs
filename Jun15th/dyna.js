//this is the comtainer for the search results elements
const searchResultsEle = document.getElementById('searchResults');
const inputEle = document.getElementById("input");

//empty list
let results = []

function createAndAppend(each) {
    //creating the each element using createelement method 
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
    //data is stored in the results list
    for (let each of results) {
        //creating the each results as saperate container 
        //and appending to the main container
        createAndAppend(each)
        
    }
}
//
function getData(event) {
            
            let url = 'https://jsonplaceholder.typicode.com/users'
            let options = {
                method: "GET"   //get method is used to retrive the data
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
//user action is required
inputEle.addEventListener("keyup", getData)