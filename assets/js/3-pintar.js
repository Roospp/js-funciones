const elemento_p = document.getElementById("ele1")
const pintar = () => {
    ele1.addEventListener('click', () => {
        ele1.style.backgroundColor = 'yellow';
    })
}
pintar();



const ele2 = document.getElementById('ele2')
ele2.style.backgroundColor = 'green';
const pintar2 = (color) => {
    ele2.addEventListener('click', () => {
        ele2.style.backgroundColor = color;
    })
}
pintar2('yellow');