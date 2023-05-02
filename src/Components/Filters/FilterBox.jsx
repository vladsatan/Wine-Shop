import React from 'react';
import "./FilterBox.css";
import { useState, useEffect } from 'react';
import openFirstPoints from '../../Scripts';

const FilterBox = (props) => {

    let {obj} = props;
    let {topicName,quantity,pointsArray} = obj;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        openFirstPoints(topicName,setIsOpen);
    }, []);

    return (
        <div className='FilterBox-container'>
            <div className='topic'>
                <h3>{topicName}</h3>
                <button onClick={()=>setIsOpen(!isOpen)}>{isOpen? "-":"+"}</button>
            </div>

            {topicName === 'Цена'? 
            
            <div className='priceInputFlex'>
               <input type='text' className='price-input' placeholder='от'></input>
               <input type='text' className='price-input price-input_2' placeholder='до'></input>
               <button>OK</button>
            </div> 
            
            : null}


            <div className={isOpen? 'open-list': 'close-list'}>
            {pointsArray.map(p=>{ return(
                <div className='point' key={p.pointValue}>
                    <input id={p.pointValue} className='custom-checkbox' type={'checkbox'} value={p.pointValue} />
                    <label htmlFor={p.pointValue}>{p.pointName}</label>
                    <p>{p.quantity}</p>
                </div>
                )})}
            </div>


        </div>
    );
}

export default FilterBox;
