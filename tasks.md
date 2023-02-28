Create a basic index.html page, and link a main.js script file in the page.

Write an input tag and a button to "Save Book". Write an h3 tag above the input tag with initial value "Book Title".

When user clicks Save book:

save the book inside an array.
convert this array to JSON and then save it to localStorage.
display the saved book title in the h3 tag above the input.
clear the input.
Hint: use addEventListener for the button.

Then retrieve the JSON array from localstorage, and parse it to a js object, then print to console.

The user can add as many books as they want, and they all are saved in localStorage. But the h3 tag just displays the most recent book, not all the books.