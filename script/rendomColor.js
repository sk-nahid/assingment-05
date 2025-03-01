document.getElementById('btn-color-change').addEventListener('click', function(event){
    
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(red, green, blue);
})
    

    
    
