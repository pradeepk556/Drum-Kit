var elementsLength = document.querySelectorAll("button").length;

for(var i=0; i<elementsLength; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var elementClicked = this.innerHTML;
        handleClick(elementClicked);
        addAnimation(elementClicked);
    })
}

document.addEventListener("keypress", function(event){
    handleClick(event.key);
    addAnimation(event.key);
});

function handleClick(element){
    
    switch(element){
        case "w":   var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play();
                    break;
        case "a":   var tom1 = new Audio("./sounds/tom-2.mp3");
                    tom1.play();
                    break;
        case "s":   var tom1 = new Audio("./sounds/tom-3.mp3");
                    tom1.play();
                    break;
        case "d":   var tom1 = new Audio("./sounds/tom-4.mp3");
                    tom1.play();
                    break;
        case "j":   var tom1 = new Audio("./sounds/snare.mp3");
                    tom1.play();
                    break;
        case "k":   var tom1 = new Audio("./sounds/kick-bass.mp3");
                    tom1.play();
                    break;
        case "l":   var tom1 = new Audio("./sounds/crash.mp3");
                    tom1.play();
                    break;
        default :   console.log(element);
    }
}


function addAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(
        function(){
            document.querySelector("."+key).classList.remove("pressed");
        }
    , 200);

}