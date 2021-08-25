import React from 'react';
import './index.scss';
import CommentItem from "../CommentItem";
import {Reviews} from "../../Reviews";


interface CommentsAreaProps {
}

interface IState {
}

class CommentsArea extends React.Component<CommentsAreaProps, IState> {
    constructor(props: CommentsAreaProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="comments-area">
            <div className="comments-area-inner">
                {Reviews.map((review, i) => (
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

export default CommentsArea;