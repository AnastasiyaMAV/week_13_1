document.querySelector('button').onclick = function() {
    let a = prompt("Как тебя зовут?", '');
    let b = 'Привет, ' + a + '!';

    alert(b);
}

