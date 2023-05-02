import React from 'react';
import "./ProductCard.css";

const ProductCard = (props) => {

    const {productCardInfo} = props;
    let {name, photo, year, volume, producer, price, flag} = productCardInfo;

    return (
        <div className='ProductCard'>
            <img src={photo} alt='wine-photo' />
            <h3>{name}</h3>
            <p className='card-year'>{year}/{volume}</p>
            <div className='flex-producer'>
            <img src={flag} alt='' />
            <p>{producer}</p>
            </div>
            <div className='flex-price'>
               <div className='price_quantity'>
                <p className='quantity'>ЦЕНА ЗА 1 ШТ</p>
                <p className='price'>{price} ГРН</p>
               </div>
               <button>В КОРЗИНУ</button>
            </div>
        </div>
    );
}

export default ProductCard;
