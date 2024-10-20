let userInfo = document.querySelector (".user-info")
let userInfo1 = document.querySelector (".user-info1")
let logOut = document.querySelector (".user-info #log-out")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")


let links = document.querySelector ("#links")

if (localStorage.getItem("email")){
    links.remove()
    userInfo.style.display ="flex"
    userInfo1.style.display ="flex"

    
}

logOut.addEventListener("click" , function(){
   localStorage.clear()
   setTimeout(() => {
     window.location.reload()
   } , 1000)
})
/////////////////////////////////////////////////////////////////////////
let shoppingCart =document.querySelector(".fa-caret-down")
let selectedProducts = document.querySelector(".selected-products")

shoppingCart.addEventListener("click",openCart)

function openCart() {
  shoppingCart.classList.toggle("rotated");
  
    if(selectedProducts.style.display=="block"){
        selectedProducts.style.display="none"
     }else {
         selectedProducts.style.display="block"
            }
  }
// ////////////////////////////////////////////////////////////////////// //
let allProducts = document.querySelector(".home4-products")
let products = [
  {
     id:1,
     imageUrl : "images/aston.jpg",
     title: "Aston Martin DB11 AMR",
     price : 62,
     category :"2023"
     
 },
   {
     id:2,
     imageUrl : "images/Bmw X2 M35i DriveX.jpg",
     title: "Bmw X2 M35i DriveX",
     price : 73,
     category :"2024"
     
 },
   {
     id:3,
     imageUrl : "images/bmw.jpg",
     title: "BMW",
     price : 63,
     category :"2020"
     
 },
   {
       id:4,
       imageUrl : "images/Ford Raptor 135 X.jpg",
       title: "Ford Raptor 135 X",
       price : 96,
       category :"2024"
       
   },
   {
     id:5,
     imageUrl : "images/Mercedes G Class.jpg",
     title: "Mercedes G Class",
     price : 85,
     category :"2025"
     
 },
 {
  id:6,
  imageUrl : "images/Highlander Hybrid.avif",
  title: "Highlander Hybrid",
  price : 61,
  category :"2024"
  
},
{
  id:7,
  imageUrl : "images/Highlander.avif",
  title: "Highlander",
  price : 76,
  category :"2023"
  
},
{
  id:8,
  imageUrl : "images/AMG G 63.jpeg",
  title: "AMG G 63",
  price : 111,
  category :"2025"
  
},
{
  id:9,
  imageUrl : "images/car7.jpg",
  title: "2024 Equinox EV",
  price : 43,
  category :"2024"
  
}
]
// /////////////////////////////////////////////////////////////
let badge=document.querySelector(".cart-badge")
let box=document.querySelector(".selected-box")
let btnPSelect=document.querySelector("#btn-view-PSelect")
const btnAddToCart = document.getElementsByClassName("add_to_cart");

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem){
  addedItem.map((item) => {
    box.innerHTML += `
             <div id="item-${item.id}" class="d-flex justify-content-between div1" style="color:white; ">
            ${item.title}
            <p id="count-${item.id}" class="d-inline-block mx-2 text-danger">${item.count}</p>
            <div>
            <a href="#" onClick="updateCartItem(${item.id}, 1)" class="mx-1" style="font-size: 20px; font-weight: 700; color:white;">+</a>
            <a href="#" onClick="updateCartItem(${item.id}, -1)" class="" style="font-size: 20px; font-weight: 700; color:white;">-</a>
            </div>
        </div>
          `;
  });
  updateCartCount();

 }

 function addToCart(id){
  
  if (localStorage.getItem("email")) {
    
  let selectItem =  products.find((item) => item.id === id)
  if (addedItem.some(item => item.id === id)) { 
   updateCartItem(id, 1); 
    
  }else { 
    selectItem.count = 1;
    addedItem = [...addedItem, selectItem];
    box.innerHTML += `
        <div id="item-${id}" class="d-flex  div1 dropdown-item " style="color:#00712D; ">
            ${selectItem.title}
            <p id="count-${id}" class="d-inline-block mx-2 text-danger">${selectItem.count}</p>
            <div>
            <a href="#" onClick="updateCartItem(${id}, 1)" class="mx-1 text-black-50" style="font-size: 20px; font-weight: 700; ">+</a>
            <a href="#" onClick="updateCartItem(${id}, -1)" class=" text-black-50" style="font-size: 20px; font-weight: 700; ">-</a>
            </div>
        </div>
    `;
}
localStorage.setItem("ProductsInCart", JSON.stringify([...addedItem]));
updateCartCount();
updateTotalPrice();
}else {
  setTimeout(() => {
      window.location = "login.html";
  }, 1000);
}

}

function updateCartItem(id, change) {
  let item = addedItem.find(item => item.id === id);
  item.count += change;
  if (item.count <= 0) {
      removeCartItem(id);
  } else {
      document.getElementById(`count-${id}`).innerText = item.count;
  }
  localStorage.setItem("ProductsInCart", JSON.stringify([...addedItem]));
  updateCartCount();
  updateTotalPrice();
}

function removeCartItem(id) {
  addedItem = addedItem.filter(item => item.id !== id);
  document.getElementById(`item-${id}`).remove();
  updateCartCount();
  updateTotalPrice();
}

function updateCartCount() {
  let productsLength = document.querySelectorAll(".selected-box .div1").length;
  badge.style.display = productsLength > 0 ? "block" : "none";
  badge.innerHTML = productsLength;
}

// function updateTotalPrice() {
//   let total = 0;
//   addedItem.forEach(item => {
//     let count = document.getElementById(`count-${item.id}`).innerText;
//     total += item.price * count;
//   });
//   localStorage.setItem("totalPrice", total);
// }