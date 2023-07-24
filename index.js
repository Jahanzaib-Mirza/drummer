for(var i =0 ;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",play)
}
// document.getElementById("s").innerHTML
function play(){
    sound(this.innerHTML)
    btnAnimation(this.innerHTML)
}

function sound(val){
    switch(val){
        case 'w':{
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        }
        case 'a':{
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        }case 's':{
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        }case 'd':{
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;
        }case 'j':{
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;
        }case 'k':{
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;
        }case 'l':{
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;
        }
        default : break;
    }
}

function btnAnimation(val){
    var active = document.querySelector("."+val);
    active.classList.add("pressed");
    console.log(active.classList)
    setTimeout(()=>{
    active.classList.remove("pressed");
    },100)
    
}

document.addEventListener("keydown",(e)=>{
    sound(e.key);
    btnAnimation(e.key);
})