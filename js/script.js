let userInfo = document.querySelector(".user-info")
let userInfo1 = document.querySelector(".user-info1")
let logOut = document.querySelector(".user-info #log-out")
let email = document.querySelector("#email")

let links = document.querySelector("#links")

if (localStorage.getItem("email")) {
  links.remove()
  userInfo.style.display = "flex"
  userInfo1.style.display = "flex"
}

logOut.addEventListener("click", function () {
  localStorage.clear()
  setTimeout(() => {
    window.location.reload()
  }, 1000)
})

//  ////////////////////////////////////////////////////////////////

const slider = document.querySelector('.home2-slider');
const slides = document.querySelectorAll('.home2-slide');
const textOverlay = document.querySelector('.home2-text-info');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.add('active');
  slides[currentSlide].classList.add('zoom-in');
  setTimeout(() => {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.remove('zoom-in');
    slides[currentSlide].classList.add('zoom-out');

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('zoom-out');

    showSlide();
  }, 5000);
}

showSlide();
//////////////////////////////////////////////////////////////////
const searchType = document.getElementById('search-type');
const searchInput = document.getElementById('search-input');
const resultDiv = document.getElementById('result');

searchInput.addEventListener('change', () => {
  const searchValue = searchInput.value.trim();
  const searchTypeValue = searchType.value;

  if (searchValue === '') {
    return;
  }

  localStorage.setItem('searchValue', searchValue);
  localStorage.setItem('searchTypeValue', searchTypeValue);


  setTimeout(() => {
    window.location = "searchresult.html";
  })
}
)
// /////////////////////////////////////////////////////////////////////////
let shoppingCart = document.querySelector(".fa-caret-down")
let selectedProducts = document.querySelector(".selected-products")

shoppingCart.addEventListener("click", openCart)

function openCart() {
  shoppingCart.classList.toggle("rotated");

  if (selectedProducts.style.display == "block") {
    selectedProducts.style.display = "none"
  } else {
    selectedProducts.style.display = "block"
  }
}
// // ////////////////////////////////////////////////////////////////////// //
let allProducts = document.querySelector(".home4-products")
let products = [
  {
    id: 1,
    imageUrl: "images/aston.jpg",
    title: "Aston Martin DB11 AMR",
    price: 62,
    category: "2023"
  },
  {
    id: 2,
    imageUrl: "images/Bmw X2 M35i DriveX.jpg",
    title: "Bmw X2 M35i DriveX",
    price: 73,
    category: "2024"
  },
  {
    id: 3,
    imageUrl: "images/bmw.jpg",
    title: "BMW",
    price: 63,
    category: "2020"

  },
  {
    id: 4,
    imageUrl: "images/Ford Raptor 135 X.jpg",
    title: "Ford Raptor 135 X",
    price: 96,
    category: "2024",

  },
  {
    id: 5,
    imageUrl: "images/Mercedes G Class.jpg",
    title: "Mercedes G Class",
    price: 85,
    category: "2025"

  },
  {
    id: 6,
    imageUrl: "images/Highlander Hybrid.avif",
    title: "Highlander Hybrid",
    price: 61,
    category: "2024"


  },
  {
    id: 7,
    imageUrl: "images/Highlander.avif",
    title: "Highlander",
    price: 76,
    category: "2023"


  },
  {
    id: 8,
    imageUrl: "images/AMG G 63.jpeg",
    title: "AMG G 63",
    price: 111,
    category: "2025"


  },
  {
    id: 9,
    imageUrl: "images/car7.jpg",
    title: "2024 Equinox EV",
    price: 43,
    category: "2024"


  }
]

function drawItems() {
  let y = products.map((item) => {

    return `
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
                    <div class="product-buttons">
                        <button class="add_to_cart p-2" onClick="addToCart(${item.id})"> Add To Cart </button>
                        <button class="remove_from_cart p-2" onClick="removeFromCart(${item.id})"> Remove From Cart </button>
                   </div>
                       <i class="fas fa-heart mt-2" data-id="${item.id}" onClick="addToFav(${item.id})"></i>
                    </div>
                    </div>
                </div>
            </div>
             
      `

  })
  allProducts.innerHTML = y.join(" ");



}
drawItems()

// ////////////////////////////////////////////////////////////////////////////////////////////
let badge = document.querySelector(".cart-badge")
let box = document.querySelector(".selected-box")
let btnPSelect = document.querySelector("#btn-view-PSelect")
const btnAddToCart = document.getElementsByClassName("add_to_cart");
const btnRemoveFromCart = document.getElementsByClassName("remove_from_cart");


