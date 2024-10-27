//--------------------------------------SLIDER----------------------------
const btnLeft = document.querySelector('.fa-chevron-left')
const btnRight = document.querySelector('.fa-chevron-right')
const hotSaleItems = document.querySelector('.hot-sale-items')
const containerWidth = parseFloat(window.getComputedStyle(hotSaleItems).width)
const hotSaleProduct = document.querySelectorAll('.hot-sale-product-container')

let index = 0
hotSaleProduct.forEach(items =>{
    items.style.left = 20 * index + "%" 
    index++
})
index = 0
btnLeft.addEventListener("click", function(){
    if(index <= 0) 
    {
        btnLeft.style.display = "none"
        return
    }

    hotSaleProduct.forEach(items => {
        const curLeft = parseFloat(window.getComputedStyle(items).left)
        const newLeft = curLeft + 0.2 *  containerWidth 
        items.style.left = newLeft + "px"
    })
    index--
})
btnRight.addEventListener("click", function(){
    if(index > hotSaleProduct.length - 6)
    {
        btnRight.style.display = "none"
        return
    }
    hotSaleProduct.forEach(items => {
        const curLeft = parseFloat(window.getComputedStyle(items).left)
        const newLeft = curLeft - 0.2 *  containerWidth
        items.style.left = newLeft + "px"
    })
    index++
})
function hotSaleAuto()
{
    if(index > hotSaleProduct.length - 6 || index < 0)
    {
        index = 0
        hotSaleProduct.forEach(items =>{
            items.style.left = 20 * index + "%"
            index++
        })
        index = 0
    }
    else
    {
        hotSaleProduct.forEach(items => {
            const curLeft = parseFloat(window.getComputedStyle(items).left)
            const newLeft = curLeft - 0.2 *  containerWidth + 0.1
            items.style.left = newLeft + "px"
        })
        index++
    }
    btnLeft.style.display = "block"
    btnRight.style.display = "block"
}

setInterval(hotSaleAuto, 5000)

// ---------------------Reload-----------------------------------
const brandLogo = document.querySelector(".brand-logo")
brandLogo.addEventListener("click", function(){
    location.reload()
})