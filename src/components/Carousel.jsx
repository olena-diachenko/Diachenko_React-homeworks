import React from 'react';
import cn from 'classnames';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            activeImg: this.props.images[0]
        }
    }

    prevHandler = () => {
        let prevImg;
        const prevImgIndex = this.state.images.indexOf(this.state.activeImg);
        prevImgIndex === 0 ? prevImg = this.state.images[this.state.images.length - 1] : prevImg = this.state.images[prevImgIndex - 1]

        this.setState({
            activeImg: prevImg
        });
    }

    nextHandler = () => {
        let nextImg;
        const currentImgIndex = this.state.images.indexOf(this.state.activeImg) + 1;
        currentImgIndex === this.state.images.length ? nextImg = this.state.images[0] : nextImg = this.state.images[currentImgIndex]

        this.setState({
            activeImg: nextImg
        });
    }

    renderItem() {
        const currentClass = cn("carousel-item", "active");
        return (
            <React.Fragment key={Math.floor(Math.random() * 100)}>
                <div className={currentClass}>
                    <img alt="first img" className="d-block w-100" src={this.state.activeImg}></img>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div id="carousel" className="carousel slide container-sm" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.renderItem()}
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.prevHandler}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.nextHandler}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

const arr = []

Carousel.defaultProps = {
    images: ["https://via.placeholder.com/600/92c952", "https://via.placeholder.com/600/771796", "https://via.placeholder.com/600/24f355"]
}

export default Carousel;