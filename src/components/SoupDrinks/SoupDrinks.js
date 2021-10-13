import react from 'react'
import './SoupDrinks.css'

export default function SoupDrinks() {

    return (
        <section className='soup-drinks'>
            <div className='soup__container'>
                <div className='soup__image'></div>
                <h3 className='soup__title'>СУПЫ</h3>
            </div>
            <div className='drinks-tempura__container'>
                <div className='menu__container-right'>
                    <div className='menu__image-left-one tempura__image'></div>
                    <h3 className='menu__text-right tempura__text'>ТЕМПУРА</h3>
                </div>
                <div className='menu__container-left'>
                    <h3 className='tempura__text drinks__text'>НАПИТКИ</h3>
                    <div className='drinks__image'></div>
                </div>
            </div>
        </section>
    )
}