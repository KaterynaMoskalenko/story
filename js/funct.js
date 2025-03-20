'use.strict';

const categoriesProducts = document.querySelector('.categories');
//console.log(categoriesProducts)
const productInfo = document.querySelector('.products');
//console.log(productInfo);
const btn = document.getElementById('btn');
//console.log(btn)
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
    console.log(selectCCategory.products)
    showProducts(selectCCategory.products, categoryId);

    productInfo.addEventListener('click', event => {
        if (!event.target.classList.contains('product-item')) {
            return;
        }
        const productId = event.target.getAttribute('data-products-id');
        console.log(productId);
        const selectProduct = selectCCategory.products.find((product => product.id == productId));
        //console.log(selectProduct);

        showInfoAboutProduct(selectProduct);
    });
});



btn.addEventListener('click', () => {
    if (productInfoDisplayed) { // Проверяем, сработала ли showInfoAboutProduct
        message.style.display = 'block'; // Показываем сообщение
        btn.addEventListener('click', openForm) 
        setTimeout(() => {
            message.style.display = 'none'; // Прячем через 3 секунды
        }, 3000);
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

  /* wotk with form */

  const elementsOfForm = document.forms.singin.elements;
  const btnBuy = document.querySelector('.btnBuy');

  /*  select nova poshta */
  const objWarehouseByCity = {
    Kyiv: ["Warehouse №1", "Warehouse №2", "Warehouse №3"],
    Lviv: ["Warehouse №4", "Warehouse №5", "Warehouse №6"],
    Odessa: ["Warehouse №7", "Warehouse №8", "Warehouse №9"],
}

const citySelect = document.getElementById('city');
//console.log(citySelect.value);
const warehouseSelected = document.getElementById('warehouse');

 citySelect.addEventListener("change", (event) => {
    //console.log(1)
    const selectedCity = event.target.value; 
    //console.log("Selected city:", selectedCity);
    warehouseSelected.innerHTML = '<option value="">Select a warehouse</option>';
    if (objWarehouseByCity[selectedCity]){
        objWarehouseByCity[selectedCity].forEach(warehouse => {
            const option = document.createElement('option');
            option.value = warehouse;
            option.textContent = warehouse;
            warehouseSelected.appendChild(option);     
       });
    };
 })
 //==============================//

  btnBuy.addEventListener('click', () => {

    const name = elementsOfForm.name.value;
    const namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє' ]{2,30}$/;

    // Validate name
    if  (name === '') {      
        alert("please input your name");
        return; // Exit the function if the name is invalid
         };
    if (!namePattern.test(name)) {
        elementsOfForm.name.value ='';
      alert("Name is not correct");
      return; // Exit the function if the name is invalid
       }
   
    const city = elementsOfForm.city.value;

      // Validate city
      if (city === '') {
        alert("please choose a city");
        return;
      }     

      const warehouse = elementsOfForm.warehouse.value;
      if (!warehouse) {
        alert('Choose plesae a Nova Poshta warehouse for sending');
        return;
      }
 
     const payment = elementsOfForm.payment.value;   

     const quantity = elementsOfForm.quantity.value;
     const quantityPattern = /^[1-9]+$/;
     if (!quantityPattern.test(quantity)) {
        elementsOfForm.quantity.value = '';
        alert('the quantity of units of goods cannot be like that! Repeat please')
        return;
     }

        const comment = elementsOfForm.comment.value;


  // Log only valid data
  console.log({
    name,
    city,
    warehouse,
    payment,
    quantity,
    comment,
    });      

    const chossedGood = document.querySelector('.info');
    //console.dir(chossedGood.children[1].innerText)

   const outputDiv = document.getElementById('output');
   outputDiv.innerHTML = '';
    outputDiv.innerHTML += `<p>Name: ${name}</p><br><br>`;
    outputDiv.innerHTML += `<p>City: ${city}</p><br><br>`;
    outputDiv.innerHTML += `<div>warehouse: ${warehouse}</div><br>`;
    outputDiv.innerHTML += `<p>Payment method: ${payment}</p><br><br>`;
    outputDiv.innerHTML += `<p>Amount: ${quantity}</p><br><br>`;
    outputDiv.innerHTML += `<p>Comment: ${comment}</p><br><br>`;
    outputDiv.innerHTML += `<p>Your selected product: ${chossedGood.children[1].innerText}</p><br><br>`;

    btnBuy.addEventListener('click', closeForm) 

  })
