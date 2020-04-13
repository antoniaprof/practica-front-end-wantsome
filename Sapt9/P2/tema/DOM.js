// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul

const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false
    }];

books[0].URL = 'https://upload.wikimedia.org/wikipedia/en/7/7f/The_Power_of_Habit.jpg'
books[1].URL = 'https://images.penguinrandomhouse.com/cover/9780345472328'

//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
for (let i = 0; i < books.length; i++) {
    const body = document.querySelector('body');
    const list = document.createElement('ul');
    body.appendChild(list);

    let paragraph = '', listItem = '', bookTitle = '', bookAuthor = '', book = '', image = '';
    paragraph = document.createElement('p');
    listItem = document.createElement('li');
    bookTitle = 'title: ' + books[i].title;
    bookAuthor = 'author: ' + books[i].author
    book = bookTitle + ' ' + bookAuthor;
    paragraph.textContent = book;
    list.appendChild(listItem);
    listItem.appendChild(paragraph);

    //BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare 
    // (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
    image = document.createElement('img');
    image.setAttribute('src', books[i].URL);
    listItem.appendChild(image);

    //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.
    if (books[i].read) {
        listItem.style.color = 'lightgreen';
    } else {
        listItem.style.color = 'red';
    };
};



