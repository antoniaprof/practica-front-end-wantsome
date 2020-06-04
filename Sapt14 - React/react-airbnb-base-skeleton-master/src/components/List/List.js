import React from "react";
import styles from './List.module.scss';
import Card from './Card/Card'

const apartaments = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZilIDI-psdDUjtLxyupwtNYYWqkyx_S7xBUGNSbU1bCjMoa-e&usqp=CAU',
        type: 'ENTIRE APARTAMENT',
        city: '•ROME',
        name: 'CAMPO DE FIORI',
        rating: '***** 588',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9DOkY6eA2zzr_RUeAVqWdJriPdafNx5h-uUCR0GSDRDYc0A6_&usqp=CAU',
        type: 'ENTIRE APARTAMENT',
        city: '•MINSK',
        name: 'STUDIO MINSK',
        rating: '*****307',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTipwaWSFrfYw0pXCsbNzj-iGZPvG0zKBSwcnIYBEK03_E4rmp&usqp=CAU',
        type: 'ENTIRE COTTAGE',
        city: '•RAMOS',
        name: 'EXCEPTIONAL PROPERTY BEACH PRIVATE',
        rating: '*****',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ-SYVZiMn8wfxLPoXcwLDxMzMK_nEzeZAXInWuYIB-NMPeAx5&usqp=CAU',
        type: 'PRIVATE ROOM',
        city: '•MARRAKESH',
        name: 'THE COZY PALACE',
        rating: '*****552',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUbqYMA0VbxsE1Mi0A2azOH6lRhEOqZvra3uFmzmJMZAkqjJS2&usqp=CAU',
        type: 'TREEHOUSE',
        city: '•VOLCANO',
        name: 'TREEHOUSE AT KILAUAEA VOLCANO',
        rating: '*****379',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZZq30kAM4XcD8gU1keF7Q3ZU8jqYf53lsbX75Sctco3rT601k&usqp=CAU',
        type: 'VERIFIED',
        city: '•FLORENCE',
        name: 'SPLENDIDA CASA sull"ALBERTO',
        rating: '*****412',
        host: ''
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZHoQcnbYcIGgErjgWpKpWTAk5xnap2k2s9Hc7ZUgMKjnL58bP&usqp=CAU',
        type: 'PRIVATE ROOM',
        city: '•CASABLANCA',
        name: 'GREEN OASIS BOUNGAIVILLEA IN CASA',
        rating: '*****461',
        host: '•superhost'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7UCewmWNvuDaufWqE1ntZqN4OSwlYLzqKkmqiz_tB7lCxVgtG&usqp=CAU',
        type: 'CAMPER/RV',
        city: '•WIMBERLEY',
        name: 'SUPER CUTE RETRO AIRSTREAM',
        rating: '*****417',
        host: '•superhost'
    }
]


const List = () => {
    return (
        <section className={styles.list}>
            <h1 className={styles.text}>HOMES AROUND THE WORLD</h1>
            {apartaments.map(apartament => (
                <Card className={styles.card}
                    image={apartament.image}
                    type={apartament.type}
                    city={apartament.city}
                    name={apartament.name}
                    rating={apartament.rating}
                    host={apartament.host} />

            ))}
        </section>
    );
};

// destructure Card
export default List;