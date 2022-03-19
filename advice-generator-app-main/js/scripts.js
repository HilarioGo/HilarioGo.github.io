document.addEventListener("DOMContentLoaded", function() {
    updateAdvice();

    document.getElementById('button').addEventListener('click', updateAdvice);
});

function updateAdvice() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.adviceslip.com/advice?t=' + Math.random(), true);
    request.send();
    request.onload = function() {
        if (request.status === 200) {
            document.getElementById('AdviceID').innerHTML = JSON.parse(request.response).slip.id;
            document.getElementById('Advice').innerHTML = JSON.parse(request.response).slip.advice;
        } else {
            console.log('error ${request.status} ${request.statusText}');
        }
    }
}