document.querySelector("button").addEventListener("click", getBookData)

function getBookData() {
    let ISBN = document.querySelector("input").value
    
    fetch(`https://openlibrary.org/isbn/${ISBN}.json`)
    .then((response) => response.json())
    .then((data) => populateWithData(data))
    .catch((error) => console.log(error))
}

function populateWithData(data) {
    let dataPortion = `
    <h3>${data.title}</h3>
    <h4>${data.subtitle}. ${data.publish_date}</h4>
    <p>${data.description}</p>
    `
    document.querySelector(".data").innerHTML = dataPortion
    
}