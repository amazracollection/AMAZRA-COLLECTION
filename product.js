// ==================================
// AMAZRA PRODUCT SYSTEM
// ==================================


// PRODUCTS

const products = {

    classic: {

        name: "The Classic",

        category: "SIGNATURE SERIES",

        price: 24999,

        image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85"

    },


    royal: {

        name: "The Royal",

        category: "ROYAL SERIES",

        price: 32999,

        image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85"

    },


    noir: {

        name: "The Noir",

        category: "NOIR SERIES",

        price: 28999,

        image:
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=85"

    }

};


// GET PRODUCT FROM URL

const urlParams = new URLSearchParams(
    window.location.search
);

const productId =
    urlParams.get("product") || "classic";

const product =
    products[productId] || products.classic;


// ELEMENTS

const productImage =
    document.getElementById("productImage");

const productName =
    document.getElementById("productName");

const productCategory =
    document.getElementById("productCategory");

const productPrice =
    document.getElementById("productPrice");

const summaryImage =
    document.getElementById("summaryImage");

const summaryName =
    document.getElementById("summaryName");

const summaryCategory =
    document.getElementById("summaryCategory");

const summaryQuantity =
    document.getElementById("summaryQuantity");

const subtotal =
    document.getElementById("subtotal");

const total =
    document.getElementById("total");

const quantityElement =
    document.getElementById("quantity");


// FORMAT PRICE

function formatPrice(price) {

    return "PKR " + price.toLocaleString("en-PK");

}


// LOAD PRODUCT

productImage.src = product.image;

productImage.alt = product.name;

productName.textContent = product.name;

productCategory.textContent =
    product.category;

productPrice.textContent =
    formatPrice(product.price);


// SUMMARY

summaryImage.src = product.image;

summaryName.textContent =
    product.name;

summaryCategory.textContent =
    product.category;


// QUANTITY

let quantity = 1;


function updateQuantity() {

    quantityElement.textContent =
        quantity;

    summaryQuantity.textContent =
        quantity;

    const totalPrice =
        product.price * quantity;

    subtotal.textContent =
        formatPrice(totalPrice);

    total.textContent =
        formatPrice(totalPrice);

}


document
    .getElementById("plusBtn")
    .addEventListener("click", () => {

        if (quantity < 10) {

            quantity++;

            updateQuantity();

        }

    });


document
    .getElementById("minusBtn")
    .addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            updateQuantity();

        }

    });


// ORDER BUTTON

document
    .getElementById("orderBtn")
    .addEventListener("click", () => {

        const orderSection =
            document.getElementById("orderSection");

        orderSection.scrollIntoView({
            behavior: "smooth"
        });

    });


// ORDER FORM

const orderForm =
    document.getElementById("orderForm");


orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // CUSTOMER DATA

        const customerName =
            document
                .getElementById("customerName")
                .value
                .trim();

        const customerPhone =
            document
                .getElementById("customerPhone")
                .value
                .trim();

        const customerAddress =
            document
                .getElementById("customerAddress")
                .value
                .trim();

        const customerCity =
            document
                .getElementById("customerCity")
                .value
                .trim();


        // BASIC VALIDATION

        if (
            !customerName ||
            !customerPhone ||
            !customerAddress ||
            !customerCity
        ) {

            alert(
                "Please fill in all required fields."
            );

            return;

        }


        // PAYMENT

        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        // ORDER ID

        const orderId =
            "AMZ-" +
            Math.floor(
                100000 +
                Math.random() * 900000
            );


        document
            .getElementById("orderNumber")
            .textContent = orderId;


        // HIDE ORDER SECTION

        document
            .getElementById("orderSection")
            .style.display = "none";


        // HIDE PRODUCT

        document
            .querySelector(".product-detail")
            .style.display = "none";


        // SHOW SUCCESS

        const successSection =
            document.getElementById(
                "successSection"
            );

        successSection.classList.add("show");


        // SCROLL

        successSection.scrollIntoView({
            behavior: "smooth"
        });


        // CONSOLE FOR TESTING

        console.log("AMAZRA ORDER");

        console.log({
            orderId: orderId,
            product: product.name,
            quantity: quantity,
            total: product.price * quantity,
            customerName: customerName,
            phone: customerPhone,
            address: customerAddress,
            city: customerCity,
            payment: payment
        });

    }
);


// INITIAL UPDATE

updateQuantity();
