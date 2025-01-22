
var input_1=document.querySelector('#input-1');
var input_2=document.querySelector('#input-2');
var input_3=document.querySelector('#input-3');
var input_4=document.querySelector('#input-4');

function verify(){
    console.log(input_1.value+input_2.value+input_3.value+input_4.value);
}

input_1.addEventListener('keydown', function(event){
    // if(event.key=='Backspace') input_1.select();
})

input_2.addEventListener('keydown', function(event){
    if(event.key=='Backspace') input_1.select();
})

input_3.addEventListener('keydown', function(event){
    if(event.key=='Backspace') input_2.select();
})

input_4.addEventListener('keydown', function(event){
    console.log(event);
    if(event.key=='Backspace') input_3.select();
})