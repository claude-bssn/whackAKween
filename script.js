

document.querySelector('#button').addEventListener('click' , () => {
    //debugger;
   let size = parseInt(document.querySelector('#size').value);
   let square = document.createElement('div');
   let frame = document.querySelector('#frame');
   frame.innerHTML = '';
   for (let i = 1; i <= size; i++) {
       frame.innerHTML += `<div data-id="${i}" class='cell'></div>`;
   }
   document.querySelectorAll('.cell').forEach(cell=>{
    cell.style.width = 100/(Math.sqrt(size)) + '%';
    cell.style.height = 100/(Math.sqrt(size)) + '%';

   })



})
