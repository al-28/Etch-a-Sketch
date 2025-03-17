document.addEventListener("DOMContentLoaded", () => {
    function pen(thing) {
        thing.style.backgroundColor = 'orange';
    }
    let container = document.getElementById('container');
    for (let i = 0; i < 16*16; i++) {
        var square = document.createElement('div');
        square.innerHTML = '';
        container.appendChild(square);
    }
    let input = document.querySelector('input');
    input.addEventListener('keypress', function(event) {
        let g = Number(document.querySelector('input').value);
        if (event.key === 'Enter' && g <= 100) {
            container.innerHTML = '';
            for (let i = 0; i < g*g; i++) {
                var square = document.createElement('div');
                square.innerHTML = '';
                container.appendChild(square);
            }
            console.log('the function got called')
            console.log(g)
            container.querySelectorAll('div').forEach(element => {
                element.style.flexBasis = `${100/g - 2 * g/1335 - 0.17}%`;
            })
            something();
        }
    })
    something();
    function something() {
        container.querySelectorAll('div').forEach(element => {
            element.addEventListener('mouseover', function() {
                pen(element);
            })
        })
        container.querySelectorAll('div').forEach(element => {
            element.addEventListener('click', function() {
                element.style.backgroundColor = 'white';
            })
        })
        console.log(container.querySelectorAll('div'))
    }
})