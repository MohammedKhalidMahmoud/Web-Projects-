const header= document.getElementById("header");
function wrong(){
    header.innerHTML="Wrong !"
    setTimeout(function(){
        header.innerHTML="Try again !"
    },700);
}
function correct(){
    header.innerHTML="Correct !";
    document.getElementById("word").innerHTML="D O G";
    document.getElementById("img").style.display="block";
}
