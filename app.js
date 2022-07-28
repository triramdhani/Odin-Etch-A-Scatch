function showRange() {
    const slideContainer = document.getElementById('slide__container');
    slideContainer.classList.toggle('visibility');
}

function changeValue(){
    let range = document.getElementById('size__range');
    let rangeValue = range.value;

    // update property value pada input html
    range.setAttribute("value", rangeValue)
    
    // update status jumlah grid
    let value = document.getElementById('value');
    value.innerHTML = rangeValue;
    let value2 = document.getElementById('value2');
    value2.innerHTML = rangeValue;
    
    displayGrid(rangeValue)
}

function clear() { 
    let layerContainer = document.getElementById('layer');
    layerContainer.innerHTML = '' ;    
}
function clean() {
    let layerContainer = document.getElementById('layer');
    layerContainer.childNodes.forEach(child => {
        child.style.backgroundColor = "white"
    })
}

function displayGrid(grid) {
        clear();
        let layerContainer = document.getElementById('layer');
        let gridLength = grid;
        gridEx = gridLength * gridLength
        
        for(let i= 0 ; i <  gridEx ; i++){
           let div = document.createElement('div');
           div.addEventListener('mouseover', changeBg)
           layerContainer.insertAdjacentElement("afterbegin" , div)
        }  

        layerContainer.style.gridTemplateColumns = `repeat(${grid}, ${grid}fr)`;
        layerContainer.style.gridTemplateRows = `repeat(${grid}, ${grid}fr)`;
}

function changeBg(even) {
    console.log(even)
    let penColor = document.getElementById('pen--color__parameter')
        let penColorValue = penColor.value
    let event = even.target
    event.style.backgroundColor = penColorValue
}

displayGrid(16)