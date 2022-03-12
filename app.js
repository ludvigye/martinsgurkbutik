let räknare = 0;
let varukorg = document.querySelector(".räknare");

console.log("hej");
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

let tabortallt = document.querySelector(".tabortallavaror");
tabortallt.addEventListener("click",tabort);
function tabort(){

    // for (let index = 0; index < clicked.length; index++) {
    //     clicked[index] = -1;
    // }

    räknare = 0;
    clicked1 = -1;
    clicked2 = -1;
    clicked3 = -1;
    clicked4 = -1;
    clicked5 = -1;
    clicked6 = -1;
    clicked7 = -1;
    clicked8 = -1;
    clicked9 = -1;
    clicked10 = -1;
    clicked11 = -1;

    // for (let index = 0; index < clicked.length; index++) {
    //     HandleClickedPositive(clicked[index], numbers[index], numbersv[index]);   
    // }

    HandleClickedpositiv1();
    HandleClickedpositiv2();
    HandleClickedpositiv3();
    HandleClickedpositiv4();
    HandleClickedpositiv5();
    HandleClickedpositiv6();
    HandleClickedpositiv7();
    HandleClickedpositiv8();
    HandleClickedpositiv9();
    HandleClickedpositiv10();
    HandleClickedpositiv11();
    varukorg.innerHTML = räknare.toFixed(2) + " kr";
    document.querySelector(".svenskgurka").style.display = "none";
    document.querySelector(".gurkaklass1").style.display = "none";
    document.querySelector(".djungelgurka").style.display = "none";
    document.querySelector(".barudsgurka").style.display = "none";
    document.querySelector(".snackgurka").style.display = "none";
    document.querySelector(".libanesiskgurka").style.display = "none";
    document.querySelector(".börjesson").style.display = "none";
    document.querySelector(".ozansdolma").style.display = "none";
    document.querySelector(".ruttengurka").style.display = "none";
    document.querySelector(".salzgurken").style.display = "none";
    document.querySelector(".鸭舌头").style.display = "none";
}


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
let numberv1 = document.querySelector(".aknappv1");
let numberv2 = document.querySelector(".aknappv2");
let numberv3 = document.querySelector(".aknappv3");
let numberv4 = document.querySelector(".aknappv4");
let numberv5 = document.querySelector(".aknappv5");
let numberv6 = document.querySelector(".aknappv6");
let numberv7 = document.querySelector(".aknappv7");
let numberv8 = document.querySelector(".aknappv8");
let numberv9 = document.querySelector(".aknappv9");
let numberv10 = document.querySelector(".aknappv10");
let numberv11 = document.querySelector(".aknappv11");

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
let buttonvp1 = document.querySelector(".pknappv1");
let buttonvp2 = document.querySelector(".pknappv2");
let buttonvp3 = document.querySelector(".pknappv3");
let buttonvp4 = document.querySelector(".pknappv4");
let buttonvp5 = document.querySelector(".pknappv5");
let buttonvp6 = document.querySelector(".pknappv6");
let buttonvp7 = document.querySelector(".pknappv7");
let buttonvp8 = document.querySelector(".pknappv8");
let buttonvp9 = document.querySelector(".pknappv9");
let buttonvp10 = document.querySelector(".pknappv10");
let buttonvp11 = document.querySelector(".pknappv11");

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
let buttonvm1 = document.querySelector(".mknappv1")
let buttonvm2 = document.querySelector(".mknappv2");
let buttonvm3 = document.querySelector(".mknappv3");
let buttonvm4 = document.querySelector(".mknappv4");
let buttonvm5 = document.querySelector(".mknappv5");
let buttonvm6 = document.querySelector(".mknappv6");
let buttonvm7 = document.querySelector(".mknappv7");
let buttonvm8 = document.querySelector(".mknappv8");
let buttonvm9 = document.querySelector(".mknappv9");
let buttonvm10 = document.querySelector(".mknappv10");
let buttonvm11 = document.querySelector(".mknappv11");



