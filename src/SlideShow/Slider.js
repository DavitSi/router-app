import React from 'react';

const Slider = (props) => {
    const data = props.reviewsItem;
    const { firstName, lastName, opinions} = data;
    return (
        <div className="slider__slide">
            <div>
                <h2>{firstName} {lastName}</h2>
                <p>{opinions}</p>
            </div>
        </div>
    )
}
export default Slider;