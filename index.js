var numberofbuton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var buttonhtml=this.innerHTML;

     makesound(buttonhtml);
    });

}
document.addEventListener("keypress", function(event){
makesound(event.key);
})
function makesound(key){
    switch (key){ 
        case "a":
            var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "s":
            var kickbass=new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        case "d":
            var share=new Audio("sounds/snare.mp3");
        share.play();
        break;
        case "f":
            var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "g":
            var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "h":
            var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "j":
            var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        
      }

}