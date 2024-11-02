//----------------------------------NAVIGATION BAR----------------------------

//------------ORDER CALL
function orderCall(){
    var order = document.getElementById("orderCall");
    order.addEventListener("click", function(){
        alert("Goị điện tới số: 0847294503 để được tư vấn và đặt hàng")
    })
}



//-------------SEARCH
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let query = this.value.trim().toLowerCase();
        const keyWord = {
            "products/oppoa3.html": ["oppo a3", "oppo a3 5g", "oppo a3 pro"],
            "products/oppoa18.html": ["oppo a18", "oppo a18 5g"],
            "products/samsunggalaxya35.html": ["samsung galaxy a35", "samsung a35", "a35", "35"],
            "products/xiaomi14ultra.html": ["xiaomi 14 ultra", "xiaomi ultra"],
            "products/oppofindx5pro.html": ["oppo find x5 pro", "find x5 pro"],
            "products/xiaomipocox6pro.html": ["xiaomi poco x6 pro", "poco x6 pro"],
            "products/samsungzfold.html": ["samsung zfold", "fold", "zfold"],
            "products/samsungzflip6.html": ["samsung zflip 6", "zflip 6"],
            "products/xiaomiredminote13.html": ["xiaomi redmi note 13", "redmi note 13"],
            "products/oppoa79.html":  ["oppo a79 5g", "a79", "79"],
            "products/opporeno125g.html":  ["oppo reno 12 5g", "reno 12", "reno"],
            "products/samsunggalaxys23ultra.html": ["samsung galaxy s23 ultra", "s23 ultra", "s23"],
            "products/samsunggalaxys24ultra.html": ["samsung galaxy s24 ultra", "s24 ultra", "s24"],
            "products/xiaomiredmi14c.html": ["14c", "redmi 14", "14", "xiaomi redmi 14"],
            "products/xiaomiredmi11.html": ["redmi11", "xiaomi redmi 11", "11"]
        }
        let flag = false
    console.log(query)
    for (const [productLink, keywords] of Object.entries(keyWord)) {
        if (keywords.includes(query)) {
            console.log(productLink) 
            window.location.href = productLink;
            flag = true
        }
    }
    if(!flag){
        alert("Không tìm thấy sản phẩm phù hợp.");
    }
  }
});

function truncateText(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }
    return text;
}

//-------------LOG IN/LOG OUT HANDLING
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    // Thay đổi nội dung của nút đăng nhập thành tên người dùng
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        // Ẩn nút đăng nhập
        loginButton.style.display = 'none';

        // Tạo phần tử hiển thị lời chào
        const welcomeMessage = document.createElement('span');
        welcomeMessage.innerHTML = `Xin chào ${truncateText(loggedInUser.fullname, 5)}`;
        welcomeMessage.style.marginRight = '10px';
        welcomeMessage.style.color = 'Black'
        welcomeMessage.style.overflow = "ellipsis"
        welcomeMessage.style.backgroundColor = "transparent"
        loginButton.parentNode.appendChild(welcomeMessage);

        // Tạo nút đăng xuất và thêm vào
        const logoutButton = document.createElement('button');
        logoutButton.innerText = 'Đăng xuất';
        logoutButton.classList.add('btn-logout'); // Thêm lớp CSS nếu cần
        logoutButton.onclick = function() {
            localStorage.removeItem('loggedInUser'); // Xóa thông tin đăng nhập
            window.location.reload(); // Tải lại trang
        };
        loginButton.parentNode.appendChild(logoutButton);
    }
  }

function closePopup(){
    document.getElementsByClassName('popup-advertisement')[0].style.display = "none"

}


