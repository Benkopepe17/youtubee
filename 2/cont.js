const hexNumbers = [0,1,3,4,5,6,7,8,9,'a','b','c','e','f'];

const hexBtn = document.querySelector('.hexBtn');

const bodyBcg = document.querySelector('body'); 

const hex = document.querySelector('.hex');


hexBtn.addEventListener('click',getHex);


function getHex () {

let hexCol = '#'


for(let i=0; i<6 ; i++){

    let random = Math.floor(Math.random()*hexNumbers.length);
   // console.log(random);
    hexCol += hexNumbers[random];

   // console.log(hexCol);

}

bodyBcg.style.backgroundColor = hexCol;

hex.innerHTML = hexCol;



}