buttonm1.addEventListener("click", function() {varukorgnegativ(20.95, clicked1)});
buttonm2.addEventListener("click", function() {varukorgnegativ(9.95, clicked2)});
buttonm3.addEventListener("click", function() {varukorgnegativ(56.32, clicked3)});
buttonm4.addEventListener("click", function() {varukorgnegativ(2241, clicked4)});
buttonm5.addEventListener("click", function() {varukorgnegativ(24.95, clicked5)});
buttonm6.addEventListener("click", function() {varukorgnegativ(63.95, clicked6)});
buttonm7.addEventListener("click", function() {varukorgnegativ(2835.42, clicked7)});
buttonm8.addEventListener("click", function() {varukorgnegativ(3.138, clicked8)});
buttonm9.addEventListener("click", function() {varukorgnegativ(8.88, clicked9)});
buttonm10.addEventListener("click", function() {varukorgnegativ(56.89, clicked10)});
buttonm11.addEventListener("click", function() {varukorgnegativ(72.37, clicked11)});

buttonvm3.addEventListener("click", function() {varukorgnegativ(56.32, clicked3)});
buttonvm4.addEventListener("click", function() {varukorgnegativ(2241, clicked4)});
buttonvm5.addEventListener("click", function() {varukorgnegativ(24.95, clicked5)});
buttonvm6.addEventListener("click", function() {varukorgnegativ(63.95, clicked6)});
buttonvm7.addEventListener("click", function() {varukorgnegativ(2835.42, clicked7)});
buttonvm8.addEventListener("click", function() {varukorgnegativ(3.138, clicked8)});
buttonvm9.addEventListener("click", function() {varukorgnegativ(8.88, clicked9)});
buttonvm10.addEventListener("click", function() {varukorgnegativ(56.89, clicked10)});
buttonvm11.addEventListener("click", function() {varukorgnegativ(72.37, clicked11)});


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

buttonvm3.addEventListener("click", HandleClickednegativ3);
buttonvm4.addEventListener("click", HandleClickednegativ4);
buttonvm5.addEventListener("click", HandleClickednegativ5);
buttonvm6.addEventListener("click", HandleClickednegativ6);
buttonvm7.addEventListener("click", HandleClickednegativ7);
buttonvm8.addEventListener("click", HandleClickednegativ8);
buttonvm9.addEventListener("click", HandleClickednegativ9);
buttonvm10.addEventListener("click", HandleClickednegativ10);
buttonvm11.addEventListener("click", HandleClickednegativ11);


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


buttonvp3.addEventListener("click", HandleClickedpositiv3);
buttonvp4.addEventListener("click", HandleClickedpositiv4);
buttonvp5.addEventListener("click", HandleClickedpositiv5);
buttonvp6.addEventListener("click", HandleClickedpositiv6);
buttonvp7.addEventListener("click", HandleClickedpositiv7);
buttonvp8.addEventListener("click", HandleClickedpositiv8);
buttonvp9.addEventListener("click", HandleClickedpositiv9);
buttonvp10.addEventListener("click", HandleClickedpositiv10);
buttonvp11.addEventListener("click", HandleClickedpositiv11);

buttonp1.addEventListener("click", function() {varukorgpositiv1(20.95)});
buttonp2.addEventListener("click", function() {varukorgpositiv2(9.95)});
buttonp3.addEventListener("click", function() {varukorgpositiv3(56.32)});
buttonp4.addEventListener("click", function() {varukorgpositiv4(2241)});
buttonp5.addEventListener("click", function() {varukorgpositiv5(24.95)});
buttonp6.addEventListener("click", function() {varukorgpositiv6(63.95)});
buttonp7.addEventListener("click", function() {varukorgpositiv7(2835.42)});
buttonp8.addEventListener("click", function() {varukorgpositiv8(3.138)});
buttonp9.addEventListener("click", function() {varukorgpositiv9(8.88)});
buttonp10.addEventListener("click", function() {varukorgpositiv10(56.89)});
buttonp11.addEventListener("click", function() {varukorgpositiv11(72.37)});

buttonvp3.addEventListener("click", function() {varukorgpositiv3(56.32)});
buttonvp4.addEventListener("click", function() {varukorgpositiv4(2241)});
buttonvp5.addEventListener("click", function() {varukorgpositiv5(24.95)});
buttonvp6.addEventListener("click", function() {varukorgpositiv6(63.95)});
buttonvp7.addEventListener("click", function() {varukorgpositiv7(2835.42)});
buttonvp8.addEventListener("click", function() {varukorgpositiv8(3.138)});
buttonvp9.addEventListener("click", function() {varukorgpositiv9(8.88)});
buttonvp10.addEventListener("click", function() {varukorgpositiv10(56.89)});
buttonvp11.addEventListener("click", function() {varukorgpositiv11(72.37)});

