//set product information
        //------------------------------PRODUCT TO CART--------------------------
        function updatePrice(item){
            const tmp = item.querySelector('#version-price').textContent
            const colorPrice = document.querySelectorAll('#color-price')
            for(let i = 0; i < colorPrice.length; i++){
              colorPrice[i].textContent = tmp
            }
          }
          function showImage(item){
            document.querySelector('[alt = "Tên sản phẩm"]').src = item.querySelector("img").src
          }
          let cart;
          function addToCart(){
            //goi bien cartArr de luu san pham
            const itemName = document.querySelector('.product-title').textContent
            const itemPrice = document.querySelector('#color-price').textContent
            const itemImage = document.querySelector('[alt="Tên sản phẩm"]').src
            cart = JSON.parse(localStorage.getItem("cartArr"))
            
            let flag = false
            //if the product is already in cart increase quantity
            for(let i =  0; i < cart.length; i++){
              if(cart[i].sp.name == itemName){
                cart[i].qty++;
                flag = true
            }}
            
            //if there  is no same product in cart -> add it
  
            if(!flag){
              item = {name:  itemName, price: itemPrice, image: itemImage}
              cartItem = {qty : 1, sp: item}
              cart.push(cartItem)
            }
            localStorage.setItem("cartArr", JSON.stringify(cart))
            window.location.href = "../cart.html"
  
          }