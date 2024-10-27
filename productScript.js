//------------------------------PRODUCT TO CART--------------------------
const buyNowBtn = document.querySelector('.buy-now')
const productInfor = document.querySelector('.product-container')
const productName = productInfor.querySelector('.product-title').textContent
const productImage = productInfor.querySelector('[alt="Tên sản phẩm"')
const productThumbnails = productInfor.querySelectorAll('[alt^="Thumbnail"')
const productPrice = productInfor.querySelector('.hidden-product-price').textContent
console.log(productPrice)

