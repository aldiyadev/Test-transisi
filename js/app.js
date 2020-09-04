const add = document.querySelector('.add-items');
const words = ['traversy media', 'dev ed', 'aldi'];

add.addEventListener('click', function () {

    let word = Math.floor(Math.random() * words.length);
    console.log(words[word]);

})