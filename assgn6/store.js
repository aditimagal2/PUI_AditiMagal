//localStorage.setItem("shoppingCartCount") ;

//function updateQuantity() {
   // document.getElementId("theBlock").innerHTML= localStorage.getItem("shoppingCartCount")}

 
 //For quantity + or -
var countVar = 1;
var countEl = document.getElementById("count");
var countEl2 = document.getElementById("count2");
//var countEl3 = document.getElementById("count3");

function plus(){
    countVar++;
    countEl.value = countVar;
    countEl2.value = countVar;
    //countEl3.value = countVar;
    //console.log(countVar);
    //count== shoppingCartCount;
    }

function minus(){
    if (countVar > 1) {
        countVar--;
        countEl.value = countVar;
        countEl2.value = countVar;
        //countEl3.value = countVar;
        //console.log(countVar);
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

//circle button makes cart appear from left
(function(){
    const cartInfo = document.getElementById("iconShoppingCart");
    const cartInfo2 = document.getElementById("circleCart");

    const cart = document.getElementById("cart");

    cartInfo2.addEventListener("click",function(){
        cart.classList.toggle("show-cart");
    })

    cartInfo.addEventListener("click",function(){
        cart.classList.toggle("show-cart");
    })
})();

//add items to cart
//querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.

//pressing add to cart makes number appear on top of shopping cart
function toggleCart() {
  var x = document.getElementById("circleCart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}

function addItemToCart(){
    //Gets value of glazing when add to cart button is clicked
    var glazing = document.getElementById("dropBox");
    var glazingText = glazing.options[glazing.selectedIndex].innerHTML;

    //console.log(glazingText);


    //Gets value of packSize when add to cart button is clicked
    var packSize = document.getElementsByName("packSize"); 
              
    for(i = 0; i < packSize.length; i++) { 
        if(packSize[i].checked) {
        var newPackSize = packSize[i].value;
        //console.log(newPackSize); 
        }
    } 

    //Gets price depending on bun pack size the price changes
    for(k = 0; k < packSize.length; k++) { 
        if(newPackSize == "12 Rolls") {
        var packPrice = 15;
        //console.log("12 rolls price is", packPrice); 
        } else if (newPackSize == "3 Rolls"){
        var packPrice = 5;
        //console.log("3 rolls price is", packPrice); 
        } else if (newPackSize == "6 Rolls"){
        var packPrice = 10;
        //console.log("6 rolls price is", packPrice); 
        }else {
        var packPrice = 2;
        //console.log("1 rolls price is", packPrice); 
        }
    } 

    //price of the item- the pack size into quantity
    var priceOfItem = packPrice * countVar;
    //console.log(priceOfItem);


    //Adding item to actual green cart
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `

                <!-- cart item -->
                <table>
                <tr id="tableTest">
                    <td class="thumbnailForCart" style="width:117px;">Original</td>
                    <td style="width:122px;">${glazingText}</td>
                    <td style="width:108px;">${newPackSize} <br> <p style="font-size:15px;">($${packPrice})</p></td>
                    <td style="width:108px;">${countVar}</td>
                    <td style="width:85px;"><p class="pricesOfItems">${priceOfItem}</p></td>
                    <td class='cart-item-remove' style="width:69px;" onclick="removeItem()">
                       <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45" fill="#2B2B2B">
                        <path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/>
                      </svg>
                    </td>
                </tr>
                </table>
            `;


        //select cart
    const cart = document.getElementById("cart");

    //This is the shipping and total block
    const total = document.querySelector(".cart-total-container");

    cart.insertBefore(cartItem, total);
    //alert("item added to the cart", glazingText);
    //console.log(total);




    const theArray = [];
    const elements = document.querySelectorAll('.pricesOfItems');
    const elementsArray = Array.from(elements);

    //This give the number of items in the cart
    const cartItems = elements.length;
    //theArray.appendChild(elementsArray);
    

    //count 3 get element for circle cart and replace it with elementsQuantity since this will be the number of items

    var shoppingCartCircle = document.getElementById("count3");

    //console.log("This element count 3 is",count3)

    count3.value = cartItems;


    //elements give you all this rando info on price of each item, how do i get the innerHTML specific part?
    //This gets the inner HTML 
    sum = 0;
    for(var i=0;i<elements.length;i++){
        sum += parseInt(elements[i].innerHTML);
    }
    //console.log('Total', sum);

    totalPrice = document.getElementById("combined");
    //console.log(totalPrice);
    //+5 is for shipping
    totalPrice.value =sum+5;



}

function removeItem(){
    //console.log("The click worked",removeIconNV);
    //console.log(removeIconNV);
    var removeCartItemButtons = document.getElementsByClassName("cart-item-remove");
    var removeCartItems = document.getElementById("tableTest");
    //console.log(removeCartItems);
    removeCartItems.parentNode.removeChild(removeCartItems);
    //console.log(removeCartItems.parentNode);


    count3.value = count3.value -1;
    totalPrice.value =sum+5;

    }


