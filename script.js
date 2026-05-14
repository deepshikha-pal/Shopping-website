// AMAZON CLONE JAVASCRIPT

// Search Bar Functionality
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    if (searchInput.value.trim() === "") {
        alert("Please enter something to search!");
    } else {
        alert(`Searching for: ${searchInput.value}`);
    }
});

// Press Enter to Search
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (searchInput.value.trim() === "") {
            alert("Please enter something to search!");
        } else {
            alert(`Searching for: ${searchInput.value}`);
        }
    }
});

// Back to Top Button
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Box Hover Click Effect
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const title = box.querySelector("h2").innerText;
        alert(`Opening ${title} section`);
    });
});

// Cart Counter
let cartCount = 0;

const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {
    cartCount++;
    cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
});

// Dynamic Greeting According to Time
const signinText = document.querySelector(".nav-signin span");

const hour = new Date().getHours();

if (hour < 12) {
    signinText.innerText = "Good Morning";
} else if (hour < 18) {
    signinText.innerText = "Good Afternoon";
} else {
    signinText.innerText = "Good Evening";
}

// Today's Deals Highlight
const deals = document.querySelector(".panel-deals");

deals.addEventListener("mouseover", () => {
    deals.style.color = "#febd68";
});

deals.addEventListener("mouseout", () => {
    deals.style.color = "white";
});

// Hero Message Link
const heroLink = document.querySelector(".hero-msg a");

heroLink.addEventListener("click", () => {
    window.open("https://www.amazon.in", "_blank");
});