let title = document.getElementById('title')
let input = document.getElementById('input')
let myButton = document.getElementById('button')

let bookArr = [];

function myFunc() {
    bookArr.push(input.value);
    let stringArr = JSON.stringify(bookArr)
    localStorage.setItem("Books", stringArr)  
    let getBooks = JSON.parse(localStorage.getItem("Books"))
    title.innerText = getBooks[getBooks.length - 1];
    input.value = '' 
    console.log(getBooks);
}