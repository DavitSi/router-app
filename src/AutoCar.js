import React from 'react';
import { Link } from 'react-router-dom';
import { car } from './helpers';

const AutoCar = () => {
    return (
        <div>
            <ul>
                {
                    car.all().map(item => {
                        return (
                            <li key={item.name}>
                                <Link to={`/auto/${item.name}`}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default AutoCar;