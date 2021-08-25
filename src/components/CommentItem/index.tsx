import React from 'react';
import './index.scss';
import RatingDisplay from "../RatingDisplay";

interface CommentItemProps {
    name: string;
    email: string;
    rating: number;
    comment: string;
    date: string;
}

interface IState {
}

class CommentItem extends React.Component<CommentItemProps, IState> {
    constructor(props: CommentItemProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="comment-item">
            <div className="comment-item-name">{this.props.name}</div>
            <div className="comment-item-date">{this.props.date}</div>
            <div className="comment-item-rating">
                <p className="rating-number">{this.props.rating} / 5</p>
                <RatingDisplay rating={this.props.rating}/>
            </div>
            <div className="comment-item-comment">"{this.props.comment}"</div>
        </div>
    }
}

export default CommentItem;