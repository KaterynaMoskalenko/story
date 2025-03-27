'use.strict';

const backBtn = document.querySelector('.back-button');
const btnOrders = document.querySelector('.btnOrders');
const wrapperInet = document.querySelector('.wrapper');
const orderContainer = document.querySelector('.order-container');



btnOrders.addEventListener('click', () => {
    currentOrders = getOrders();
    //console.log(currentOrders)
  
    if (currentOrders && currentOrders.length > 0) {
      
        orderContainer.innerHTML = '';
        renderFromStorageOrders();
        wrapperInet.classList.add('hidden');
        btn.style.display ='none';
        btnOrders.style.display ='none';
        backBtn.classList.remove('hidden');
       
        if (orderContainer.classList.contains('hidden')) {
            orderContainer.classList.remove('hidden');
        }
         // Додаємо кнопку видалення
        const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Remove order';
       deleteButton.classList.add('remove-btn');
     
       orderContainer.appendChild(deleteButton);
    } else  {
        
        orderContainer.innerHTML = '<p>No orders.</p>';
    };   
})

const renderFromStorageOrders = () => {
    const getOrders = () => JSON.parse(localStorage.getItem('order')) || [];
    console.log(currentOrders);
    const orderContainer = document.querySelector('.order-container');
    currentOrders.forEach(element => {
        console.log(element)
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <div><span class="order-label">Order:</span>${element.item} euro </div>
            <div><span class="order-label">Payment:</span>${element.payment}</div>
            <div><span class="order-label">City:</span>${element.city}</div>
            <div><span class="order-label">Warehouse Nova Poshta:</span>${element.warehouse}</div>
            <div><span class="order-label">Amount:</span>${element.quantity}</div>
            `;
            orderContainer.appendChild(orderItem);
    });
};


 
backBtn.addEventListener('click', () => {
    wrapperInet.classList.remove('hidden');
    orderContainer.classList.add('hidden');
    backBtn.classList.add('hidden');
    btn.style.display ='inline-block';
    btnOrders.style.display ='inline-block';
})



    // Видаляємо елемент за індексом
    function removeItem(index) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.splice(index, 1);
  
        localStorage.setItem('items', JSON.stringify(items));
       
      }
  
      orderContainer.addEventListener('click', (e) => {
       console.dir(e.target.parentElement);
        // console.log(orderContainer)
        e.target.parentElement.remove();
       
        });