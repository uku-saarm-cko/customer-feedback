import React from 'react';
import './index.scss';
import {Reviews} from "../../Reviews";


interface GraphProps {
}

interface IState {
}

class Graph extends React.Component<GraphProps, IState> {
    constructor(props: GraphProps) {
        super(props);
        this.state = {};
    }

    rating(i: number) {
        return Math.round(Reviews.filter(review => review.rating === i + 1).length * 100 / Reviews.length)
    }

    render() {
        return <div className="graph-area">
            <div className="graph-area-container">
                <p>Filter by rating</p>
                {Array.from({length: 5}, (_, i) => (
                    <div key={i} className="rating-row">
                        <span className="label">{i + 1} star</span>
                        <div className="rating-bar">
                            <div className="rating-bar-fill" style={{width: this.rating(i) + "%"}}/>
                        </div>
                        <span>{this.rating(i)} %</span>
                    </div>
                ))}
            </div>
        </div>
    }
}

export default Graph;