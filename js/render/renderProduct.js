export const renderProduct = (selector, data) => {
    const parent = document.querySelector(selector);
    
    let productsHtml = '';
    
    const { id, img, title, descrMini, price } = data;

    const imgName = img ? img : 'noimg.webp';

    const html = 
        `<div class="product" data-id="${ id }">
            <div class="product__img">
                <img src="./img/products/${ imgName }" alt="">
            </div>
            <h4 class="product__title">${ title }</h4>
            <p class="product__descr">${ descrMini }</p>
            <div class="product__price-block">
                <span class="product__price">${ price }</span>
                <button class="product__add-to-cart" >add to cart</button>
            </div>
        </div>`;

    parent.insertAdjacentHTML('beforeend', html);
    productsHtml = document.querySelectorAll('.product__add-to-cart');

    productsHtml.forEach(btn => {
        btn.onclick = addToCartHandler;
        
    });
   
}

function addToCartHandler() {
    const parent = this.closest('.product');
    console.log(parent);
    const id = parent.dataset.id;
    console.log('click', id);
    
    let cartItemsCount = 0;
    const cartEl = document.querySelector('.cart');
    console.log(cartEl);
    const cartItemsCountEl = cartEl.querySelector('span:last-child');
    console.log(cartItemsCountEl);

    cartItemsCount++;
    cartItemsCountEl.innerHTML = cartItemsCount;


    const jsonData = JSON.stringify(parent)
    localStorage.setItem('parent', jsonData);

    const rawData = localStorage.getItem('parent');
    const userData = JSON.parse(rawData);
    console.log(userData);
}    