let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if (addedItem) {
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
function addToCart(id) {

  if (localStorage.getItem("email")) {
    let selectItem = products.find((item) => item.id === id)
    for (let i = 0; i < btnAddToCart.length; i++) {
      if (btnAddToCart[i].id === `${selectItem.id}`) {
        btnAddToCart[i].style.display = 'none';
        btnRemoveFromCart[i].style.display = 'block';
      }
    }
    for (let i = 0; i < btnAddToCart.length; i++) {
      if (btnAddToCart[i].getAttribute('onClick') === `addToCart(${id})`) {
        btnAddToCart[i].style.display = 'none';
        btnRemoveFromCart[i].style.display = 'block';

      }
    }
    if (addedItem.some(item => item.id === id)) {
      updateCartItem(id, 1);

    } else {
      selectItem.count = 1;
      addedItem = [...addedItem, selectItem];
      box.innerHTML += `
           <div id="item-${id}" class="d-flex justify-content-between div1" style="color:white; ">
            ${selectItem.title}
            <p id="count-${id}" class="d-inline-block mx-2 text-danger">${selectItem.count}</p>
            <div>
            <a href="#" onClick="updateCartItem(${id}, 1)" class="mx-1" style="font-size: 20px; font-weight: 700; color:white;">+</a>
            <a href="#" onClick="updateCartItem(${id}, -1)" class="" style="font-size: 20px; font-weight: 700; color:white;">-</a>
            </div>
        </div>
    `;
    }

    localStorage.setItem("ProductsInCart", JSON.stringify([...addedItem]));
    updateCartCount();
    updateTotalPrice();
  } else {
    setTimeout(() => {
      window.location = "register.html";
    }, 1000);
  }

}

function updateCartItem(id, change) {
  let item = addedItem.find(item => item.id === id);
  item.count = item.count + change;
  if (item.count <= 0) {
    removeFromCart(id);
  } else {
    document.getElementById(`count-${id}`).innerText = item.count;
  }
  localStorage.setItem("ProductsInCart", JSON.stringify([...addedItem]));
  updateCartCount();
  updateTotalPrice();
}

function removeFromCart(id) {
  for (let i = 0; i < btnRemoveFromCart.length; i++) {
    if (btnRemoveFromCart[i].getAttribute('onClick') === `removeFromCart(${id})`) {
      btnAddToCart[i].style.display = 'block';
      btnRemoveFromCart[i].style.display = 'none';

    }
  }
  addedItem = addedItem.filter(item => item.id !== id);
  localStorage.setItem("ProductsInCart", JSON.stringify([...addedItem]));
  document.getElementById(`item-${id}`).remove();
  updateCartCount();
  updateTotalPrice();
}

function updateCartCount() {
  let productsLength = document.querySelectorAll(".selected-box .div1").length;
  badge.style.display = productsLength > 0 ? "block" : "none";
  badge.innerHTML = productsLength;

}

function updateTotalPrice() {
  let total = 0;
  addedItem.forEach(item => {
    let count = document.getElementById(`count-${item.id}`).innerText;
    total += item.price * count;
  });
  localStorage.setItem("totalPrice", total);
}
/////////////////////////////////////////////////////////////////////////
let favBtn = document.getElementsByClassName("fa-heart");
let addedItemFav = localStorage.getItem("ProductInFav") ? JSON.parse(localStorage.getItem("ProductInFav")) : [];
function addToFav(id) {
  if (localStorage.getItem("email")) {
    let chooseItem = products.find((item) => item.id === id);
    products.forEach(item => {
      if (item.id === chooseItem.id) {
        addedItemFav = [...addedItemFav, chooseItem];
        localStorage.setItem("ProductInFav", JSON.stringify([...addedItemFav]));
        changeFavColor(id);

      }
    })
  }
  else {
    window.location = "register.html"
  }
}

function changeFavColor(id) {
  let favBtn = document.querySelector(`.fa-heart[data-id="${id}"]`);
  if (favBtn.style.color === "red") {
    favBtn.style.color = "white";
    addedItemFav = addedItemFav.filter(item => item.id !== id);
    localStorage.setItem("ProductInFav", JSON.stringify([...addedItemFav]));
    document.getElementById(`item-${id}`).remove();
  } else {
    favBtn.style.color = "red";
  }
}
//////////////////////////////////////////////////////////