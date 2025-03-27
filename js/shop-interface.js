'use.strict';
const chossedGood = document.querySelector('.info');
const categoriesProducts = document.querySelector('.categories');
//console.log(categoriesProducts)
const productInfo = document.querySelector('.products');
//console.log(productInfo);
const btn = document.getElementById('btn');
//console.log(btn)
const btnBuy = document.querySelector('.btnBuy');
const message = document.querySelector('.order-info');
let productInfoDisplayed = false; // Флаг для отслеживания состояния

function showCategories() {
    const parent = document.querySelector('.categories > div');
   // console.log(categories)
    //console.log(parent)
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category.name;
        categoryElement.setAttribute('data-category-id', category.id);
        categoryElement.classList.add('category-item');

        parent.appendChild(categoryElement);

    });
}

function showProducts(products, categoryId) {
    //console.log(products)
    //console.log(categoryId)
    const parent = document.querySelector('.products > div');
    //console.log(parent);
    parent.innerHTML = '';
    parent.setAttribute('data-category-id', categoryId);
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.textContent = product.name;
        productEl.setAttribute('data-products-id', product.id);
       
        productEl.classList.add('product-item');

        parent.appendChild(productEl);

    });
};

function showInfoAboutProduct(selectProduct) {
    const parent = document.querySelector('.info > div');
    parent.innerHTML = '';
    
    const infoAboutEl = document.createElement('div');
    //console.log(selectProduct.name, selectProduct.price)
    infoAboutEl.textContent = selectProduct.name +' '+selectProduct.price;
    parent.setAttribute('data-selectProduct', infoAboutEl.innerText);
   parent.appendChild(infoAboutEl);

   productInfoDisplayed = true; // Устанавливаем флаг в true
};


document.addEventListener('DOMContentLoaded', showCategories);

categoriesProducts.addEventListener('click', event => {
    if (!event.target.classList.contains('category-item')){
        return;
    }
    const categoryId = event.target.getAttribute('data-category-id');
    //console.log(categoryId)
    const selectCCategory = categories.find(category => category.id == categoryId);
    //console.log(selectCCategory)
    if (!selectCCategory){
        return;
    }
    //console.log(selectCCategory.products)
    showProducts(selectCCategory.products, categoryId);

    productInfo.addEventListener('click', event => {
        if (!event.target.classList.contains('product-item')) {
            return;
        }
        const productId = event.target.getAttribute('data-products-id');
       
        const selectProduct = selectCCategory.products.find((product => product.id == productId));
        //console.log(selectProduct);

        showInfoAboutProduct(selectProduct);
    });
});



btn.addEventListener('click', () => {
   
    if (productInfoDisplayed) { // Проверяем, сработала ли showInfoAboutProduct
        message.style.display = 'block'; // Показываем сообщение
        //btn.addEventListener('click', openForm) 
        setTimeout(openForm, 1000);
        
        setTimeout(() => {
            message.style.display = 'none'; // Прячем через 3 секунды
        }, 2000);
    } else {
       alert("Product information is not yet displayed!");
    }
});

///

function openForm() {
    document.querySelector(".registrForma").style.display = "block";
   
  }
  
  function closeForm() {
    document.querySelector(".registrForma").style.display = "none";
  }

  ///

//   /* wotk with form */

  

 



//   /*  select nova poshta */
//   const objWarehouseByCity = {
//     Kyiv: ["Warehouse №1", "Warehouse №2", "Warehouse №3"],
//     Lviv: ["Warehouse №4", "Warehouse №5", "Warehouse №6"],
//     Odessa: ["Warehouse №7", "Warehouse №8", "Warehouse №9"],
// }

// const citySelect = document.getElementById('city');
// //console.log(citySelect.value);
// const warehouseSelected = document.getElementById('warehouse');

//  citySelect.addEventListener("change", (event) => {
//     //console.log(1)
//     const selectedCity = event.target.value; 
//     //console.log("Selected city:", selectedCity);
//     warehouseSelected.innerHTML = '<option value="">Select a warehouse</option>';
//     if (objWarehouseByCity[selectedCity]){
//         objWarehouseByCity[selectedCity].forEach(warehouse => {
//             const option = document.createElement('option');
//             option.value = warehouse;
//             option.textContent = warehouse;
//             warehouseSelected.appendChild(option);     
//        });
//     };
//  });
 