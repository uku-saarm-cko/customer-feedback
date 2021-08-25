import React from 'react';
import './index.scss';
import {ReactComponent as EmptyStar} from "../../assets/img/star3.svg";
import {ReactComponent as FullStar} from "../../assets/img/star1.svg";


interface RatingInputProps {
}

interface IState {
    rating: number,
    hoveringRating?: number,
}

class RatingInput extends React.Component<RatingInputProps, IState> {
    constructor(props: RatingInputProps) {
        super(props);
        this.state = {
            rating: 4,
            hoveringRating: undefined,
        };
    }

    setRating = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.rating !== parseInt(event.target.value)) {
            this.setState({
                rating: parseInt(event.target.value),
            })
        }
    }

    render() {
        return <div className="rating-input-container">
            <p>Rate your experience:</p>
            <fieldset id="ratingGroup">
                {Array.from({length: 5}, (_, i) => (
                    <span className="star" key={i}>
                        <input id={i.toString()} type="radio" value={i + 1} name="ratingGroup"
                               onChange={this.setRating}/>
                        <label id={i.toString()} htmlFor={i.toString()}>
                            {this.state.rating > i ? (
                                <FullStar/>
                            ) : (
                                <EmptyStar/>
                            )}
                        </label>
                    </span>
                ))}
            </fieldset>
        </div>
    }
}

export default RatingInput;