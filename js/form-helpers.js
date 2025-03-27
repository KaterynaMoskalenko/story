'use.strict';


const orderDataConfig = {
  name: {
    regExp: /^[^\s'][A-Za-zА-Яа-яЁёІіЇїЄє' ]{1,28}[^\s']$/,
    errorMessageReg: "Name is not correct",
    errorSelector: '',
    errorMessage: "please input your name",    
  },
  city: {
    regExp: /^.+$/,
    errorMessageReg: "please choose a city",
    errorSelector: '',
    errorMessage:"please choose a city", 
  },
  warehouse: {
   regExp: /^.+$/,
   errorMessageReg: "please choose a NP",
    errorSelector: '',
    errorMessage: 'Choose plesae a Nova Poshta warehouse for sending', 
  },
  payment: {
    regExp: /^.+$/,
    errorMessageReg: "please choose...",
    errorSelector: '',
    errorMessage: 'Please choose a payment method', 
  },
  quantity: {
    regExp:  /^[1-9]\d*$/,
    errorMessageReg: 'the quantity of units of goods cannot be like that! Repeat please',
    errorSelector: '',
    errorMessage: 'the quantity of units of goods cannot be like that! Repeat please korrekt', 
  },
  comment: {
    regExp:/^.*$/,
    errorMessageReg: 'write sth if you want',
    errorSelector: '',
    errorMessage:'write sth if you want',
  }, 
};



  const validateOrder = () => { 
  const currentOrders = getOrders();
  const formData = getInfoCheckoutForm();
  if (isFormValid(formData)) {
    //2.2. if no errors => save data
    formData.item = document.querySelector('.info').children[1].innerText;
   // console.log(formData);
    currentOrders.push(formData);
    productInfo.children[1].innerText = '';
    chossedGood.children[1].innerText= '';   
    localStorage.setItem('order', JSON.stringify(currentOrders));
    console.log(localStorage.setItem('order', JSON.stringify(currentOrders)));
    closeForm();   
    
  } 
  //1 get info from forma
  //2 validate info
  // 2.1 show error
  //2.2. if no errors => save data  
}
/* wotk with form */

  


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
});

const getInfoCheckoutForm = () => {
  // only gather and return   //1 get info from forma
 
  const elementsOfForm = document.forms.singin.elements;
 //console.log(elementsOfForm);
 //console.log(elementsOfForm.name.value)

  console.log({
    name: elementsOfForm.name.value,
    city: elementsOfForm.city.value,
    warehouse: elementsOfForm.warehouse.value,
    payment: elementsOfForm.payment.value,
    quantity: elementsOfForm.quantity.value,
    comment: elementsOfForm.comment.value,
    item: document.querySelector('.info').children[1].innerText,
  });
  return {
    name: elementsOfForm.name.value,
    city: elementsOfForm.city.value,
    warehouse: elementsOfForm.warehouse.value,
    payment: elementsOfForm.payment.value,
    quantity: elementsOfForm.quantity.value,
    comment: elementsOfForm.comment.value,
    // item: document.querySelector('.info').children[1].innerText,
  };
}

const getOrders = () => JSON.parse(localStorage.getItem('order')) || [];
//console.log(getOrders());

const isFormValid = (data) => {
  // or valid or false   //2 validate info
console.log(data)
  for (let key in data) {
    //console.log(key)
    if (data[key] === '' && key !== 'comment') {
     // console.log(orderDataConfig[key].errorMessage);
      alert(orderDataConfig[key].errorMessage);
      return false;
    } 
   else if (!orderDataConfig[key].regExp.test(data[key]) && key !== 'comment') {
    alert (orderDataConfig[key].errorMessageReg);
    return false;    
   }
  }
   return true;
}


btnBuy.addEventListener('click', validateOrder);





//=============the 2th variant========================//
// const elementsOfForm = document.forms.singin.elements;
// btnBuy.addEventListener('click', () => {
//     const order = [];//array of orders
//     const name = elementsOfForm.name.value;
//     const namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє' ]{2,30}$/;

//     // Validate name
//     if  (name === '') {      
//         alert("please input your name");
//         return; // Exit the function if the name is invalid
//          };
//     if (!namePattern.test(name)) {
//         elementsOfForm.name.value ='';
//       alert("Name is not correct");
//       return; // Exit the function if the name is invalid
//        }
   
//     const city = elementsOfForm.city.value;

//       // Validate city
//       if (city === '') {
//         alert("please choose a city");
//         return;
//       }     

//       const warehouse = elementsOfForm.warehouse.value;
//       if (!warehouse) {
//         alert('Choose plesae a Nova Poshta warehouse for sending');
//         return;
//       }
 
//      const payment = elementsOfForm.payment.value;   

//      const quantity = elementsOfForm.quantity.value;
//      const quantityPattern = /^[1-9]+$/;
//      if (!quantityPattern.test(quantity)) {
//         elementsOfForm.quantity.value = '';
//         alert('the quantity of units of goods cannot be like that! Repeat please')
//         return;
//      }

//         const comment = elementsOfForm.comment.value;

       
//   // Log only valid data
//   console.log({
//     name,
//     city,
//     warehouse,
//     payment,
//     quantity,
//     comment,
//     });      
//     order.push(name);
//     console.log(order);
    
//     const chossedGood = document.querySelector('.info');
//     //console.dir(chossedGood.children[1].innerText)

//    const outputDiv = document.getElementById('output');
//    outputDiv.innerHTML = '';
//     outputDiv.innerHTML += `<p>Name: ${name}</p><br><br>`;
//     outputDiv.innerHTML += `<p>City: ${city}</p><br><br>`;
//     outputDiv.innerHTML += `<div>warehouse: ${warehouse}</div><br>`;
//     outputDiv.innerHTML += `<p>Payment method: ${payment}</p><br><br>`;
//     outputDiv.innerHTML += `<p>Amount: ${quantity}</p><br><br>`;
//     outputDiv.innerHTML += `<p>Comment: ${comment}</p><br><br>`;
//     outputDiv.innerHTML += `<p>Your selected product: ${chossedGood.children[1].innerText}</p><br><br>`;

//     btnBuy.addEventListener('click', closeForm);
//   });
