var section =document.querySelector(".sec");
var innerdiv =document.querySelector(".innerdiv")
var array =["milk", "chocolat","pen","paper","broom"];
var btn = document.querySelector("button");
btn.addEventListener('click',grocery )
function grocery(){
    for(var i=0;i<array.length;i++)
   if(i%2==0) {
      
       innerdiv.innerText+=array[i];
       console.log(array[i])

    }

}
