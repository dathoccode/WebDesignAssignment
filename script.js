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
    if(index <= 0) return
    hotSaleProduct.forEach(items => {
        const curLeft = parseFloat(window.getComputedStyle(items).left)
        const newLeft = curLeft + 0.2 *  containerWidth + 0.1
        items.style.left = newLeft + "px"
        console.log(curLeft + " " + newLeft)
    })
    index--
})
btnRight.addEventListener("click", function(){
    if(index > hotSaleProduct.length - 6) return
    hotSaleProduct.forEach(items => {
        const curLeft = parseFloat(window.getComputedStyle(items).left)
        const newLeft = curLeft - 0.2 *  containerWidth + 0.1
        items.style.left = newLeft + "px"
    })
    index++
})
function hotSaleAuto()
{
    console.log(index)
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
}

setInterval(hotSaleAuto, 5000)