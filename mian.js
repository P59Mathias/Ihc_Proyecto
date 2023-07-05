//cambio de cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber=0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

//Agregar el total de productos al carrito cuando se presiona el button add to card
const addTocartBtn= document.querySelector('.details__button');
let cartNotification=document.querySelector('.header__cart-notification');
let lastValue = parseInt(cartNotification.innerText);

addTocartBtn.addEventListener('click',()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText =lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
})

//mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click',()=>{
    
    cartModal.classList.toggle('show');
    if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">your cart is emply<p>';

    }else{
        drawProductInModal();

    }
    
});
//borrar el contenido del carrito.
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">your cart is emply<p>';
        lastValue=0;
        cartNotification.innerText = lastValue;
    });
}
//cambiar imagenes cuando se rpesoopne 
const imageContainer = document.querySelector('.gallery__image-container');
const perviusGalleryBtn = document.querySelector('.gallery__previus')
const nextGalleryBtn = document.querySelector('.gallery__next')
let imgIndex=1;


nextGalleryBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer);
});

perviusGalleryBtn.addEventListener('click',()=>{
    changePreviusImage(imageContainer);
});

//Mostrar el modal de imagenes cuando hago click en la imagen principal.
const ImagesModal=document.querySelector('.modal-gallery__background');
const closeModalBtn=document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',()=>{
    ImagesModal.style.display ='grid';
})
closeModalBtn.addEventListener('click',()=>{
    ImagesModal.style.display ='none';
})

//Cambiar las imagenes principales desde los thumbnails
let thumbnails = document.querySelectorAll('.gallery__htummail')
thumbnails =[...thumbnails]

thumbnails.forEach(htummail =>{
    htummail.addEventListener('click', event=>{
        console.log(event.target.id)

        imageContainer.style.backgroundImage = `url('../images/lap-${event.target.id}.jpeg')`

    });
});
//Cambiar las imagenes principales desde los thumnails en el modal
let modalthumbnails = document.querySelectorAll('.modal-gallery__htummail')
const modalImageContainer= document.querySelector('.modal-gallery__image-container');
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail =>{
    modalthumbnail.addEventListener('click', event =>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('../images/lap-${event.target.id.slice(-1)}.jpeg')`
    });
});

//Cambiar imagen principal de modal dede desde flechas en el modal
const previusModalBtn = document.querySelector('.modal-gallery__previuos');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click',()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click',()=>{
    changePreviusImage(modalImageContainer);
});
//funciones
function drawProductInModal(){
    productContainer.innerHTML=`
        <div class="cart-modal__details-container">  
            <img class="cart-modal__image" src="images/lap-1.jpeg" alt="">
            <div>
            <p class="cart-modal__product">Autum limited edittion</p>
            <p class="cart-modal__price">$1255 x3 <span>$3750.00</span></p>
            </div>
            <img class="cart-modal__delete" src="images/x-symbol-svgrepo-com copy.svg" alt="delete">
        </div>
        </div>
        <button class="cart-modal__Checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$1255 x${lastValue} <span>$${lastValue*1255}.00</span>`;
}


function changeNextImage(imgContainer){
    if(imgIndex ==4){
        imgIndex=1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/lap-${imgIndex}.jpeg')`;
}
function changePreviusImage(imageContainer){
    if (imgIndex==1){
        imgIndex=4;
    }
    else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/lap-${imgIndex}.jpeg')`;

}

//







