document.addEventListener("DOMContentLoaded", function() {
    updateAdvice();

    document.getElementById('button').addEventListener('click', updateAdvice);
});

function updateAdvice() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.adviceslip.com/advice?t=' + Math.random(), true);
    request.send();
    request.onload = function() {
        console.log(request);
        if (request.status === 200) {
            console.log(JSON.parse(request.response));

            document.getElementById('AdviceID').innerHTML = JSON.parse(request.response).slip.id;
            document.getElementById('Advice').innerHTML = JSON.parse(request.response).slip.advice;
        } else {
            console.log('error ${request.status} ${request.statusText}');
        }
    }
}