import React from 'react';
import './index.scss';
import {ReactComponent as EmptyStar} from "../../assets/img/star3.svg";
import {ReactComponent as FullStar} from "../../assets/img/star1.svg";


interface RatingDisplayProps {
    rating: number;
}

interface IState {
}

class RatingDisplay extends React.Component<RatingDisplayProps, IState> {
    constructor(props: RatingDisplayProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="rating-display-container">
            <fieldset id="ratingGroup">
                {Array.from({length: 5}, (_, i) => (
                    <span className="star" key={i}>
                        <input id={i.toString()} type="radio" value={i + 1}/>
                        <label id={i.toString()}>
                            {this.props.rating > i ? (
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

export default RatingDisplay;