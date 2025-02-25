// wrapper sliders
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// product arrays
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./image/air.png",
        },
        {
          code: "darkblue",
          img: "./image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./image/jordan.png",
        },
        {
          code: "green",
          img: "./image/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./image/blazer.png",
        },
        {
          code: "green",
          img: "./image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./image/crater.png",
        },
        {
          code: "lightgray",
          img: "./image/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./image/hipie.png",
        },
        {
          code: "black",
          img: "./image/hippie2.png",
        },
      ],
    },
];

// Declaration of production items-descrption
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach ((item, index) => {
    item.addEventListener("click", ()=>{
        // sliderwrapper
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Changing product descprtion
        choosenProduct = products[index];

        // changing product details
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Assigning new color to the products
        currentProductColors.forEach((color,index) => {
            color.style.background = choosenProduct.color[index].code;
        });
    });
});


// changing color of the shoes order
currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

// chosing product sizes
currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size,index) => {
            size.style.background = "white";
            size.style.color = "black"
        });
        size.style.background = "black";
        size.style.color = "white"
    });
});


const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
})

close.addEventListener("click", () => {
  payment.style.display = "none";
})