function HandleClickedpositiv1(){
    if(clicked1 < 99){
        clicked1++;
        number1.innerHTML = clicked1;
        numberv1.innerHTML = clicked1;
    }
    else if(clicked1 == 99){
        clicked1++;
    }
}
function HandleClickedpositiv2(){
    if(clicked2 < 99){
        clicked2++;
        number2.innerHTML = clicked2;
        numberv2.innerHTML = clicked2;
    }
    else if(clicked2 == 99){
        clicked2++;
    }
}
function HandleClickedpositiv3(){
    if(clicked3 < 99){
        clicked3++;
        number3.innerHTML = clicked3;
        numberv3.innerHTML = clicked3;
    }
    else if(clicked3 == 99){
        clicked3++;
    }
}
function HandleClickedpositiv4(){
    if(clicked4 < 99){
        clicked4++;
        number4.innerHTML = clicked4;
        numberv4.innerHTML = clicked4;
    }
    else if(clicked4 == 99){
        clicked4++;
    }
}
function HandleClickedpositiv5(){
    if(clicked5 < 99){
        clicked5++;
        number5.innerHTML = clicked5;
        numberv5.innerHTML = clicked5;
    }
    else if(clicked5 == 99){
        clicked5++;
    }
}
function HandleClickedpositiv6(){
    if(clicked6 < 99){
        clicked6++;
        number6.innerHTML = clicked6;
        numberv6.innerHTML = clicked6;
    }
    else if(clicked6 == 99){
        clicked6++;
    }
}
function HandleClickedpositiv7(){
    if(clicked7 < 99){
        clicked7++;
        number7.innerHTML = clicked7;
        numberv7.innerHTML = clicked7;
    }
    else if(clicked7 == 99){
        clicked7++;
    }
}
function HandleClickedpositiv8(){
    if(clicked8 < 99){
        clicked8++;
        number8.innerHTML = clicked8;
        numberv8.innerHTML = clicked8;
    }
    else if(clicked8 == 99){
        clicked8++;
    }
}
function HandleClickedpositiv9(){
    if(clicked9 < 99){
        clicked9++;
        number9.innerHTML = clicked9;
        numberv9.innerHTML = clicked9;
    }
    else if(clicked9 == 99){
        clicked9++;
    }
}
function HandleClickedpositiv10(){
    if(clicked10 < 99){
        clicked10++;
        number10.innerHTML = clicked10;
        numberv10.innerHTML = clicked10;
    }
    else if(clicked10 == 99){
        clicked10++;
    }
}
function HandleClickedpositiv11(){
    if(clicked11 < 99){
        clicked11++;
        number11.innerHTML = clicked11;
        numberv11.innerHTML = clicked11;
    }
    else if(clicked11 == 99){
        clicked11++;
    }
}

