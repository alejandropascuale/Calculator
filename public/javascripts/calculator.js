
function clr()
{
 document.querySelector('#textval').value = ""
} 

window.addEventListener('load', () => {


    let display = document.querySelector('#textval');
    document.querySelector('tbody').addEventListener('click', (e) => {
        if (e.target.value == 'c') {
            clr();
        } else if (e.target.value == '='){
            display.value = eval(display.value);
        } else {
            display.value += e.target.value;
        }
        console.log(display.value);
    })

    document.querySelector('html').addEventListener('keyup', (e) => {
        if (e.key == 'Backspace' || e.key == 'Delete') {
            clr();
        } else if (e.key == 'Enter'){
            display.value = eval(display.value);
        } else {
            display.value += e.key;
        }
    })    

})