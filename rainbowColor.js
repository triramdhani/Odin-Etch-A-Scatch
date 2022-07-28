// Html
{/* <button id="background--color__parameter" onclick="rainbowColor()"></button> */}



function hexCode() {
    //jika tombol di klik makan background color changer akan aktif 
    // dan setiap mouse melewati tiap box warna box akan berubah

    let hexNumber = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",]
    let hexCode = '';
    for(let i = 0 ; i < 6 ; i++) {
        let ramdomIndex = Math.floor(Math.random()* hexNumber.length);

        hexCode += hexNumber[ramdomIndex]
    }
    return hexCode;    
}

function rainbowColor() {
    let color = hexCode()
    console.log(color)
    let layerContainer = document.getElementById('layer');
    layerContainer.childNodes.forEach(child => {
        child.style.backgroundColor = color
    })
}
if(radiobuttonON){
    // rubah warna 
}

function enableBackgroundColorChanger() {
    let layerContainer = document.getElementById('layer');
    const hexCode =  backgroundChanger();

    console.log(hexCode)
     layerContainer.childNodes.forEach(element => {
    element[i].style.backgroundColor = `#${hexCode}`
    
    })
}