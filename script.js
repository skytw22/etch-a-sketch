function generateNewGrid() {
    let side;
    do {
        side = prompt("Enter the side equal or smaller than 100?", 0);
    } while (side > 100 && side);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let length = 960 / side;
    let squares = side * side;
    for (let i=1; i<= squares; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.cssText = `width: ${length}px; height: ${length}px; border: none;`;
        container.appendChild(div);
    }
    addRandomColor();
}

function addBlackColor() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => grid.addEventListener('mouseover', (e) => {
        e.target.classList.add('black')
    }));
}

function addRandomColor() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => grid.addEventListener('mouseover', (e) => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }, {
        once: true
    }));
}

function getRGB (item){
    let rgb = item.substring(4, item.length-1).replace(/ /g, '').split(',');
    return rgb;
}

const container = document.querySelector('.container');

for (let i=1; i<=256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.cssText = 'width: 60px; height: 60px; border: none;';
    container.appendChild(div);
}
addRandomColor();

const btn = document.querySelector('#btn');
btn.addEventListener('click', generateNewGrid);