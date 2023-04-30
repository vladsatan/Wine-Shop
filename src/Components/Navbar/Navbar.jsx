import React from 'react';
import "./Navbar.css";
import logo from "../../img/Logo.png";
import searchLogo from "../../img/SearchLogo.png";
import locationLogo  from "../../img/location-logo.png";
import ExpressDelivery from "../Express-delivery/Express_delivery"

const Navbar = () => {
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
                <a href='#'>Вино</a>
                <a href='#'>Игристое</a>
                <a href='#'>Виски</a>
                <a href='#'>Коньяк</a>
                <a href='#'>Арманьяк</a>
                <a href='#'>Ром</a>
                <a href='#'>Водка</a>
                <a href='#'>Ликер</a>
                <a href='#'>Коктейли</a>
                <a href='#'>Деликатесы</a>
            </div>

            <div className='space2'></div>
        </nav>
    );
}

export default Navbar;
