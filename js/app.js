const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 9999,
        colors: [
            {
                code: "black",
                img: "assets/air.png"
            },
            {
                code: "darkblue",
                img: "assets/air2.png"
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 19999,
        colors: [
            {
                code: "lightgray",
                img: "assets/jordan.png",
            },
            {
                code: "green",
                img: "assets/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 12999,
        colors: [
            {
                code: "lightgray",
                img: "assets/blazer.png",
            },
            {
                code: "green",
                img: "assets/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 8999,
        colors: [
            {
                code: "black",
                img: "assets/crater.png",
            },
            {
                code: "lightgray",
                img: "assets/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 15999,
        colors: [
            {
                code: "gray",
                img: "assets/hippie.png",
            },
            {
                code: "black",
                img: "assets/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        choosenProduct = products[index];

        // change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});