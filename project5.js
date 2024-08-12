
function getRandomPaleColor(){
    const r=Math.floor(Math.random() * 100) + 150;
    const g=Math.floor(Math.random() * 49) + 150;
    const b=Math.floor(Math.random() * 73) + 150;
    return `rgb(${r}, ${g}, ${b})`; 

}
function changeBackgroundColor(){
    const randomColor = getRandomPaleColor();
    document.body.style.backgroundColor=randomColor;
}