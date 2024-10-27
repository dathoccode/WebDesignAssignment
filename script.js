//--------------------------------------SLIDER----------------------------
const btnLeft = document.querySelector('.fa-chevron-left');
const btnRight = document.querySelector('.fa-chevron-right');
const hotSaleProducts = document.querySelectorAll('.hot-sale-product-container');


let index = 0;
const PRODUCTS_VISIBLE = 5;
const SLIDE_PERCENTAGE = 20; // Each product takes 20% of the container

// Initialize product positions
hotSaleProducts.forEach((item, idx) => {
    item.style.left = `${SLIDE_PERCENTAGE * idx}%`;
});

// Adjust button visibility based on index
function updateButtonVisibility() {
    btnLeft.style.display = index <= 0 ? "none" : "block";
    btnRight.style.display = index >= hotSaleProducts.length - PRODUCTS_VISIBLE ? "none" : "block";
}

function smoothSlide(direction) {
    index += direction;

    if (index < 0) index = 0;
    else if (index > hotSaleProducts.length - PRODUCTS_VISIBLE) index = hotSaleProducts.length - PRODUCTS_VISIBLE;

    hotSaleProducts.forEach((item, idx) => {
        item.style.left = `${(idx - index) * SLIDE_PERCENTAGE}%`;
    });

    updateButtonVisibility();
}

btnLeft.addEventListener("click", () => smoothSlide(-1));
btnRight.addEventListener("click", () => smoothSlide(1));

// Auto-slide function
function hotSaleAuto() {
    if (index < hotSaleProducts.length - PRODUCTS_VISIBLE) {
        smoothSlide(1);
    } else {
        index = 0; // Reset to first set of products
        updateProductPositions();
    }
}

setInterval(hotSaleAuto, 5000);

// Initialize button visibility
updateButtonVisibility();

//storage product infor When a product container clicked
const showInforBtn = document.querySelectorAll('.product-infor, .product-card')
showInforBtn.forEach(item => {
    item.addEventListener("click", function(){
        storageData(item)
    })
})

function storageData(item){
    const productData = { name: item.querySelector('.product-name').textContent, 
        price: item.querySelector('.product-price, .hot-sale-product-new-price').textContent,
        imgSrc: item.querySelector("img").src};
    sessionStorage.setItem('productData', JSON.stringify(productData));
    console.log(JSON.parse(sessionStorage.getItem('productData')))
}

//-----------------------------------product scripts-------------------------------------------



