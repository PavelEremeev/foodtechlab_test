import react from 'react';
import './Header.css';

export default function Header() {

    const link = "/"


    return (
        <header className="header">

            <div className="header__container">
                <a href={link} target="#" className="header__logo"></a>
                <div className="header__user-container">
                    <div className="header__nav-container">
                        <a href={link} target="#" className="header__text">Москва</a>
                        <p className="header__text header__text-info">8-800-550-30-30</p>
                    </div>
                    <a href={link} target="#" className="header__text header__text-cabinet">Личный кабинет</a>
                </div>
            </div>
            <div className="header__info-container">
                <div className="header__about-container">
                    <div className="header__nav-container">
                        <a href={link} target="#" className="header__text">О компании</a>
                        <a href={link} target="#" className="header__text">Условия доставки</a>
                    </div>
                    <a href="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/Polzovatelskoe_soglashenie_servisov_GK_SushiVesla.pdf"
                        target="#" className="header__text">Пользовательское соглашение</a>
                </div>
                <button className="header__button">
                    <p className="header__button-text">Икринки</p>
                    <img className="header__button-image" src="../../images/egg.svg"></img>
                </button>
                <button className="header__button-box"></button>
            </div>

        </header>
    )
}

