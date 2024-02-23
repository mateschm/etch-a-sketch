const container = document.querySelector('.container');
sideLength = 16;

for  (let i = 0; i < sideLength**2; i++) {
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    cell.style.cssText = `border: solid white; flex-grow: 0; 
    flex-basis: ${100/sideLength}%; box-sizing: border-box; border-width: 1px`;
    container.appendChild(cell);
}



const cells = document.querySelectorAll(`.cell`);

cells.forEach((div) => {
    div.addEventListener(`mouseover`, function (e) {
        e.target.style.background = 'white';
    });
});

let button = document.querySelector(`button`);

button.addEventListener(`click`, createGrid);

function removeGrid () {
    container.textContent = '';
}

function createGrid () {
    sideLength = prompt(`Enter number of squares per side`);
    removeGrid();
    if ((sideLength > 100) || (sideLength < 0)) {
        sideLength = prompt(`Enter value between 2 and 100`);
    } else {
        for  (let i = 0; i < sideLength**2; i++) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            cell.style.cssText = `border: solid white; flex-grow: 0; 
            flex-basis: ${100/sideLength}%; box-sizing: border-box; border-width: 1px`;
            container.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(`.cell`);
    cells.forEach((div) => {
        div.addEventListener(`mouseover`, function (e) {
            e.target.style.background = 'white';
        });
    });
}
