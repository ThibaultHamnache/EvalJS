
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'row');
app.appendChild(container);
const request = new XMLHttpRequest();
request.open('GET', 'https://api.got.show/api/characters/', true);

request.onload = function () {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response);
    if (request.status >= 10 ) {
        data.forEach(characters => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h2 = document.createElement('h2');
            card.setAttribute('id', `${characters._id}`);
            h2.textContent = `${characters.name}`;

            const title = document.createElement('p');
            title.setAttribute('class', 'titles');
            title.textContent = ` Titles : ${characters.titles}`;

            const name = document.createElement('p');
            name.setAttribute('class', 'name');
            name.textContent = ` Allegiances : ${characters.house}`;

            const book = document.createElement('p');
            book.setAttribute('class', 'book');
            book.textContent = ` Book Appearances : ${characters.books}`;

            const add = document.createElement('button');
            add.setAttribute('class', 'btn btn-outline-dark');
            add.setAttribute('id', 'btn-save');
            add.setAttribute('type', 'button');
            add.textContent = `Add to local storage`;

            // const button = document.createElement('button');
            // button.setAttribute('id', 'btn-save');
            // button.textContent = `Save Item`;

            container.appendChild(card);
            card.appendChild(h2);
            card.appendChild(title);
            card.appendChild(name);
            card.appendChild(book);
            card.appendChild(add);


            document.getElementById("btn-save").onclick = function() {
              localStorage.setItem('name', `${characters.name}`);
            };

        });


    } else {
        const errorMessage = document.createElement('erreur');
        errorMessage.textContent = `It's not working!`;
        app.appendChild(errorMessage);
    }

}
request.send();
//
// let name = [];
// test = document.getElementById("search").value;
// if(let = test) {
//
//     $.get(`https://api.got.show/api/characters/`, function (data)
//     {
//
//         $('#filmList').append(`<li id="${characters._id}">${data.name}</li>`);
//
//         $(`${characters._id}`).on('click', function(e) {
//             name.push(e.target.textContent);
//             localStorage.setItem('characterss', name);
//         });
//
//     })
// }



$(function() {

    const requestAuto = new XMLHttpRequest();
    requestAuto.open('GET', 'https://api.got.show/api/characters/', true);

    requestAuto.onload = function () {
        const name = [];

        const data = JSON.parse(this.response);
        data.forEach(characters => {
            name.push(characters.name);
        });

        $("#search").autocomplete({
            source: name
        });
    };
    requestAuto.send()

});
