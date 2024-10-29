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

//------------------------------------count-down-timer-----------------------------------
function countDownTimer(){
    // Đặt thời gian đếm ngược (ví dụ: 1 giờ, 30 phút, 0 giây)
    let countdownTime = 1 * 60 * 60 + 30 * 60; // 1 giờ và 30 phút
    // Hàm cập nhật đồng hồ đếm ngược
    function updateCountdown() {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;
        // Cập nhật nội dung của các thẻ
        document.querySelector('.count-down-timer .hour').textContent = String(hours).padStart(2, '0');
        document.querySelector('.count-down-timer .min').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.count-down-timer .sec').textContent = String(seconds).padStart(2, '0');
        // Giảm thời gian đếm ngược
        if (countdownTime > 0) {
        countdownTime--;
        } else {
        clearInterval(countdownInterval); // Dừng đồng hồ khi đếm ngược đến 0
        }
    }
    // Cập nhật đồng hồ mỗi giây
    const countdownInterval = setInterval(updateCountdown, 1000);
    // Gọi hàm ngay lập tức để hiển thị thời gian ban đầu
    updateCountdown();
}
countDownTimer()

// Initialize button visibility
updateButtonVisibility();

console.log(localStorage)
const cartArr = []
if(localStorage.getItem("cartArr") === null){
    localStorage.setItem("cartArr", JSON.stringify(cartArr))
}