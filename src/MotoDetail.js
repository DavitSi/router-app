import React from 'react';
import { moto } from './helpers';
import { logo } from './logo';
import './MotoDetail.css';

const MotoDetail = (props) => {
    const id = props.match.params.name;
    const data = moto.getMotoId(id);
    const logoData = logo.getMotoLogo(id);
    const { name, year, location } = data;

    return (
        <div className="moto-details">
            <img src={ logoData } />
            <ul>
                <li>name -- {name}</li>
                <li>year  -- {year}</li>
                <li>location -- {location}</li>
            </ul>
        </div>
    )
}
export default MotoDetail;