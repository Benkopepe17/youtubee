let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');


let count = 0;

addCont.addEventListener('click',incrementCounter);
lowerCont.addEventListener('click',decrementCounter);


function incrementCounter () {

   count++ ;
   counter.innerHTML = count;
   if (counter.innerHTML > 0){
       counter.style.color = 'red'
   }  
   if (counter.innerHTML == 0){
    counter.style.color = 'green'
}  
};


function decrementCounter () {

    count--;
    counter.innerHTML = count;

    if (counter.innerHTML < 0){
        counter.style.color = 'blue';
    } 
 }