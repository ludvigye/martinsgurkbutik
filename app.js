let räknare = 0;
let varukorg = document.querySelector(".räknare")

let clicked1 = 0;
let clicked2 = 0;
let clicked3 = 0;
let clicked4 = 0;
let clicked5 = 0;
let clicked6 = 0;
let clicked7 = 0;
let clicked8 = 0;
let clicked9 = 0;
let clicked10 = 0;
let clicked11 = 0;

let number1 = document.querySelector(".aknapp1");
let number2 = document.querySelector(".aknapp2");
let number3 = document.querySelector(".aknapp3");
let number4 = document.querySelector(".aknapp4");
let number5 = document.querySelector(".aknapp5");
let number6 = document.querySelector(".aknapp6");
let number7 = document.querySelector(".aknapp7");
let number8 = document.querySelector(".aknapp8");
let number9 = document.querySelector(".aknapp9");
let number10 = document.querySelector(".aknapp10");
let number11 = document.querySelector(".aknapp11");

let buttonp1 = document.querySelector(".pknapp1");
let buttonp2 = document.querySelector(".pknapp2");
let buttonp3 = document.querySelector(".pknapp3");
let buttonp4 = document.querySelector(".pknapp4");
let buttonp5 = document.querySelector(".pknapp5");
let buttonp6 = document.querySelector(".pknapp6");
let buttonp7 = document.querySelector(".pknapp7");
let buttonp8 = document.querySelector(".pknapp8");
let buttonp9 = document.querySelector(".pknapp9");
let buttonp10 = document.querySelector(".pknapp10");
let buttonp11 = document.querySelector(".pknapp11");

let buttonm1 = document.querySelector(".mknapp1");
let buttonm2 = document.querySelector(".mknapp2");
let buttonm3 = document.querySelector(".mknapp3");
let buttonm4 = document.querySelector(".mknapp4");
let buttonm5 = document.querySelector(".mknapp5");
let buttonm6 = document.querySelector(".mknapp6");
let buttonm7 = document.querySelector(".mknapp7");
let buttonm8 = document.querySelector(".mknapp8");
let buttonm9 = document.querySelector(".mknapp9");
let buttonm10 = document.querySelector(".mknapp10");
let buttonm11 = document.querySelector(".mknapp11");

buttonm1.addEventListener("click", function() {varukorgnegativ(20.95, clicked1)});
buttonm2.addEventListener("click", function() {varukorgnegativ(9.95, clicked2)});
buttonm3.addEventListener("click", function() {varukorgnegativ(56.32, clicked3)});
buttonm4.addEventListener("click", function() {varukorgnegativ(2241, clicked4)});
buttonm5.addEventListener("click", function() {varukorgnegativ(24.95, clicked5)});
buttonm6.addEventListener("click", function() {varukorgnegativ(63.95, clicked6)});
buttonm7.addEventListener("click", function() {varukorgnegativ(21.98, clicked7)});
buttonm8.addEventListener("click", function() {varukorgnegativ(5.23, clicked8)});
buttonm9.addEventListener("click", function() {varukorgnegativ(8.88, clicked9)});
buttonm10.addEventListener("click", function() {varukorgnegativ(56.89, clicked10)});
buttonm11.addEventListener("click", function() {varukorgnegativ(72.37, clicked11)});

buttonm1.addEventListener("click", HandleClickednegativ1);
buttonm2.addEventListener("click", HandleClickednegativ2);
buttonm3.addEventListener("click", HandleClickednegativ3);
buttonm4.addEventListener("click", HandleClickednegativ4);
buttonm5.addEventListener("click", HandleClickednegativ5);
buttonm6.addEventListener("click", HandleClickednegativ6);
buttonm7.addEventListener("click", HandleClickednegativ7);
buttonm8.addEventListener("click", HandleClickednegativ8);
buttonm9.addEventListener("click", HandleClickednegativ9);
buttonm10.addEventListener("click", HandleClickednegativ10);
buttonm11.addEventListener("click", HandleClickednegativ11);

buttonp1.addEventListener("click", HandleClickedpositiv1);
buttonp2.addEventListener("click", HandleClickedpositiv2);
buttonp3.addEventListener("click", HandleClickedpositiv3);
buttonp4.addEventListener("click", HandleClickedpositiv4);
buttonp5.addEventListener("click", HandleClickedpositiv5);
buttonp6.addEventListener("click", HandleClickedpositiv6);
buttonp7.addEventListener("click", HandleClickedpositiv7);
buttonp8.addEventListener("click", HandleClickedpositiv8);
buttonp9.addEventListener("click", HandleClickedpositiv9);
buttonp10.addEventListener("click", HandleClickedpositiv10);
buttonp11.addEventListener("click", HandleClickedpositiv11);

