import React from 'react';
import "./Filter.css";
import FilterBox from './FilterBox';

const Filter = () => {
    return (
        <div className='filter-container'>
            <FilterBox obj={{topicName: 'Цвет', pointsArray:[{pointName: 'Белое', pointValue: 'whiteWine',quantity: 9},{pointName: 'Красное', pointValue: 'redWine',quantity: 21},{pointName: 'Розовое', pointValue: 'pink',quantity: 13},{pointName: 'Все', pointValue: 'All',quantity: 100}]}} />
            <FilterBox obj={{topicName: 'Сладость', pointsArray:[{pointName: 'Полусладкое', pointValue: 'semi-sweet',quantity: 9},{pointName: 'Полусухое', pointValue: 'Semi-dry',quantity: 21},{pointName: 'Сухое', pointValue: 'dry',quantity: 13},{pointName: 'Сладкое', pointValue: 'sweet',quantity: 9}]}} />
            <FilterBox obj={{topicName: 'Цена', pointsArray:[{pointName: '0-1000', pointValue: '1000',quantity: 9},{pointName: '1000-2000', pointValue: '2000',quantity: 21},{pointName: '2000-3000', pointValue: '3000',quantity: 13},{pointName: '3000-4000', pointValue: '4000',quantity: 9},{pointName: '4000-5000', pointValue: '5000',quantity: 9},{pointName: '5000-6000', pointValue: '6000',quantity: 1},{pointName: '6000+', pointValue: '6001',quantity: 2}]}} />
            <FilterBox obj={{topicName: 'Регион', pointsArray:[{pointName: 'Австралия', pointValue: 'Australia',quantity: 9},{pointName: 'Австрия', pointValue: 'Austria',quantity: 21},{pointName: 'Аргентина', pointValue: 'Argentina',quantity: 13},{pointName: 'Германия', pointValue: 'Germany',quantity: 9},{pointName: 'Италия', pointValue: 'Italy',quantity: 9},{pointName: 'Франция', pointValue: 'France',quantity: 1},{pointName: 'Португалия', pointValue: 'Portugal',quantity: 2},{pointName: 'Чили', pointValue: 'Chile',quantity: 9}]}} />
            <FilterBox obj={{topicName: 'Сорт винограда', pointsArray:[{pointName: 'Верментино', pointValue: 'Vermentino',quantity: 9},{pointName: 'Каберне Совиньон', pointValue: 'Cabernet Sauvignon',quantity: 21},{pointName: 'Каберне Фран', pointValue: 'Cabernet Franc',quantity: 13},{pointName: 'Мерло', pointValue: 'Merlot',quantity: 9},{pointName: 'Пину Нуар', pointValue: 'pinu noir',quantity: 9},{pointName: 'Совиньон Блан', pointValue: 'Sauvignon Blanc',quantity: 1},{pointName: 'Шардоне', pointValue: 'Chardonnay',quantity: 2},{pointName: 'Корвиноне', pointValue: 'Corvinone',quantity: 9}]}} />
        </div>
    );
}

export default Filter;
