import React, {useState} from 'react';
import "./Navbar.css";
import logo from "../../img/Logo.png";
import searchLogo from "../../img/SearchLogo.png";
import locationLogo  from "../../img/location-logo.png";
import ExpressDelivery from "../Express-delivery/Express_delivery"

const Navbar = (props) => {

    let {drink, setDrink} = props;

    return (
        <nav>
            <div className='space'></div>
            <ExpressDelivery />

            <div className='Search-bar'>


                <div className='Logo'>
                    <img src={logo} alt={'logo'} />
                    <h1>винная мельница</h1>
                </div>

                <div className='search-box'>
                    <input type='text' />
                    <div className='search-btn'><img src={searchLogo} alt='searchLogo' /></div>
                </div>
                

                <div className='info'>
                    <div className='account-info'>
                        <div className='input-selection'>
                            <a href='#' className='reg-href'>Регистрация</a>
                            <a href='#'>Вход</a>
                        </div>
                        <p>Личный кабинет</p>
                    </div>


                    <hr color={'#414040'} />


                    <div className='contacts-info'>
                       <a href='#'><div className='location'>
                            <img src={locationLogo} alt='Location' />
                            <p>Киев</p>
                        </div></a>
                        <a className='tel-href' href="tel:+6494461709">068-144-3267</a>
                    </div>


                    <hr color={'#414040'} />
                    <div className='basket'>
                       <a href='#' className='basket-href'><div>Корзина: {0}</div></a>
                       <a href='#' className='balance-href'><div>{0} грн</div></a>
                    </div>
                </div>

            </div>

            <div className='nav-bar'>
            <div className={drink === 'Вино'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Вино'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Вино')}>Вино</a></div>
            <div className={drink === 'Игристое'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Игристое'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Игристое')}>Игристое</a></div>
            <div className={drink === 'Виски'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Виски'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Виски')}>Виски</a></div>
            <div className={drink === 'Коньяк'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Коньяк'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Коньяк')}>Коньяк</a></div>
            <div className={drink === 'Арманьяк'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Арманьяк'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Арманьяк')}>Арманьяк</a></div>
            <div className={drink === 'Ром'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Ром'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Ром')}>Ром</a></div>
            <div className={drink === 'Водка'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Водка'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Водка')}>Водка</a></div>
            <div className={drink === 'Ликер'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Ликер'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Ликер')}>Ликер</a></div>
            <div className={drink === 'Коктейли'? 'nav-bar-bg':'nav-bar-noBg'}><a className={drink === 'Коктейли'? 'nav-bar-true':'nav-bar-false'} href='#' onClick={()=>setDrink('Коктейли')}>Коктейли</a></div>
            </div>

            <div className='space2'></div>
        </nav>
    );
}

export default Navbar;
