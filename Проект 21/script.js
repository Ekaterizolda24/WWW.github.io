let i = 0;
let colorArray = ['red', 'orang', 'green', 'yellow', 'magenta'];

function changeColor() {
    if (i > colorArray.length - 1) {
        i = 0;
    }
    document.body.style.backgroundColor = colorArray[i];
    i++;
}