import React, { Component } from 'react';
import '../scss/hotel.scss';
import hotelexterior from '../assets/hotelexterior.jpg';

class HHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: {
                cover: hotelexterior,
                title: 'Hilton Chicago',
                address: '720 South Michigan Avenue',
                city: 'Chicago',
                state: 'Illinois',
                zip: '60605',
                phone: '1-312-922-4400'
            },
            links: [ 'Map', 'Photo gallery', 'Amenities', 'Rooms']
        }
    }

    render() {
        const { hotel, links } = this.state;
        return (
            <main className="hotel" itemScope itemType="http://schema.org/Hotel">
                <article>
                    <section>
                        <figure className="hotel_cover">
                            <img src={hotel.cover} alt={hotel.title} itemProp="photo" />
                        </figure>
                        <h2 className="hotel_title" itemProp="name">{hotel.title}</h2>
                        <address className="hotel_address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                            <span itemProp="streetAddress">{hotel.address}</span><br />
                            <span itemProp="addressLocality">{hotel.city}</span>,&nbsp;
                            <span itemProp="addressRegion">{hotel.state}</span>,&nbsp;
                            <span itemProp="postalCode">{hotel.zip}</span>
                        </address>
                        <a className="hotel_contact" href={`tel:` + hotel.phone} target="_blank" itemProp="telephone">{hotel.phone}</a>
                    </section>
                    <nav className="hotel_links">
                        {links.map((link, k) => <HotelLink key={k} label={link} />)}
                    </nav>
                </article>
            </main>
        );
    }
}

export default HHotel;

function HotelLink(props) {
    const {label} = props;
    return (
        <a className="hotel_link">
            {label}
        </a>
    );
}