buttonp1.addEventListener("click", function() {varukorgpositiv(20.95)});
buttonp2.addEventListener("click", function() {varukorgpositiv(9.95)});
buttonp3.addEventListener("click", function() {varukorgpositiv(56.32)});
buttonp4.addEventListener("click", function() {varukorgpositiv(2241)});
buttonp5.addEventListener("click", function() {varukorgpositiv(24.95)});
buttonp6.addEventListener("click", function() {varukorgpositiv(63.95)});
buttonp7.addEventListener("click", function() {varukorgpositiv(21.98)});
buttonp8.addEventListener("click", function() {varukorgpositiv(5.23)});
buttonp9.addEventListener("click", function() {varukorgpositiv(8.88)});
buttonp10.addEventListener("click", function() {varukorgpositiv(56.89)});
buttonp11.addEventListener("click", function() {varukorgpositiv(72.37)});

function HandleClickedpositiv1(){
    if(clicked1 < 999 && räknare < 10000){
        clicked1++;
        number1.innerHTML = clicked1;
    }
}
function HandleClickedpositiv2(){
    if(clicked2 < 999 && räknare < 10000){
        clicked2++;
        number2.innerHTML = clicked2;
    }
}
function HandleClickedpositiv3(){
    if(clicked3 < 999 && räknare < 10000){
        clicked3++;
        number3.innerHTML = clicked3;
    }
}
function HandleClickedpositiv4(){
    if(clicked4 < 999 && räknare < 10000){
        clicked4++;
        number4.innerHTML = clicked4;
    }
}
function HandleClickedpositiv5(){
    if(clicked5 < 999 && räknare < 10000){
        clicked5++;
        number5.innerHTML = clicked5;
    }
}
function HandleClickedpositiv6(){
    if(clicked6 < 999 && räknare < 10000){
        clicked6++;
        number6.innerHTML = clicked6;
    }
}
function HandleClickedpositiv7(){
    if(clicked7 < 999 && räknare < 10000){
        clicked7++;
        number7.innerHTML = clicked7;
    }
}
function HandleClickedpositiv8(){
    if(clicked8 < 999 && räknare < 10000){
        clicked8++;
        number8.innerHTML = clicked8;
    }
}
function HandleClickedpositiv9(){
    if(clicked9 < 999 && räknare < 10000){
        clicked9++;
        number9.innerHTML = clicked9;
    }
}
function HandleClickedpositiv10(){
    if(clicked10 < 999 && räknare < 10000){
        clicked10++;
        number10.innerHTML = clicked10;
    }
}
function HandleClickedpositiv11(){
    if(clicked11 < 999 && räknare < 10000){
        clicked11++;
        number11.innerHTML = clicked11;
    }
}

function HandleClickednegativ1(){
    if(clicked1 > 0){
        clicked1--;
        number1.innerHTML = clicked1;
    }
}
function HandleClickednegativ2(){
    if(clicked2 > 0){
        clicked2--;
        number2.innerHTML = clicked2;
    }
}
function HandleClickednegativ3(){
    if(clicked3 > 0){
        clicked3--;
        number3.innerHTML = clicked3;
    }
}
function HandleClickednegativ4(){
    if(clicked4 > 0){
        clicked4--;
        number4.innerHTML = clicked4;
    }
}
function HandleClickednegativ5(){
    if(clicked5 > 0){
        clicked5--;
        number5.innerHTML = clicked5;
    }
}
function HandleClickednegativ6(){
    if(clicked6 > 0){
        clicked6--;
        number6.innerHTML = clicked6;
    }
}
function HandleClickednegativ7(){
    if(clicked7 > 0){
        clicked7--;
        number7.innerHTML = clicked7;
    }
}
function HandleClickednegativ8(){
    if(clicked8 > 0){
        clicked8--;
        number8.innerHTML = clicked8;
    }
}
function HandleClickednegativ9(){
    if(clicked9 > 0){
        clicked9--;
        number9.innerHTML = clicked9;
    }
}
function HandleClickednegativ10(){
    if(clicked10 > 0){
        clicked10--;
        number10.innerHTML = clicked10;
    }
}
function HandleClickednegativ11(){
    if(clicked11 > 0){
        clicked11--;
        number11.innerHTML = clicked11;
    }
}

function varukorgpositiv(tal){
    räknare += tal;
    if(räknare < 10000){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {
    räknare -= tal;
    }
}
function varukorgnegativ(tal,räknarnummer){
    if(räknarnummer > 0){
        räknare -= tal;
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
}






