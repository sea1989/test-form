import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";

export default function Header() {
    return (
        <header className="header">
            <div className='header__wrapper container'>
                <div className='logo-wrapper'>
                    <img src={logo} width='44px' height='44px' alt="logo" className="logo__image" />
                    <span className='logo-title'>Портал НПР РГСУ</span>
                </div>

                <nav>
                    <ul class="nav">
                        <li class="nav__item">
                            <a class="nav__link" href="#">Новости</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link nav__link--active" href="#production">Преподаватели</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#about">Вакансии</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#about">Объявления</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#about">Мероприятия</a>
                        </li>
                    </ul>
                </nav>

                <button className='header__button'>
                    <img src={login} alt="enter" className="logo__image" />
                    <span>Вход на сайт</span>
                </button>
            </div>
        </header >
    );
}
