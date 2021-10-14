import react from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

import Sets from '../Sets/Sets'
import Rolls from '../Rolls/Rolls'
import Wok from '../Wok/Wok'
import SoupDrinks from '../SoupDrinks/SoupDrinks'

export default function Main() {

    return (
        <Link to='/sets' style={{ textDecoration: 'none' }}>
            <main className='main'>
                <div className='main__container'>
                    <Sets></Sets>
                    <Rolls></Rolls>
                </div>
                <div className='main__container'>
                    <Wok></Wok>
                    <SoupDrinks></SoupDrinks>
                </div>
            </main>
        </Link>
    )
}