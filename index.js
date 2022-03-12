let button = document.querySelector(".varukorg");
let button2 = document.querySelector(".items");
let switch_ = true;

button.addEventListener("click",varukorgen);
button2.addEventListener("click",varukorgen);

function varukorgen(){
    if(switch_ == true){
        switch_ = false;
        document.querySelector(".varor").style.visibility = "visible";
    }
    else if(switch_ == false){
        switch_ = true
        document.querySelector(".varor").style.visibility = "hidden";
    }
}
