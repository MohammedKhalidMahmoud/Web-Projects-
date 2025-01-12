function init(){
   

}
  /*
  const black=["&#9818;", "&#9819;", "&#9820;", "&#9821;", "&#9822;", "&#9823;"]; 
//black[0]=king black[1]=Queen black[2]=Rook,black[3]=Bishop; black[4]=Knight  black[5]=pawn
*/
//const white=["&#9812;", "&#9813;", "&#9814;", "&#9815;", "&#9816;", "&#9817;"];
//black[0]=king black[1]=Queen black[2]=Rook,black[3]=Bishop; black[4]=Knight  black[5]=pawn
const black = new Map([
  ["bking","&#9818;"],
  ["bqueen", "&#9819;"],
  ["brook", "&#9820;"],
  ["bbishop", "&#9821;"],
  ["bknight", "&#9822;"],
  ["bpawn", "&#9823;"]
]);

const white = new Map([
  ["wking","&#9812;"],
  ["wqueen", "&#9813;"],
  ["wrook", "&#9814;"],
  ["wbishop", "&#9815;"],
  ["wknight", "&#9816;"],
  ["wpawn", "&#9817;"]
]);

function exec(){
    init();
   
    const cells=document.querySelectorAll(".box");
    //console.log(cells.length);
    cells.forEach(cell =>{
        if(cell.innerHTML.length!=0){
            console.log(cell.innerHTML);
            if(black.get(cell.innerHTML))
            cell.innerHTML=black.get(cell.innerHTML);
            else
            cell.innerHTML=white.get(cell.innerHTML);
            
        }
        //console.log(counter);
        //cell.innerHTML=black.get(cell.innerHTML);
    });
}
    
        
    

    function init(){
        //document.querySelector("#b801").innerHTML=
    }

    

function addEventListener(){
  const cells=document.querySelectorAll(".box");
  cells.forEach(cell =>{
      cell.addEventListener("click", (cell)=>{
        if(cell.innerHTML.trim !== '')
        console.log("Hello world ya m3lm");
      });
      
      
      //cell.innerHTML=black.get(cell.innerHTML);
  });
}
exec();
addEventListener();