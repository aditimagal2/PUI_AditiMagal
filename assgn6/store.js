//localStorage.setItem("shoppingCartCount") ;
 
 //For quantity + or -
var countVar = 1;
var countEl = document.getElementById("count");
var countEl2 = document.getElementById("count2");
var countEl3 = document.getElementById("count3");

function plus(){
    countVar++;
    countEl.value = countVar;
    countEl2.value = countVar;
    countEl3.value = countVar;
    console.log(countVar);
    //count== shoppingCartCount;
    }

function minus(){
    if (countVar > 1) {
        countVar--;
        countEl.value = countVar;
        countEl2.value = countVar;
        countEl3.value = countVar;
        console.log(countVar);
        //count== shoppingCartCount;
        }  
    }  



//Dropdown color changes 
function changeColor() {
    var eID = document.getElementById("dropBox");
    var colorVal = eID.options[eID.selectedIndex].value;
    document.getElementById('colorDiv').style.fill=colorVal;
    }

//Radio buttons for choosing pack
function fnRadio1() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");
    var rd4 = document.getElementById("rd4");

    var bunPackImage = document.getElementById("bunPackImage");

    if (rd1.checked==true){
        bunPackImage.src = "img/ProductsPage/Buns1.png";
        //alert("The channel selected is:"+ rd1.value);
    } else if (rd2.checked==true){
        bunPackImage.src = "img/ProductsPage/Buns3.png";
    } else if (rd3.checked==true){
        bunPackImage.src = "img/ProductsPage/Buns6.png";
    } else if (rd4.checked==true){
        bunPackImage.src = "img/ProductsPage/Buns12.png";
    }
}

//show cart
function toggleCart() {
  var x = document.getElementById("circleCart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//function updateQuantity() {
   // document.getElementId("theBlock").innerHTML= localStorage.getItem("shoppingCartCount")}
