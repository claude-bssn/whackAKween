let size;
let frame = document.querySelector('#frame');
let randImg;
let box;
let timeImg;
let click = false;
let score;
let timer;
let round;

function display(){
    clearInterval(timeImg);
    if (randImg) {
        document.querySelector(`[data-id="${randImg}"]`).style.backgroundImage = '';   
        box.classList.remove('flip-vertical-left');
    }
    randImg = Math.floor(Math.random()* (size)+1);
    //console.log(randImg);
    
    box = document.querySelector(`[data-id="${randImg}"]`);
    box.classList.add('flip-vertical-left');
    box.style.backgroundImage= "url('divine.jpg')";
    timeImg = setInterval(nextTurn , 1000, console.log(randImg));
    
}
function nextTurn(){
    score --;
    point()
    display();
}

function point(){
    document.querySelector('.score').innerHTML = " "+ score;
}

function countdown(){

    timer -=1;
    document.querySelector('.timer').innerHTML = timer;
    if(timer == 0){
        clearInterval(round);
        clearInterval(timeImg);
        frame.style.display = 'none';
        // timer =10;
        document.querySelector('.timer').innerHTML = "Time out!";
    }
}




document.querySelector('#button').addEventListener('click' , () => {
    //debugger;
    timer = 10;
    clearInterval(round);
    round = setInterval(countdown, 1000)
    document.querySelector('.timer').innerHTML = timer;

    frame.style.display = 'flex';
    size = parseInt(document.querySelector('#size').value);
    frame.innerHTML = '';
    score = 0;
    randImg=null;
    // console.log(size);
    for (let i = 1; i <= size; i++) {
        frame.innerHTML += `<div data-id="${i}" class='cell'></div>`;
    }
    document.querySelectorAll('.cell').forEach(cell=>{
        cell.style.width = 100/(Math.sqrt(size)) + '%';
        cell.style.height = 100/(Math.sqrt(size)) + '%';
    });    
    point();
    display();
    
})

frame.addEventListener('click', (el) =>{
    el=el.target.dataset.id;
    if(el == randImg){
        // console.log(+1);
        score += 1;
        // console.log(el);
    }else{
        console.log(-1);
        score -= 1;
        // console.log(el);
    }
    point();
    // console.log(timeImg)
    display();
});

