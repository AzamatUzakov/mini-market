document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.title} - ${item.price} руб. (x${item.quantity})`;
            cartItemsElement.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Итого: ${total} руб.`;
    }

    renderCart();

    window.addEventListener('beforeunload', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(item => {
            const goodsItems = document.querySelectorAll('.goods_main_box');
            goodsItems.forEach(goodsItem => {
                const titleText = goodsItem.querySelector('.title p').textContent;
                const addBasketBtn = goodsItem.querySelector('.add_basket');
                const increaseQuantity = goodsItem.querySelector('.increase_quantity');

                if (item.title === titleText) {
                    addBasketBtn.classList.remove('active_remove_btn');
                    increaseQuantity.classList.remove('active_add_btn');
                }
            });
        });
    });
});
