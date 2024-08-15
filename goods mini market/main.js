
let all_goods_box = document.querySelector('.goods_flex_box')

let menu_mobi = document.querySelector('.menu_mobi')
let burger_icon = document.querySelector('.br_icon')
let X_icon = document.querySelector('.X_icon')


burger_icon.onclick = () => {
  menu_mobi.style.height = 100 + '%'
  burger_icon.style.display = "none"
  X_icon.style.display = "block"
}

X_icon.onclick = () => {
  menu_mobi.style.height = 30 + 'px'
  burger_icon.style.display = "block"
  X_icon.style.display = "none"
  console.log("clcick");

}




const products = [
  {
    title: 'Колбаса ветчина',
    price: 2000,
    imgSrc: './public/kolbasa.jpeg'
  },
  {
    title: 'Сыр Гауда',
    price: 1500,
    imgSrc: './public/kolbasa.jpeg'
  },
  {
    title: 'Хлеб Бородинский',
    price: 50,
    imgSrc: './public/kolbasa.jpeg'
  }
];

function goods() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  for (let item of products) {
    let goodsMainBox = document.createElement('div');
    let posterBox = document.createElement('div');
    let posterImgBox = document.createElement('div');
    let posterImg = document.createElement('img');
    let title = document.createElement('div');
    let titleText = document.createElement('p');
    let priceFlexCont = document.createElement('div');
    let priceText = document.createElement('p');

    let addBasketBtn = document.createElement('button');
    let increaseQuantity = document.createElement('div');
    let plusBtn = document.createElement('p');
    let quantity = document.createElement('div');
    let minusBtn = document.createElement('p');

    posterImg.src = item.imgSrc;
    posterImg.alt = '';
    titleText.textContent = item.title;
    priceText.textContent = `${item.price} руб`;
    addBasketBtn.textContent = 'Добавить в корзину';
    plusBtn.textContent = '+';
    quantity.textContent = '1';
    minusBtn.textContent = '-';

    goodsMainBox.classList.add('goods_main_box');
    posterBox.classList.add('poster_box');
    posterImgBox.classList.add('poster_img_box');
    posterImg.classList.add('poster_img');
    title.classList.add('title');
    priceFlexCont.classList.add('price_flex_cont');
    addBasketBtn.classList.add('add_basket');
    increaseQuantity.classList.add('increase_quantity');
    plusBtn.classList.add('plus');
    quantity.classList.add('quantity');
    minusBtn.classList.add('minus');

    // Check if the item is in the cart
    const cartItem = cart.find(cartItem => cartItem.title === item.title);
    if (cartItem) {
      addBasketBtn.classList.add('active_remove_btn');
      increaseQuantity.classList.add('active_add_btn');
      quantity.textContent = cartItem.quantity;
    }

    posterImgBox.append(posterImg);
    posterBox.append(posterImgBox);
    title.append(titleText);
    priceFlexCont.append(priceText);
    increaseQuantity.append(plusBtn, quantity, minusBtn);
    goodsMainBox.append(posterBox, title, priceFlexCont, addBasketBtn, increaseQuantity);
    all_goods_box.append(goodsMainBox);

    addBasketBtn.onclick = () => {
      addBasketBtn.classList.add('active_remove_btn');
      increaseQuantity.classList.add('active_add_btn');
      addToCart(item, parseInt(quantity.textContent));
    };

    plusBtn.onclick = () => {
      quantity.textContent = parseInt(quantity.textContent) + 1;
      updateCartQuantity(item.title, parseInt(quantity.textContent));
    };

    minusBtn.onclick = () => {
      if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        updateCartQuantity(item.title, parseInt(quantity.textContent));
      }
    };
  }
}

function addToCart(item, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(cartItem => cartItem.title === item.title);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartQuantity(title, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(cartItem => cartItem.title === title);

  if (existingItem) {
    existingItem.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

goods();
