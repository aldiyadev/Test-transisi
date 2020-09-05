const add = document.querySelector('.add-items');
const words = [
    'Create Unexpectable design', 'Post My Design to Dribble', 'Hangout With Friend', 'Upgrade PC For get Best Experience', 'Go to the Office 8.00 AM', 'Make 1 website design for my Friend', 'Create CSS Library'
];
const status = ['waiting', 'In progress', 'In review', 'Approved'];


add.addEventListener('click', function () {

    let word = Math.floor(Math.random() * words.length);
    console.log(words[word]);

    let statu = Math.floor(Math.random() * status.length);
    console.log(status[statu]);

    // ul
    const ul = document.querySelector('.task-list ul');

    // li
    const liBaru = document.createElement('li');

    // bar
    const barBaru = document.createElement('div');
    barBaru.setAttribute('class', 'bar');

    // check
    const check = document.createElement('div');
    check.setAttribute('class', 'check');
    const imgCheckBaru = document.createElement('img');
    imgCheckBaru.setAttribute('src', '/img/waiting.png');
    check.appendChild(imgCheckBaru);

    const p = document.createElement('p');
    const pIsi = document.createTextNode(words[word]);
    p.appendChild(pIsi);

    const notif = document.createElement('div');
    const pNotif = document.createElement('p');
    const notifIsi = document.createTextNode(status[statu]);
    pNotif.appendChild(notifIsi);
    pNotif.setAttribute('class', status[statu]);
    notif.appendChild(pNotif);

    barBaru.appendChild(check);
    barBaru.appendChild(p);
    barBaru.appendChild(notif);

    liBaru.appendChild(barBaru);

    ul.appendChild(liBaru);

});