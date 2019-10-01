import React from 'react';
import Slide from './Slider';
import './SlideShow.css';
class SlideShow extends React.Component {
    constructor() {
        super();
        this.state = {
            activeSlide: 0
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.handleChangePagination = this.handleChangePagination.bind(this);
    }

    nextSlide() {
        const activeSlide = this.state.activeSlide;
        const customerReviews = this.props.customerReviews
        let slide = activeSlide + 1 < customerReviews.length ? activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide
        });
    }

    previousSlide() {
        const activeSlide = this.state.activeSlide;
        const customerReviews = this.props.customerReviews;
        let slide = activeSlide - 1 < 0 ? customerReviews.length - 1 : activeSlide -1;
        this.setState({
            activeSlide: slide
        });
    }
    handleChangePagination(index) {
        this.setState({
            activeSlide: index
        })
    }
    render() {
        const customerReviews = this.props.customerReviews;
        const activeSlide = this.state.activeSlide;
        // this.autoPlay()
        return (
            <div className="slider">

                <Slide 
                    reviewsItem={customerReviews[activeSlide]}
                    active={activeSlide}
                />
                    
                <div className="pagination">
                    {
                        customerReviews.map((item, index) => {
                           return (
                            <span 
                                key={item.id}
                                onClick={() => this.handleChangePagination(index)}
                                className={index === activeSlide ? 'activePagination': ''}
                            />
                           )
                        })
                    }
                </div>

                <div className="buttonContainer">
                    <div
                        className="slider__next"
                        onClick={this.nextSlide}
                    >
                     &raquo;
                    </div>

                    <div
                        className="slider__previous"
                        onClick={this.previousSlide}
                    >
                    &laquo;
                    </div>
                </div>
            </div>
        )
    }
}
export default SlideShow;
