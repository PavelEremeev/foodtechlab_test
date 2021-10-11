import react from 'react'
import './Rolls.css'

export default function Rolls() {

    return (
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
    )
}