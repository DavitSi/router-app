import React from 'react';
import { moto } from './helpers';

const MotoDetail = (props) => {
    const id = props.match.params.name;
    const data = moto.getMotoId(id);
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
export default MotoDetail;