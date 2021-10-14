import react from 'react'
import './SetCard.css'

// import image from '../../images/sets/classic.png'

export default function SetCard({ bckgndColor, image, title, description, weight, count, price }) {

    return (
        <article className='setcard' style={{ backgroundColor: `${bckgndColor}` }}>
            <img className='setcard__image' src={image} />
            <div className='setcard__container'>
                <div className='setcard__description-container'>
                    <h3 className='setcard__title'>{title}</h3>
                    <p className='setcard__description'>{description}</p>
                    <p className='setcard__description'>{weight}</p>
                    <div className='setcard__icon-container'>
                        <div className='setcard__icon-count'></div>
                        <p className='setcard__count'>{count}</p>
                    </div>
                </div>
                <div className='setcard__price-container'>
                    <p className='setcard__price'>
                        {price} &#8381;
                    </p>
                    <button className='setcard__button'>В КОРЗИНУ</button>
                </div>
            </div>
        </article>
    )
}