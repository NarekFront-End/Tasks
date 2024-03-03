const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Varder", author: "Mark Aren", year: 1980 },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { id: 9, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
  { id: 10, title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950 },  
  // More books...
];

let inp = document.getElementById("inp");
let form = document.querySelector(".books")




const displayBooks = function(booksToDisplay) {
  form.innerHTML = ""; // Clear previous results

  for (let book of booksToDisplay) {
    let div = document.createElement("div");
    div.setAttribute("class", "book");

    for (let value in book) {
      let p = document.createElement("p");
      p.textContent = `${value}: ${book [value]}`;
      div.appendChild(p);
    }

    form.appendChild(div);
  }
};

const searchBooks = function() {
  const searchTerm = inp.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    Object.values(book).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm)
    )
  );

  displayBooks(filteredBooks);
};



window.addEventListener("load", () => displayBooks(books));