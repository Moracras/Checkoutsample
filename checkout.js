//***********************************/
//*        CHECKOUT APP
//***********************************/

const deleteProducts = document.querySelector(".delete-div .fa-thrash-can")
const products = document.querySelector(".products")



// DELETE PRODUCTS BUTTON EVENT

deleteProducts.addEventListener("clcik", (e) => {
    if(confirm("Are you sure you want to delete this?")){
        products.textContent ="No product"
        products.classList.add("no-product")
        // document.querySelector(".delete-div").computedStyleMap.display = "none" // 1
        e.target.parentElement.style.display = "none" //aynı özellik 2
    }
})