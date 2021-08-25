import React from 'react';
import './index.scss';
import CommentItem from "../CommentItem";
import {Reviews} from "../../Reviews";


interface CommentsFeaturedProps {
}

interface IState {
}

class CommentsFeatured extends React.Component<CommentsFeaturedProps, IState> {
    constructor(props: CommentsFeaturedProps) {
        super(props);
        this.state = {};
    }

    render() {
        const FeaturedReviews = Reviews.slice(0, 2)
        return <div className="comments-featured">
            <div className="comments-featured-inner">
                {FeaturedReviews.map((review, i) => (
                    <CommentItem
                        key={i}
                        name={review.name}
                        email={review.email}
                        rating={review.rating}
                        comment={review.comment}
                        date={review.date}
                    />
                ))}
            </div>
        </div>
    }
}

export default CommentsFeatured;