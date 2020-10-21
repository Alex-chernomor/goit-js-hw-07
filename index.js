<<<<<<< HEAD
// ************task 1*****************************************************************************

// const list = document.querySelectorAll('li.item')
// console.log(`В списке ${list.length} категории!`);

// const ul = document.querySelectorAll('#categories>li')
// ul.forEach((el) => {
//     console.log(`Категория: ${el.firstElementChild.textContent}\nКоличество: ${el.lastElementChild.children.length}`);
// })

// *****************task 2**********************************************************

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ul = document.querySelector('ul');
// ingredients.forEach( (el) => {
//   const li = document.createElement('li');
//     li.textContent = el;
//     ul.append(li);
// })
// ****task-3************************************************************

// const ulImages = document.querySelector('#gallery');


// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];




//  images.forEach(el => {
//   ulImages.insertAdjacentHTML('beforeend', `<li class = "img-li"><img src=${el.url} alt=${el.alt}></li>`)
//  });
// **************task-4*******************************************************
// const body = document.querySelector('body');
// // body.insertAdjacentHTML('beforeend','<button class = "reset" type = "button">Reset</button>');

// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');
// const value = document.querySelector('#value');
// const box = document.querySelector('#counter');
// const reset = document.querySelector('.reset');

// let counterValue = 0;

// box.addEventListener('click',(e)=>{
//   e.target === minus ? counterValue = counterValue - 1 : 
//   e.target === plus ? counterValue = counterValue + 1:
//   e.target === reset ? counterValue = 0 : '';
//   value.textContent = counterValue
// })
// *******task-5*********************************************************************

// const enterName = document.querySelector('#name-input');
// const yourName = document.querySelector('#name-output');

// enterName.addEventListener('input', event => {
//   (enterName.value === '') ? yourName.textContent = 'незнакомец': yourName.textContent = enterName.value;
// })

// ******************************************************************
// *********task-6*********************************************
// const text = document.querySelector('#validation-input')


// text.addEventListener('blur', (e)=>{
//   if (text.value.length == text.dataset.length){
//     text.classList.add('valid');
//     text.classList.remove('invalid');
//   } else {text.classList.add('invalid');
//   text.classList.remove('valid');}
// })

// *******************************************************
//********task 7********************************************************** */
// const range = document.querySelector('#font-size-control')

// range.addEventListener('input',(e) =>{
//  const output = document.querySelector('#text')
//  output.style.fontSize = `${range.value}px`;

=======
// ************task 1*****************************************************************************

// const list = document.querySelectorAll('li.item')
// console.log(`В списке ${list.length} категории!`);

// const ul = document.querySelectorAll('#categories>li')
// ul.forEach((el) => {
//     console.log(`Категория: ${el.firstElementChild.textContent}\nКоличество: ${el.lastElementChild.children.length}`);
// })

// *****************task 2**********************************************************

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ul = document.querySelector('ul');
// for(let el of ingredients){
//   const li = document.createElement('li');
//   li.textContent = el;
//   ul.append(li);
// }
// ****task-3************************************************************

// const ulImages = document.querySelector('#gallery');


// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];




//  images.forEach(el => {
//   ulImages.insertAdjacentHTML('beforeend', `<li class = "img-li"><img src=${el.url} alt=${el.alt}></li>`)
//  });
// **************task-4*******************************************************
// const body = document.querySelector('body');
// // body.insertAdjacentHTML('beforeend','<button class = "reset" type = "button">Reset</button>');

// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');
// const value = document.querySelector('#value');
// const box = document.querySelector('#counter');
// const reset = document.querySelector('.reset');

// let counterValue = 0;

// box.addEventListener('click',(e)=>{
//   e.target === minus ? counterValue = counterValue - 1 : 
//   e.target === plus ? counterValue = counterValue + 1:
//   e.target === reset ? counterValue = 0 : '';
//   value.textContent = counterValue
// })
// *******task-5*********************************************************************

// const enterName = document.querySelector('#name-input');
// const yourName = document.querySelector('#name-output');

// enterName.addEventListener('input', event => {
//   (enterName.value === '') ? yourName.textContent = 'незнакомец': yourName.textContent = enterName.value;
// })

// console.log(enterName);
// ******************************************************************
// *********task-6*********************************************
// const text = document.querySelector('#validation-input')


// text.addEventListener('blur', (e)=>{
//   if (text.value.length == text.dataset.length){
//     text.classList.add('valid');
//     text.classList.remove('invalid');
//   } else {text.classList.add('invalid');
//   text.classList.remove('valid');}
//   console.log(text.value.length);
//   console.log(text.dataset.length);
// })


// *******************************************************
//********task 7********************************************************** */
// const range = document.querySelector('#font-size-control')

// range.addEventListener('input',(e) =>{
//  const output = document.querySelector('#text')
//  output.style.fontSize = `${range.value}px`;

>>>>>>> 0d2e859c88f4379208e8398149a8056f4a969bc1
// })