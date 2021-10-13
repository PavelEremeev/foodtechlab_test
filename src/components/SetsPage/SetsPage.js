import react from 'react';
import './SetsPage.css'

import SetCard from '../SetCard/SetCard';

import begemotImageSet from '../../images/sets/begemot.png'
import classicImageSet from '../../images/sets/classic.png'
import cloudsImageSet from '../../images/sets/clouds.png'
import familyImageSet from '../../images/sets/family.png'
import grandCanyonImageSet from '../../images/sets/grand-canyon.png'
import grillImageSet from '../../images/sets/grill.png'
import hotImageSet from '../../images/sets/hot.png'
import islandImageSet from '../../images/sets/island.png'
import krispyImageSet from '../../images/sets/krispy.png'
import maymiMamaImageSet from '../../images/sets/maymi-mama.png'
import moreImageSet from '../../images/sets/more.png'
import oneImageSet from '../../images/sets/one.png'
import philadelphiaImageSet from '../../images/sets/set_philadelphia.png'
import babushkasImageSet from '../../images/sets/sorry_babushkas.png'
import sushiveslaImageSet from '../../images/sets/sushivesla.png'
import threeImageSet from '../../images/sets/three.png'
import tokyoImageSet from '../../images/sets/tokyo.png'
import twoImageSet from '../../images/sets/two.png'
import uMeImageSet from '../../images/sets/u_and_me.png'
import allImageSet from '../../images/sets/vse-vklyucheno.png'



