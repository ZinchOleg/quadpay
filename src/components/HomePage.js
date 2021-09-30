import React from 'react'
import s from './HomePage.module.css'
import data from '../data/data.json'
import {ReactComponent as Icon1} from '../img/1.svg'
import {ReactComponent as Icon2} from '../img/2.svg'
import {ReactComponent as Icon3} from '../img/3.svg'
import {ReactComponent as Icon4} from '../img/4.svg'
import {ReactComponent as Icon5} from '../img/5.svg'
import {ReactComponent as Icon6} from '../img/6.svg'

export default function HomePage() {

    const renderIcon = (id) => {
        switch (id) {
            case 1:
                return <Icon1 />
            case 2:
                return <Icon2/>
            case 3:
                return <Icon3/>
            case 4:
                return <Icon4/>
            case 5:
                return <Icon5/>
            case 6:
                return <Icon6/>
            default:
                break;
        }
    }

    return <>
        <div className={s.heroBg}>
            <div className={`${s.hero} container`}>
                <h1 className={s.heroTitle}>Quadpay anywhere</h1>
                <p className={s.heroDescr}>Shop your favorite brands with the Quadpay app-online or in-store.</p>
            </div>
        </div>
        <div className='container'>
            <h2 className={s.bodyTitle}>
                Partnering with Quadpay
            </h2>
            <ul className={s.cardList}>
                {data.map((card, i) => {
                    return <li className={s.card} key={i}>
                        {renderIcon(card.id)}
                        <h3 className={s.cardTitle}>{card.title}</h3>
                        <p className={s.cardDescr}>{card.descr}</p>
                    </li>
                })}
            </ul>
        </div>
    </>
}
