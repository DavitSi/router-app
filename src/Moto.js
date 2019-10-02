import React from 'react';
import { Link } from 'react-router-dom';
import { moto } from './helpers';

const Moto = () => {
    return (
        <div>
            <ul>
                {
                    moto.all().map(item => {
                        return (
                            <li key={item.name}>
                                 <Link to={`/moto/${item.name}`}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Moto;