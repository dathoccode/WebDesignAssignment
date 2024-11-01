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
          function addToCart(item){
            if(!document.querySelector('input[name="version"]:checked') || !document.querySelector('input[name="color"]:checked')){
              alert("Hãy chọn màu và phiên bản!")
            }
            const itemVersion = document.querySelector(`label[for="${document.querySelector('input[name="version"]:checked').id}"]`).querySelector('#version-name').textContent;
            const itemName = document.querySelector('.product-title').textContent
            const itemPrice = document.querySelector('#color-price').textContent
            const itemImage = '.' + '/image' + document.querySelector('[alt="Tên sản phẩm"]').src.split('/image')[1];
            const itemColor = document.querySelector(`label[for="${document.querySelector('input[name="color"]:checked').id}"]`).querySelector('#color-name').textContent;
            


            cart = JSON.parse(localStorage.getItem("cartArr")) || []
            
            let flag = false
            //if the product is already in cart increase quantity
            for(let i =  0; i < cart.length; i++){
              if(cart[i].sp.name == itemName &&  cart[i].sp.color == itemColor && cart[i].sp.version == itemVersion){
                cart[i].qty++;
                flag = true
            }}
            
            //if there  is no same product in cart -> add it
            if(!flag){
              item = {name:  itemName, price: itemPrice, image: itemImage, version: itemVersion, color:  itemColor}
              cartItem = {qty : 1, sp: item}
              cart.push(cartItem)
            }
            localStorage.setItem("cartArr", JSON.stringify(cart))
            window.location.href = "../cart.html"
  
          }