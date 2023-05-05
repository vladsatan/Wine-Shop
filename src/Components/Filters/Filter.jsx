import React from 'react';
import "./Filter.css";
import FilterBox from './FilterBox';

const Filter = (props) => {

    let {chooseColor,setChooseColor,chooseSweetness,setChooseSweetness,choosePrice,setChoosePrise,chooseCountry,setChooseCountry,chooseSort,setChooseSort,chooseClassification,setChooseClassification} = props

    let objColor = {topicName: 'Цвет', pointsArray:[{pointName: 'Белое',key: 1,quantity: 9},{pointName: 'Красное', key: 2, quantity: 21},{pointName: 'Розовое', key: 3,quantity: 13},{pointName: 'Все', key: 4, quantity: 100}]};
    let objSweetness = {topicName: 'Сладость', pointsArray:[{pointName: 'Полусладкое', key: 5,quantity: 9},{pointName: 'Полусухое', key: 6,quantity: 21},{pointName: 'Сухое', key: 7,quantity: 13},{pointName: 'Сладкое', key: 8, quantity: 9}]}
    let objPrice = {topicName: 'Цена', pointsArray:[{pointName: '0-1000', key: 9,quantity: 9},{pointName: '1000-2000', key: 10,quantity: 21},{pointName: '2000-3000', key: 11,quantity: 13},{pointName: '3000-4000', key: 12 ,quantity: 9},{pointName: '4000-5000', key: 13 ,quantity: 9},{pointName: '5000-6000', key: 14 ,quantity: 1},{pointName: '6000+', key: 15 ,quantity: 2}]}
    let objCountry = {topicName: 'Страна', pointsArray:[{pointName: 'Австралия', key: 16 ,quantity: 9},{pointName: 'Австрия', key: 17 ,quantity: 21},{pointName: 'Аргентина', key: 18 ,quantity: 13},{pointName: 'Германия', key: 19,quantity: 9},{pointName: 'Италия', key: 20,quantity: 9},{pointName: 'Франция', key: 21,quantity: 1},{pointName: 'Португалия', key: 22,quantity: 2},{pointName: 'Чили', key: 23,quantity: 9}]}
    let objGrapeSorts = {topicName: 'Сорт винограда', pointsArray:[{pointName: 'Верментино', key: 24,quantity: 9},{pointName: 'Каберне Совиньон', key: 25,quantity: 21},{pointName: 'Каберне Фран', key: 26,quantity: 13},{pointName: 'Мерло',key: 27,quantity: 9},{pointName: 'Пину Нуар', key: 28,quantity: 9},{pointName: 'Совиньон Блан', key: 29,quantity: 1},{pointName: 'Шардоне', key: 30,quantity: 2},{pointName: 'Корвиноне', key: 31,quantity: 9}]}
    let objClassification = {topicName: 'Классификация', pointsArray:[{pointName: 'Игристое вино', key: 32,quantity: 9},{pointName: 'Ледяное вино', key: 33,quantity: 21},{pointName: 'Портвейн', key: 34,quantity: 13},{pointName: 'Тихое вино', key: 35,quantity: 100},{pointName: 'Херес', key: 36,quantity: 13}]}
    return (
        <div className='filter-container'>
            <FilterBox obj={objColor} choose={chooseColor} setChoose={setChooseColor}/>
            <FilterBox obj={objSweetness} choose={chooseSweetness} setChoose={setChooseSweetness}/>
            <FilterBox obj={objPrice} choose={choosePrice} setChoose={setChoosePrise} />
            <FilterBox obj={objCountry} choose={chooseCountry} setChoose={setChooseCountry}/>
            <FilterBox obj={objGrapeSorts} choose={chooseSort} setChoose={setChooseSort}/>
            <FilterBox obj={objClassification} choose={chooseClassification} setChoose={setChooseClassification} />
        </div>
    );
}

export default Filter;
