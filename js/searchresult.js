let searchProducts  =document.querySelector(".search-products ")
let searchValue = localStorage.getItem('searchValue');
let searchTypeValue = localStorage.getItem('searchTypeValue');
let user = document.querySelector(".user-name");
user.innerHTML=localStorage.getItem ("userName");

let products = [
  {
     id:1,
     imageUrl : "images/aston-in.jpg",
     title: "Aston Martin DB11 AMR",
     price : 62,
     category :"2023"
     
 },
   {
     id:2,
     imageUrl : "images/bmw-in.jpg",
     title: "Bmw X2 M35i DriveX",
     price : 73,
     category :"2024"
     
 },
   {
     id:3,
     imageUrl : "images/bmw-in.jpg",
     title: "BMW",
     price : 63,
     category :"2020"
     
 },
   {
       id:4,
       imageUrl : "images/ford-in.jpg",
       title: "Ford Raptor 135 X",
       price : 96,
       category :"2024"
       
   },
   {
     id:5,
     imageUrl : "images/inn.jpg",
     title: "Mercedes G Class",
     price : 85,
     category :"2025"
     
 },
 {
  id:6,
  imageUrl : "images/Highlander Hybrid-IN.avif",
  title: "Highlander Hybrid",
  price : 61,
  category :"2024"
  
},
{
  id:7,
  imageUrl : "images/Highlander-IN2.avif",
  title: "Highlander",
  price : 76,
  category :"2023"
  
},
{
  id:8,
  imageUrl : "images/AMG G 63-IN.jpeg",
  title: "AMG G 63",
  price : 111,
  category :"2025"
  
},
{
  id:9,
  imageUrl : "images/lam1-in.jpg",
  title: "2024 Equinox EV",
  price : 43,
  category :"2024"
  
}
]

let result = '';


if (searchTypeValue === 'category') {
    result = products.filter(item => item.category === searchValue).map(item => `  
            <div class="home4-product-item  text-center">
                <div class="home4-product-item-info w-100 h-100">
                    <img src="${item.imageUrl}" alt="photo" class="w-100 h-100 ">
                    <div class="home4-item-overlay">
                        <div class="home4-item">
                            <ul>
                                <li>name : ${item.title}</li>
                                <li>price : ${item.price} $</li>
                                <li>category: ${item.category}</li>
                            </ul>
                        </div>
                    
                    <div class="product-item-actions d-flex justify-content-between w-75">
                        <button class="add_to_cart p-2" onClick="addToCart(${item.id})"> Add To Cart </button>
                        
                     <i class="fas fa-heart mt-2" onClick="addToFav(${item.id})"></i>

                    </div>
                    </div>
                </div>
            </div>`).join('');
} else if (searchTypeValue === 'title') {
    result = products.filter(item => item.title.includes(searchValue)).map(item => `    <div class="product-item ">
                 <div class="home4-product-item  text-center">
                <div class="home4-product-item-info w-100 h-100">
                    <img src="${item.imageUrl}" alt="photo" class="w-100 h-100 ">
                    <div class="home4-item-overlay">
                        <div class="home4-item">
                            <ul>
                                <li>name : ${item.title}</li>
                                <li>price : ${item.price} $</li>
                                <li>category: ${item.category}</li>
                            </ul>
                        </div>
                    
                    <div class="product-item-actions d-flex justify-content-between w-75">
                        <button class="add_to_cart p-2" onClick="addToCart(${item.id})"> Add To Cart </button>
                        
                     <i class="fas fa-heart mt-2" onClick="addToFav(${item.id})"></i>

                    </div>
                    </div>
                </div>
            </div>`).join('');


}

if (result === '') {
    let x = document.createElement("h1")
    x.textContent = "Your shopping cart is empty.";
    x.style.textAlign = "center";
    x.style.color = "rgb(121, 81, 21)";
    x.style.textDecoration = "underline";
    searchProducts.appendChild(x);

    let y= document.createElement("a")
    y.textContent="+ Return to shop"
    y.href="index.html";
    y.setAttribute("id" , "ReturnToShop2");

    searchProducts.appendChild(y);
} else {
    searchProducts.innerHTML = result;
}
