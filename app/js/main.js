// BOX NA KTÓRYM POJAWIAĆ SIĘ BĘDZIE BORDER
let box = document.querySelector('.border-on');

window.onchange = function () {
    // INPUTY NA POSZCZEGÓLNE WARTOŚCI BORDERA
    let width = document.querySelector('#borderWidthValue').value;
    let radius = document.querySelector('#borderRadiusValue').value;
    let color = document.querySelector('#borderColorValue').value;

    box.style.borderWidth = width + 'px';
    box.style.borderRadius = radius + 'px';
    box.style.borderColor = color;

    if (width === '') {
        box.style.borderWidth = 0 + 'px';
    } 
    if (radius === '') {
        box.style.borderRadius = 0 + 'px';
    }
    if (color === '') {
        box.style.borderColor = 'none'
    }

    let styleList = document.querySelector('#styleList');

    styleList.addEventListener('change', (event) => {
        const result = `${event.target.value}`;
        box.style.borderStyle = result; 
        
    });
};


    