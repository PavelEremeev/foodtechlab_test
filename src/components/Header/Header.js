import react from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {



    return (
        <header className='header'>

            <div className='header__container'>
                <Link to='/' className='header__logo'></Link>
                <div className='header__user-container'>
                    <div className='header__nav-container'>
                        <Link to='/' className='header__text'>Москва</Link>
                        <p className='header__text header__text-info'>8-800-550-30-30</p>
                    </div>
                    <Link to='/' className='header__text header__text-cabinet'>Личный кабинет</Link>
                </div>
            </div>
            <div className='header__info-container'>
                <div className='header__about-container'>
                    <div className='header__nav-container'>
                        <Link to='/' className='header__text'>О компании</Link>
                        <Link to='/' className='header__text'>Условия доставки</Link>
                    </div>
                    <a href='https://xn--80adjkr6adm9b.xn--p1ai/static/sv/Polzovatelskoe_soglashenie_servisov_GK_SushiVesla.pdf'
                        target='#' className='header__text'>Пользовательское соглашение</a>
                </div>
                <button className='header__button'>
                    <p className='header__button-text'>Икринки</p>
                    <div className='header__button-image'></div>
                </button>
                <button className='header__button-box'></button>
            </div>

        </header>
    )
}

