document.addEventListener('DOMContentLoaded', function() {

    fetch('https://api.quotable.io/random')
    //fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
        const quote = data.content
        const author = data.author
        document.querySelector('#quote').innerHTML = quote;
        document.querySelector('#author').innerHTML = author;
    });
});