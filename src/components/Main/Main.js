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
                <div className="rolls__container-right">
                    <div className="rolls__image-left-one">
                        <h2 className="rolls__text-right">РОЛЛЫ</h2>
                    </div>
                </div>
                <div className="rolls__container-left">
                    <div className="rolls__image-right-one">
                        <h2 className="rolls__text-left">СУШИ</h2>
                    </div>
                </div>
                <div className="rolls__container-right">
                    <div className="rolls__image-left-two rolls__image-left-one">
                        <h2 className="rolls__text-right">ЖАРЕННЫЕ РОЛЛЫ</h2>
                    </div>
                </div>
                <div className="rolls__container-left">
                    <div className="rolls__image-right-two rolls__image-right-one">
                        <h2 className="rolls__text-left">ЗАПЕЧЕННЫЕ РОЛЛЫ</h2>
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
                    <div className="soup__title">СУПЫ</div>
                </div>
                <div className="drinks-tempura__container">
                    <div className="tempura__container">
                        <div className="tempura__image"></div>
                        <div className="tempura__text">ТЕМПУРА</div>
                    </div>
                    <div className="drinks__container">
                        <div className="tempura__text drinks__text">НАПИТКИ</div>
                        <div className="tempura__image drinks__image"></div>
                    </div>
                </div>
            </section>
        </section>
    )
}