function HandleClickednegativ1(){
    if(clicked1 > 0){
        clicked1--;
        number1.innerHTML = clicked1;
        numberv1.innerHTML = clicked1;
        if(clicked1 == 99){
            clicked1--;
            number1.innerHTML = clicked1;
            numberv1.innerHTML = clicked1;
        }
    }
}
function HandleClickednegativ2(){
    if(clicked2 > 0){
        clicked2--;
        number2.innerHTML = clicked2;
        numberv2.innerHTML = clicked2;
        if(clicked2 == 99){
            clicked2--;
            number2.innerHTML = clicked2;
            numberv2.innerHTML = clicked2;
        }
    }
}
function HandleClickednegativ3(){
    if(clicked3 > 0){
        clicked3--;
        number3.innerHTML = clicked3;
        numberv3.innerHTML = clicked3;
        if(clicked3 == 99){
            clicked3--;
            number3.innerHTML = clicked3;
            numberv3.innerHTML = clicked3;
        }
    }
}
function HandleClickednegativ4(){
    if(clicked4 > 0){
        clicked4--;
        number4.innerHTML = clicked4;
        numberv4.innerHTML = clicked4;
        if(clicked4 == 99){
            clicked4--;
            number4.innerHTML = clicked4;
            numberv4.innerHTML = clicked4;
        }
    }
}
function HandleClickednegativ5(){
    if(clicked5 > 0){
        clicked5--;
        number5.innerHTML = clicked5;
        numberv5.innerHTML = clicked5;
        if(clicked5 == 99){
            clicked5--;
            number5.innerHTML = clicked5;
            numberv5.innerHTML = clicked5;
        }
    }
}
function HandleClickednegativ6(){
    if(clicked6 > 0){
        clicked6--;
        number6.innerHTML = clicked6;
        numberv6.innerHTML = clicked6;
        if(clicked6 == 99){
            clicked6--;
            number6.innerHTML = clicked6;
            numberv6.innerHTML = clicked6;
        }
    }
}
function HandleClickednegativ7(){
    if(clicked7 > 0){
        clicked7--;
        number7.innerHTML = clicked7;
        numberv7.innerHTML = clicked7;
        if(clicked7 == 99){
            clicked7--;
            number7.innerHTML = clicked7;
            numberv7.innerHTML = clicked7;
        }
    }
}
function HandleClickednegativ8(){
    if(clicked8 > 0){
        clicked8--;
        number8.innerHTML = clicked8;
        numberv8.innerHTML = clicked8;
        if(clicked8 == 99){
            clicked8--;
            number8.innerHTML = clicked8;
            numberv8.innerHTML = clicked8;
        }
    }
}
function HandleClickednegativ9(){
    if(clicked9 > 0){
        clicked9--;
        number9.innerHTML = clicked9;
        numberv9.innerHTML = clicked9;
        if(clicked9 == 99){
            clicked9--;
            number9.innerHTML = clicked9;
            numberv9.innerHTML = clicked9;
        }
    }
}
function HandleClickednegativ10(){
    if(clicked10 > 0){
        clicked10--;
        number10.innerHTML = clicked10;
        numberv10.innerHTML = clicked10;
        if(clicked10 == 99){
            clicked10--;
            number10.innerHTML = clicked10;
            numberv10.innerHTML = clicked10;
        }
    }
}
function HandleClickednegativ11(){
    if(clicked11 > 0){
        clicked11--;
        number11.innerHTML = clicked11;
        numberv11.innerHTML = clicked11;
        if(clicked11 == 99){
            clicked11--;
            number11.innerHTML = clicked11;
            numberv11.innerHTML = clicked11;
        }
    }
}

