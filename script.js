let library = [];

//Get values from HTML
function assign() {

   var title = document.getElementById('title').value;
   var author = document.getElementById('author').value;
   var number = document.getElementById('pages').value;
   var rd1 = document.getElementById('rdyes');
   var rd2 = document.getElementById('rdno');

   let inputs = document.querySelectorAll('input');

   //The value of read depends on which button is checked
   if (rd1.checked == true) {
      var read = rd1.value;
   } else if (rd2.checked == true) {
      var read = rd2.value;
   }
  
   function Book(title, author, number, read) {
      this.title = title;
      this.author = author;
      this.number = number;
      this.read = read;
   }
   let book = new Book(title, author, number, read);
   //console.log(book);

   //The value of read depends on which button is checked
   if (rd1.checked == true || rd2.checked == true) {
      addBookToLibrary();
      addBookToDisplay()
   }
   else {
      alert("Check one for read or not read!");
      document.getElementById('title').focus();
   }


   function addBookToLibrary() {
      library.push(book);
   }
   //console.log(library);

   function addBookToDisplay() {
      const oneone = document.getElementById("oneOne");
      const bookBox = document.createElement('div');

      bookBox.setAttribute('class', 'iblock')
      const bookInfo = document.createElement('p');

      var deleteButtonHTML = document.createElement('input');

      deleteButtonHTML.setAttribute('class', 'Dbtn')

      deleteButtonHTML.type = 'button';
      deleteButtonHTML.value = 'Delete';
      deleteButtonHTML.onclick = deleteFunc.bind(this);

      bookInfo.innerHTML = `Title: ${book.title}<br>
                         Author: ${book.author}<br>
                         Pages: ${book.number}<br>
                         Read: ${book.read}<br><br>

                        `;

      bookBox.appendChild(bookInfo);
      bookBox.appendChild(deleteButtonHTML);

      oneone.appendChild(bookBox);

      //function to delete book
      function deleteFunc() {
         oneone.removeChild(bookBox);
      }

   }

}  //End of assign function and end of program

//Function to reset form
function resetFunc() {
   document.getElementById('container').reset();
}
