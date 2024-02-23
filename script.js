const container = document.querySelector('.container');

for  (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    cell.style.cssText = `border: solid white; flex-grow: 0; 
    flex-basis: 6.25%; box-sizing: border-box; border-width: 1px`;
    container.appendChild(cell);
}

const cells = document.querySelectorAll(`.cell`);

console.log(cells);

cells.forEach((div) => {
    div.addEventListener(`mouseover`, function (e) {
        e.target.style.background = 'white';
    });
});
