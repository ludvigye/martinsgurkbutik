let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numbers = document.querySelectorAll(".abuttons");
let numbersv = document.querySelectorAll(".avarukorgsknapp");
let numbersp = document.querySelectorAll(".pbuttons");
let numberspv = document.querySelectorAll(".pvarukorgsknapp");
let numbersm = document.querySelectorAll(".mbuttons");
let numbersmv = document.querySelectorAll(".mvarukorgsknapp");
let Shoppingcart = document.querySelector(".räknare");
let items = document.querySelectorAll(".bilderpåprodukt");
let remove = document.querySelector(".tabortallavaror");
let totalitems = document.querySelector(".items");
let prices = [20.95, 9.95, 56.32, 2241, 24.95, 63.95, 2835.42, 3.138, 8.88, 56.89, 72.37];
let sum = 0;
let totalclicks = 0;
let noitems = document.querySelector(".emptyshoppingcart");

for (let index = 0; index < numbersp.length; index++) {
    numbersp[index].addEventListener("click",function() {sum = ShoppingCartPositive(clicked[index],prices[index],sum)});
    numberspv[index].addEventListener("click",function() {sum = ShoppingCartPositive(clicked[index],prices[index],sum)});
    numbersp[index].addEventListener("click",function() {clicked[index] = HandlePositive(clicked[index],numbers[index],numbersv[index])});
    numbersm[index].addEventListener("click",function() {sum = ShoppingCartNegative(clicked[index],prices[index],sum)});
    numbersmv[index].addEventListener("click",function() {sum = ShoppingCartNegative(clicked[index],prices[index],sum)});
    numbersm[index].addEventListener("click",function() {clicked[index] = HandleNegative(clicked[index],numbers[index],numbersv[index])});
    numberspv[index].addEventListener("click",function() {clicked[index] = HandlePositive(clicked[index],numbers[index],numbersv[index])});
    numbersmv[index].addEventListener("click",function() {clicked[index] = HandleNegative(clicked[index],numbers[index],numbersv[index])});
    numbersp[index].addEventListener("click",function() {Visibility(items[index],clicked[index])});
    numbersm[index].addEventListener("click",function() {VisibilityHidden(items[index],clicked[index])});
    remove.addEventListener("click",RemoveItems);
    numbersp[index].addEventListener("click",Clicks);
    numberspv[index].addEventListener("click",Clicks);
    numbersm[index].addEventListener("click",Clicks);
    numbersmv[index].addEventListener("click",Clicks);
}
function HandlePositive(clicked,numbers,numbersv) {
    if(clicked < 99){
    clicked++;
    numbers.innerHTML = clicked;
    numbersv.innerHTML = clicked;
    return clicked;
    }
    else {
        return clicked = 99;
    }
}
function HandleNegative(clicked,numbers,numbersv) {
    if(clicked > 0){
        clicked--;
        numbers.innerHTML = clicked;
        numbersv.innerHTML = clicked;
        return clicked;
    }
    else {
        return clicked = 0;
    }
}
function ShoppingCartPositive(clicked,price,sum) {
    if(clicked < 99){
    sum += price;
    Shoppingcart.innerHTML = sum.toFixed(2) + " kr";
    return sum; 
    }
    else {
        return sum;
    }
}
function ShoppingCartNegative(clicked,price,sum) {
    if(clicked > 0){
    sum -= price;
    Shoppingcart.innerHTML = sum.toFixed(2) + " kr";
    return sum;
    }
    else{
        return sum;
    }
}
function Visibility(items,clicked){
    if(clicked == 1){
        items.style.display = "contents";
        items.style.display = "flex";
    }
}
function VisibilityHidden(items,clicked){
    if(clicked == 0){
        items.style.display = "none";
    }
}
function RemoveItems(){
    sum = 0;
    for (let index = 0; index < clicked.length; index++){
        clicked[index] = 0;
        numbers[index].innerHTML = clicked[index];
        numbersv[index].innerHTML = clicked[index];
        VisibilityHidden(items[index],clicked[index]);
    }
    Shoppingcart.innerHTML = sum.toFixed(2) + " kr";
    Clicks();
}
function Clicks(){
    totalclicks = 0;
    for (let index = 0; index < clicked.length; index++) {
        totalclicks += clicked[index];
    }
    totalitems.innerHTML = totalclicks;
    if(totalclicks > 99){
        totalitems.style.width = "40px";
    }
    if(totalclicks > 0){
        noitems.style.display = "none";
    }
    else{
        noitems.style.display = "contents";
    }
}


