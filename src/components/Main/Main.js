import react from "react";
import './Main.css'

export default function Main() {

    return (
        <section className="main">
            <section className="sets">
                <div className="sets__image">
                    <h1 className="sets__title">СЕТЫ</h1>
                </div>
            </section>
            <section className="rolls">
                <div className="menu__container-right">
                    <div className="menu__image-left-one">
                        <h2 className="menu__text-right">РОЛЛЫ</h2>
                    </div>
                </div>
                <div className="menu__container-left">
                    <div className="menu__image-right-one">
                        <h2 className="menu__text-left">СУШИ</h2>
                    </div>
                </div>
                <div className="menu__container-right">
                    <div className="menu__image-left-two menu__image-left-one">
                        <h2 className="menu__text-right">ЖАРЕННЫЕ РОЛЛЫ</h2>
                    </div>
                </div>
                <div className="menu__container-left">
                    <div className="menu__image-right-two menu__image-right-one">
                        <h2 className="menu__text-left">ЗАПЕЧЕННЫЕ РОЛЛЫ</h2>
                    </div>

                </div>
            </section>
            <section className="wok">
                <div className="wok__container">
                    <h2 className="wok__title">ВОК</h2>
                    <h2 className="wok__title">КОНСТРУК</h2>
                    <h2 className="wok__title">ТОР</h2>
                    <h3 className="wok__subtitle">СОБЕРИ СВОЙ</h3>
                </div>
            </section>
            <section className="soup-drinks">
                <div className="soup__container">
                    <div className="soup__image"></div>
                    <h3 className="soup__title">СУПЫ</h3>
                </div>
                <div className="drinks-tempura__container">
                    <div className="menu__container-right">
                        <div className="menu__image-left-one tempura__image"></div>
                        <h3 className="menu__text-right tempura__text">ТЕМПУРА</h3>
                    </div>
                    <div className="menu__container-left">
                        <h3 className="tempura__text drinks__text">НАПИТКИ</h3>
                        <div className="drinks__image"></div>
                    </div>
                </div>
            </section>
        </section>
    )
}