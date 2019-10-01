import React from 'react';
import { car } from './helpers';
const CarDetail = (props) => {
    const id = props.match.params.name;
    const data = car.getCarId(id);
    const { name, year, location } = data;

    return (
        <div>
            <ul>
                <li>name -- {name}</li>
                <li>year  -- {year}</li>
                <li>location -- {location}</li>
            </ul>
        </div>
    )
}
export default CarDetail;