function varukorgpositiv1(tal){
    räknare += tal;
    if(räknare < 999999 && clicked1-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv2(tal){
    räknare += tal;
    if(räknare < 999999 && clicked2-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv3(tal){
    räknare += tal;
    if(räknare < 999999 && clicked3-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv4(tal){
    räknare += tal;
    if(räknare < 999999 && clicked4-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv5(tal){
    räknare += tal;
    if(räknare < 999999 && clicked5-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv6(tal){
    räknare += tal;
    if(räknare < 999999 && clicked6-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv7(tal){
    räknare += tal;
    if(räknare < 999999 && clicked7-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv8(tal){
    räknare += tal;
    if(räknare < 999999 && clicked8-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv9(tal){
    räknare += tal;
    if(räknare < 999999 && clicked9-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv10(tal){
    räknare += tal;
    if(räknare < 999999 && clicked10-1 < 99){
        varukorg.innerHTML = räknare.toFixed(2) + " kr";
    }
    else {  
        räknare -= tal;
    }
}
function varukorgpositiv11(tal){
    räknare += tal;
    if(räknare < 999999 && clicked11-1 < 99){
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

buttonp1.addEventListener("click",visibility);
buttonp2.addEventListener("click",visibility2);
buttonp3.addEventListener("click",visibility3);
buttonp4.addEventListener("click",visibility4);
buttonp5.addEventListener("click",visibility5);
buttonp6.addEventListener("click",visibility6);
buttonp7.addEventListener("click",visibility7);
buttonp8.addEventListener("click",visibility8);
buttonp9.addEventListener("click",visibility9);
buttonp10.addEventListener("click",visibility10);
buttonp11.addEventListener("click",visibility11);
buttonm1.addEventListener("click",visibilityhidden);
buttonm2.addEventListener("click",visibilityhidden2);
buttonm3.addEventListener("click",visibilityhidden3);
buttonm4.addEventListener("click",visibilityhidden4);
buttonm5.addEventListener("click",visibilityhidden5);
buttonm6.addEventListener("click",visibilityhidden6);
buttonm7.addEventListener("click",visibilityhidden7);
buttonm8.addEventListener("click",visibilityhidden8);
buttonm9.addEventListener("click",visibilityhidden9);
buttonm10.addEventListener("click",visibilityhidden10);
buttonm11.addEventListener("click",visibilityhidden11);


function visibility(){
    if(clicked1 == 1){
        document.querySelector(".svenskgurka").style.display = "contents";
        document.querySelector(".svenskgurka").style.display = "flex";
    }
}
function visibility2(){
    if(clicked2 == 1){
        document.querySelector(".gurkaklass1").style.display = "contents";
        document.querySelector(".gurkaklass1").style.display = "flex";
    }
}
function visibility3(){
    if(clicked3 == 1){
        document.querySelector(".djungelgurka").style.display = "contents";
        document.querySelector(".djungelgurka").style.display = "flex";
    }
}
function visibility4(){
    if(clicked4 == 1){
        document.querySelector(".barudsgurka").style.display = "contents";
        document.querySelector(".barudsgurka").style.display = "flex";
    }
}
function visibility5(){
    if(clicked5 == 1){
        document.querySelector(".snackgurka").style.display = "contents";
        document.querySelector(".snackgurka").style.display = "flex";
    }
}
function visibility6(){
    if(clicked6 == 1){
        document.querySelector(".libanesiskgurka").style.display = "contents";
        document.querySelector(".libanesiskgurka").style.display = "flex";
    }
}
function visibility7(){
    if(clicked7 == 1){
        document.querySelector(".börjesson").style.display = "contents";
        document.querySelector(".börjesson").style.display = "flex";
    }
}
function visibility8(){
    if(clicked8 == 1){
        document.querySelector(".ozansdolma").style.display = "contents";
        document.querySelector(".ozansdolma").style.display = "flex";
    }
}
function visibility9(){
    if(clicked9 == 1){
        document.querySelector(".ruttengurka").style.display = "contents";
        document.querySelector(".ruttengurka").style.display = "flex";
    }
}
function visibility10(){
    if(clicked10 == 1){
        document.querySelector(".salzgurken").style.display = "contents";
        document.querySelector(".salzgurken").style.display = "flex";
    }
}
function visibility11(){
    if(clicked11 == 1){
        document.querySelector(".鸭舌头").style.display = "contents";
        document.querySelector(".鸭舌头").style.display = "flex";
    }
}


function visibilityhidden(){
    if(clicked1 == 0){
        document.querySelector(".svenskgurka").style.display = "none";
    }
}
function visibilityhidden2(){
    if(clicked2 == 0){
        document.querySelector(".gurkaklass1").style.display = "none";
    }
}

function visibilityhidden3(){
    if(clicked3 == 0){
        document.querySelector(".djungelgurka").style.display = "none";
    }
}
function visibilityhidden4(){
    if(clicked4 == 0){
        document.querySelector(".barudsgurka").style.display = "none";
    }
}
function visibilityhidden5(){
    if(clicked5 == 0){
        document.querySelector(".snackgurka").style.display = "none";
    }
}

function visibilityhidden6(){
    if(clicked6 == 0){
        document.querySelector(".libanesiskgurka").style.display = "none";
    }
}
function visibilityhidden7(){
    if(clicked7 == 0){
        document.querySelector(".börjesson").style.display = "none";
    }
}
function visibilityhidden8(){
    if(clicked8 == 0){
        document.querySelector(".ozansdolma").style.display = "none";
    }
}
function visibilityhidden9(){
    if(clicked9 == 0){
        document.querySelector(".ruttengurka").style.display = "none";
    }
}
function visibilityhidden10(){
    if(clicked10 == 0){
        document.querySelector(".salzgurken").style.display = "none";
    }
}
function visibilityhidden11(){
    if(clicked11 == 0){
        document.querySelector(".鸭舌头").style.display = "none";
    }
}
