import React from 'react';
import { car } from './helpers';
import { logo } from './logo';
import './CarDetail.css';

const CarDetail = (props) => {
    const id = props.match.params.name;
    const data = car.getCarId(id);
    const logoData = logo.getCarLogo(id);
    const { name, year, location } = data;

    return (
        <div className="car-details">
            <img src={logoData} alt="Logo" />
            <ul>
                <li>name -- {name}</li>
                <li>year  -- {year}</li>
                <li>location -- {location}</li>
            </ul>
        </div>
    )
}
export default CarDetail;