
let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector(".products");
let user = document.querySelector(".user-name");
user.innerHTML=localStorage.getItem ("userName");

if (ProductsInCart) {
    let item = JSON.parse(ProductsInCart);
    drawProductsCart(item);
}
else {
  let x= document.createElement("h1")
  x.textContent="Your shopping cart is empty."
  x.style.textAlign="center";
  x.style.color="rgb(121, 81, 21)";
  x.style.textDecoration="underLine";
  allProducts.appendChild(x.cloneNode(true));

  let y= document.createElement("a")
  y.textContent="+ Return to shop"
  y.href="index.html";
  y.setAttribute("id" , "ReturnToShop");
  allProducts.appendChild(y.cloneNode(true));
}
function drawProductsCart() {
    let product = JSON.parse(localStorage.getItem("ProductsInCart")) ;
    let y = product.map((item) => {
        return `
          <div class="product-item d-flex justify-content-between w-lg-75  text-center my-5 p-2 " style="border-bottom:1px solid white ;">
                    <div class="product2-item-img h-100 d-flex w-lg-75 ">
                          <img src="images/h1-img-12.webp" alt="photo" class="d-none d-lg-inline product-item-image">
                          <div class="w-100">
                             <span style="font-size:50px; color: rgb(85, 58, 18);">${item.price} <span style="font-size:40px;">$</span></span>
                             <p class="m-2" style="font-size:30px; color:rgb(114, 111, 111);"> ${item.title}</p>
                          </div>
                    </div>
                  <div class="w-lg-25">
                   <div class="product2-item-info text-light w-100">
                     <ul class="text-start " style="line-height:30px;">
                        <li>count : ${item.count}</li>
                         <li>product : ${item.price}</li>
                        <li>category : ${item.category}</li>
                     </ul>
                   </div>    
                    <div class="products2-item-action w-100 d-flex justify-content-between text-center" style=" ">  
                         <button id="inc-${item.id}" onClick="increment(${item.id})" class=" px-3" style="font-size: 20px; font-weight: 700; color:rgb(105, 72, 22); border:1px solid rgb(85, 58, 18);">+</button>
                         <button id="dec-${item.id}" onClick="decrement(${item.id})" class=" px-3 mx-2" style="font-size: 20px; font-weight: 700; color:rgb(105, 72, 22); border:1px solid rgb(85, 58, 18);">-</button>
                         <button class="remove-from-cart p-2" onClick="removeFromCart(${item.id})" style="border:1px solid white ; background-color:red; color:white; opacity:0.5;">remove</button>
                      </div> 
                    </div>
                </div>
        `
 
    })

    allProducts.innerHTML = y.join("");

}
drawProductsCart()



function removeFromCart(id){
    let ProductsInCart = localStorage.getItem("ProductsInCart");
    if(ProductsInCart){
        let items = JSON.parse(ProductsInCart);
        let filteredItems = items.filter( (item) => item.id !== id )
        localStorage.setItem("ProductsInCart",JSON.stringify(filteredItems));
        drawProductsCart(filteredItems);
        updateTotalPrice();

    }
} 
function increment(id) {
    let product = JSON.parse(localStorage.getItem("ProductsInCart")).find(item => item.id === id);
    product.count++;
    document.getElementById(`inc-${id}`).innerHTML = product.count;
    let updatedProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
    updatedProducts.find(item => item.id === id).count = product.count;
    localStorage.setItem("ProductsInCart", JSON.stringify(updatedProducts));
    drawProductsCart()
    updateTotalPrice();
  }
  
  function decrement(id) {
    let product = JSON.parse(localStorage.getItem("ProductsInCart")).find(item => item.id === id);
    if (product.count > 1) {
      product.count--;
      document.getElementById(`dec-${id}`).innerHTML = product.count;
      let updatedProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
      updatedProducts.find(item => item.id === id).count = product.count;
      localStorage.setItem("ProductsInCart", JSON.stringify(updatedProducts));
      drawProductsCart()
      updateTotalPrice();
    }else{
        removeFromCart(id)
    }
  }
//////////////////////////////////////////////////////////////////////////
let totalPrice = document.getElementById('total-price');

if (localStorage.getItem('totalPrice')) {
    totalPrice.innerHTML = `Total $${localStorage.getItem('totalPrice')}`;
}

function updateTotalPrice() {
    let total = 0;
    let products1 = JSON.parse(localStorage.getItem("ProductsInCart"));
    if (products1) {
      products1.forEach((item) => {
        total += item.price * item.count;
      });
    }
    localStorage.setItem("totalPrice", total);
    totalPrice.innerHTML = `Total $${total}`;
  }
/////////////////////////Start Fav//////////////////////////////////////////////////
let allProductFav = document.querySelector("#owl-demo")
function drawCartProduct2(){
    let product = JSON.parse(localStorage.getItem("ProductInFav")) ;
    let print = product.map((item) => {
        return `
            <div class="box p-2">
                    <div class="h-75 fav-img">
                        <img src="${item.imageUrl}" alt="photo" class="image">
                    </div>

                    <div class="d-flex position-relative">
                    <div class="info w-75">
                        <p>${item.title}</p>
                        <p>${item.category}</p>
                    </div>
                      <i onclick="removeToFav(${item.id})" class="fas fa-heart btnFav-box "></i>
                </div>
            </div>
        `
    })
    allProductFav.innerHTML = print.join("");
}
drawCartProduct2()

let allProductFav1 = document.querySelector("#owl-demo1")
function drawCartProduct22(){
    let product = JSON.parse(localStorage.getItem("ProductInFav")) ;
    let print = product.map((item) => {
        return `
            <div class="box p-2">
                    <div class="fav-img">
                      <img src="${item.imageUrl}" alt="photo" class="image">
                      <i onclick="removeToFav(${item.id})" class="fas fa-heart btnFav-box "></i>
                      <h1 class="title container text-center">${item.title}</h1>
            </div>
            </div>
        `
    })
    allProductFav1.innerHTML = print.join("");
}
drawCartProduct22()

function removeToFav(id){
    let ProductInFav = localStorage.getItem("ProductInFav");
    if(ProductInFav){
        let items2 = JSON.parse(ProductInFav);
        let filteredItems2 = items2.filter( (item) => item.id !== id )
        localStorage.setItem("ProductInFav",JSON.stringify(filteredItems2));
        drawCartProduct2();
        drawCartProduct22();
        location.reload();
    }
}

///////////////////////End Fav/////////////////////////////////////////////////