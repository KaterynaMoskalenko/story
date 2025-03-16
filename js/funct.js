'use.strict';

const categoriesProducts = document.querySelector('.categories');
//console.log(categoriesProducts)
const productInfo = document.querySelector('.products');
//console.log(productInfo);
const btn = document.getElementById('btn');
console.log(btn)
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
        console.log(selectProduct);

        showInfoAboutProduct(selectProduct);
    });
});



btn.addEventListener('click', () => {
    if (productInfoDisplayed) { // Проверяем, сработала ли showInfoAboutProduct
        message.style.display = 'block'; // Показываем сообщение
        setTimeout(() => {
            message.style.display = 'none'; // Прячем через 3 секунды
        }, 3000);
    } else {
       alert("Информация о продукте ещё не отображена!");
    }
});