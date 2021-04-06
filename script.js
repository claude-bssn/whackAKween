let size = parseInt(document.querySelector('#size').value);
let frame = document.querySelector('#frame');
let randImg;
let box;

function display(){
    if (randImg) {
        document.querySelector(`[data-id="${randImg}"]`).style.backgroundImage = '';
    }
    randImg = Math.floor(Math.random()* (size)+1);
    box = document.querySelector(`[data-id="${randImg}"]`);
    //console.log(randImg);
    box.style.backgroundImage= "url('divine.jpg')";
}

document.querySelector('#button').addEventListener('click' , () => {
    //debugger;
    frame.innerHTML = '';
    for (let i = 1; i <= size; i++) {
       frame.innerHTML += `<div data-id="${i}" class='cell'></div>`;
    }
    document.querySelectorAll('.cell').forEach(cell=>{
        cell.style.width = 100/(Math.sqrt(size)) + '%';
        cell.style.height = 100/(Math.sqrt(size)) + '%';
    });
    
    setInterval(display,3000);
})

frame.addEventListener('click', (el) =>{
    
    el=el.target.dataset.id;
    if(el == randImg){
        console.log(+1);
    }else{
        console.log(-1);
    }
    display();
});



