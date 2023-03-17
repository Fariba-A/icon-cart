let basketItem = document.querySelectorAll(".body-basket-items");
let headBasketItem = document.querySelector(".heade-basket-items");
let coursePrice = document.querySelectorAll(".coursePrice");
let modalSuccess = document.querySelector(".modalSuccess");
let iconModalSuccess=document.querySelector(".modalSuccess g");
let shoppingCart = document.querySelector(".shoppingCart");
let emptyShoppingCart = document.querySelector(".emptyShoppingCart");
let removedPrice = [];

basketItem.forEach(function (item) {

    item.querySelector(".body-basket-items");

    item.querySelector(".delete").addEventListener("click", function (e) {

        e.preventDefault();
        // --start/modal success

        modalSuccess.classList.add("show");
        iconModalSuccess.classList.add("active");
        setTimeout(() => {
            iconModalSuccess.classList.remove("active");
            modalSuccess.classList.remove("show");
        }, 1000);

        // --end/modal success

        let coursePrice = parseInt(item.querySelector(".coursePrice").innerText);
        let mainPrice = parseInt(document.getElementById("mainPrice").innerText);
        let totalPrice = parseInt(document.getElementById("totalPrice").innerText);

        document.getElementById("totalPrice").innerText = totalPrice - coursePrice;
        document.getElementById("mainPrice").innerText = mainPrice - coursePrice;

        if (mainPrice - coursePrice < 1) {
            document.getElementById("mainPrice").innerText = "0";
        }

        item.remove();
        function isCartEmpty() {
          
     
         
            return document.querySelectorAll(".body-basket-items").length===0
        }

        //100/100

        if (isCartEmpty()) {

            shoppingCart.style.display = "none";


            setTimeout(() => {
                emptyShoppingCart.style.display = "block";

            }, 1000);


        }
        
        else {

            shoppingCart.style.display = "grid";
            emptyShoppingCart.style.display = "none";
        }
    })




})