// ---------------Danh mục---------------
function toggleMenu() {
    const menu = document.getElementById('brandMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  
    function filterPhones(brand) {
        const allProducts = document.querySelectorAll('.featured-grid a');
    
        allProducts.forEach(product => {
        if (brand === 'all') {
            product.style.display = 'block'; // Hiển thị tất cả sản phẩm khi chọn "Tất cả"
        } else {
            product.style.display = product.classList.contains(brand) ? 'block' : 'none'; // Chỉ hiển thị sản phẩm của hãng được chọn
        }
        });
    }


//---------------------------------------Hot sale product generator---------------------------------------
//enter product data
let hotSaleData = [
    {id: "oppoa3", name: "Oppo A3", price: 2990000, percent: 19},
    {id: "oppoa79", name: "Oppo A79", price: 4999000, percent: 20},
    {id: "opporeno125g", name: "Oppo A3", price: 3200000, percent: 19},
    {id: "samsunggalaxya35", name: "Oppo A3", price: 21230000, percent: 19},
    {id: "xiaomiredminote13", name: "Oppo A3", price: 4230000, percent: 19},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, percent: 19},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, percent: 19},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, percent: 19},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, percent: 19},
]
let hotSaleItems = document.getElementsByClassName('hot-sale-items')[0]
let hotSaleProductStr = ''
hotSaleData.forEach((item, index) => {
    hotSaleProductStr += `<div class="hot-sale-product-container">
              <a href="products/${item.id}.html">
                <div class="product-infor">
                  <div class="hot-sale-tag">${item.percent}%</div>
                  <img src="./image/${item.id}/${item.id}main.png" alt="" />
                  <li class="product-name">${item.name}</li>
                  <li>
                    <span class="hot-sale-product-new-price">${formatPrice(item.price)}</span>
                    <span class="hot-sale-product-old-price">${formatPrice(roundToThousand(item.price * 100 / (100 - item.percent)))}</span>

                  </li>
                  <li>
                    <span>Đánh giá</span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </div>
              </a>
            </div>`
})
hotSaleItems.innerHTML = hotSaleProductStr

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Định dạng số thành xxx.xxx
}
function roundToThousand(num) {
    return Math.round(num / 10000) * 10000;
}

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
    }
}

setInterval(hotSaleAuto, 5000);

//---------------------------count-down-timer---------------------------
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

const cartArr = []
if(localStorage.getItem("cartArr") == []){
    localStorage.setItem("cartArr", JSON.stringify(cartArr))
}

//--------------------------FETURED PRODUCTS GENERATOR------------------------
let featuredItems = document.getElementsByClassName('featured-grid')[0]
let featuredProductStr = ''
let productData = [
    {id: "oppoa3", name: "Oppo A3", price: 2990000, brand: "oppoPhones"},
    {id: "oppoa79", name: "Oppo A79", price: 4999000, brand: "oppoPhones"},
    {id: "opporeno125g", name: "Oppo A3", price: 3200000, brand: "oppoPhones"},
    {id: "samsunggalaxya35", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredminote13", name: "Oppo A3", price: 4230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "oppoa3", name: "Oppo A3", price: 2990000, brand: "oppoPhones"},
    {id: "oppoa79", name: "Oppo A79", price: 4999000, brand: "oppoPhones"},
    {id: "opporeno125g", name: "Oppo A3", price: 3200000, brand: "oppoPhones"},
    {id: "samsunggalaxya35", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredminote13", name: "Oppo A3", price: 4230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},{id: "oppoa3", name: "Oppo A3", price: 2990000, brand: "oppoPhones"},
    {id: "oppoa79", name: "Oppo A79", price: 4999000, brand: "oppoPhones"},
    {id: "opporeno125g", name: "Oppo A3", price: 3200000, brand: "oppoPhones"},
    {id: "samsunggalaxya35", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredminote13", name: "Oppo A3", price: 4230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},{id: "oppoa3", name: "Oppo A3", price: 2990000, brand: "oppoPhones"},
    {id: "oppoa79", name: "Oppo A79", price: 4999000, brand: "oppoPhones"},
    {id: "opporeno125g", name: "Oppo A3", price: 3200000, brand: "oppoPhones"},
    {id: "samsunggalaxya35", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredminote13", name: "Oppo A3", price: 4230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
    {id: "xiaomiredmi14c", name: "Oppo A3", price: 21230000, brand: "oppoPhones"},
]
productData.forEach((item) => {
    featuredProductStr += `
        <a href="products/${item.id}.html" class="oppoPhones">
          <div class="product-card">
            <img src="./image/${item.id}/${item.id}main.png" alt="Tên sản phẩm" />
            <p class="product-name">${item.name}</p>
            <p class="product-price">${formatPrice(item.price)}</p>
            <li class="product-rating">
              <span>Đánh giá</span>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </li>
          </div>
        </a>`
})
featuredItems.innerHTML = featuredProductStr