const backendInfo = [
    {
        bckgndColor: `{ backgroundColor: 'black' }`,
        image: tokyoImageSet,
        title: 'Сет Токио',
        description: 'Калифорния классическая 1, лосось 1, Филадельфия спешл 1/2, зеленая река 1/2, су',
        weight: '636 г. 25 шт.',
        count: '2',
        price: '825'
    },
    {
        bckgndColor: '#efeff4',
        image: krispyImageSet,
        title: 'Сет Криспи',
        description: 'Криспи лосось 1, криспи креветка 1, криспи кальмар 1, суши крем креветка 1, суши',
        weight: '634 г. 24 шт.',
        count: '2',
        price: '799'
    },
    {
        bckgndColor: '#8ed8f7',
        image: familyImageSet,
        title: 'Сет Семейный',
        description: 'Лосось 1, краб 1, Филадельфия спешл 1, Калифорния с лососем 1.',
        weight: '630 г. 28 шт.',
        count: '2',
        price: '779'
    },
    {
        bckgndColor: '#efeff4',
        image: hotImageSet,
        title: 'Hot - Сет',
        description: 'Mr.КрабS 1/2, форест 1/2, луи креветтон 1, суши запеченные с курицей 2.',
        weight: '640 г. 18 шт.',
        count: '2',
        price: '815'
    },
    {
        bckgndColor: '#efeff4',
        image: uMeImageSet,
        title: 'Сет YOU&ME',
        description: 'Cуши лосось 1, суши крем краб 1, суши крем креветка 1, ролл лосось 1, ролл кокте',
        weight: '610 г. 21 шт.',
        count: '2',
        price: '895'
    },
    {
        bckgndColor: '#efeff4',
        image: oneImageSet,
        title: 'Сет №1',
        description: 'Огурец 1/2, лосось 1/2, крейзи чиккен 1/2, форест 1/2.',
        weight: '377 г. 14 шт.',
        count: '1',
        price: '429'
    },
    {
        bckgndColor: '#b2f0a0',
        image: twoImageSet,
        title: 'Сет №2',
        description: 'Калифорния классическая 1/2, Филадельфия спешл 1/2, Калифорния с лососем 1/2, су',
        weight: '382.5 г. 14 шт.',
        count: '1',
        price: '429'
    },
    {
        bckgndColor: '#efeff4',
        image: threeImageSet,
        title: 'Сет №3',
        description: 'Зеленая река 1, краб 1/2, креветка 1/2, суши спайси краб 2.',
        weight: '377 г. 16 шт.',
        count: '1',
        price: '429'
    },
    {
        bckgndColor: '#efeff4',
        image: sushiveslaImageSet,
        title: 'Сет СушиВесла',
        description: 'Филадельфия классическая 1/2, Филадельфия лайт 1/2, Калифорния с лососем 1/2, Ка',
        weight: '1519 г. 52 шт.',
        count: '4',
        price: '1895'
    },
    {
        bckgndColor: '#efeff4',
        image: classicImageSet,
        title: 'Классик сет',
        description: 'Лосось 1, огурец 1, креветка 1, авокадо 1, суши лосось 1, суши креветка 1, суши ',
        weight: '795 г. 28 шт.',
        count: '2',
        price: '795'
    },
    {
        bckgndColor: '#efeff4',
        image: grandCanyonImageSet,
        title: 'Сет Гранд-Каньон',
        description: 'Филадельфия классическая 1, Чиз лосось 1/2, Нью Йорк 1/2, Калифорния классическа',
        weight: '2327 г. 88 шт.',
        count: '7',
        price: '2695'
    },
    {
        bckgndColor: '#efeff4',
        image: grillImageSet,
        title: 'Гриль сет',
        description: 'Филадельфия гриль 1, дабл чиз 1, унаги 1, Сеул гриль 1/2, салмон гриль 1/2.',
        weight: '875 г. 32 шт.',
        count: '3',
        price: '1399'
    },
    {
        bckgndColor: '#efeff4',
        image: moreImageSet,
        title: 'Сет More',
        description: 'Калифорния с креветкой 1, коктейльный 1, луи креветтон 1, креветка 1, краб 1, су',
        weight: '1108 г. 40 шт.',
        count: '3',
        price: '1359'
    },
    {
        bckgndColor: '#efeff4',
        image: philadelphiaImageSet,
        title: 'Сет Филадельфия Love',
        description: ' Филадельфия классическая 1/2, чиз лосось 1/2, Филадельфия спешл 1, горячая Филад',
        weight: '998 г. 35 шт.',
        count: '3',
        price: '1309'
    },
    {
        bckgndColor: '#efeff4',
        image: maymiMamaImageSet,
        title: 'Сет Майами Мама',
        description: 'Филадельфия классическая 1/2, Филадельфия спешл 1, Калифорния классическая 1/2, ',
        weight: '620 г. 24 шт.',
        count: '2',
        price: '755'
    },
    {
        bckgndColor: '#efeff4',
        image: begemotImageSet,
        title: 'Сет Бегемот',
        description: 'Чиз-лосось 1, Калифорния black 1, Филадельфия классическая 1, Калифорния с креве',
        weight: '1164 г. 43 шт.',
        count: '3',
        price: '1659'
    },
    {
        bckgndColor: '#efeff4',
        image: cloudsImageSet,
        title: 'Сет Облака',
        description: 'Филадельфия лайт 1, шиитаке с сыром 1, Нью-Йорк 1, суши крем лосось 2.',
        weight: '709 г. 26 шт.',
        count: '2',
        price: '995'
    },
    {
        bckgndColor: '#efeff4',
        image: babushkasImageSet,
        title: 'Сет Sorry бабушка',
        description: 'Огурец 1, краб 1, чиз лосось 1, Окинава 1, Шри-Ланка 1, Калифорния классическая',
        weight: '1369 г. 55 шт.',
        count: '4',
        price: '1795'
    },
    {
        bckgndColor: '#efeff4',
        image: islandImageSet,
        title: 'Сет Остров',
        description: 'Чиз лосось 1, Окинава 1, огурец 1, лосось 1, краб 1.',
        weight: '760 г. 34 шт.',
        count: '2',
        price: '899'
    },

]

export default function SetsPage() {

    return (
        <section className="sets-page">
            {(backendInfo.map((card, i) =>
                <SetCard
                    bckgndColor={card.bckgndColor}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    weight={card.weight}
                    count={card.count}
                    price={card.price}
                    key={i}

                />))}

        </section>
    )
}