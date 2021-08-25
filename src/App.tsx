import React from 'react';
import './App.scss';
import FormInput from "./components/FormInput";
import HeaderLogo from "./components/Logo";
import RatingInput from "./components/RatingInput";
import CommentsArea from "./components/CommentsArea";
import CommentsFeatured from "./components/CommentsFeatured";
import Graph from "./components/Graph";
import FormTextArea from "./components/FormTextArea";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderLogo/>
                <p>Feedback form</p>
            </header>
            <div className="body">
                <div className="section-feedback">
                    <div className="inner-wrapper">
                        <div className="section-feedback-intro">
                            <h1>Leave us your feedback</h1>
                            <h2>Let us know what you think about our product and browse what others have written.</h2>
                        </div>
                        <div className="layout-split">
                            <div className="layout-split-left">
                                <form>
                                    <div className="section-inputs">
                                        <FormInput label="Name"/>
                                        <FormInput label="E-mail"/>
                                        <FormTextArea name="Comment"/>
                                        <RatingInput/>
                                    </div>
                                    <button>Submit review</button>
                                </form>
                            </div>
                            <div className="layout-split-right">
                                <CommentsFeatured/>
                            </div>
                        </div>
                    </div>
                    <div className="section-reviews">
                        <div className="inner-wrapper">
                            <div className="inner-wrapper-padded">
                                <div className="layout-split">
                                    <div className="layout-split-left">
                                        <CommentsArea/>
                                    </div>
                                    <div className="layout-split-right">
                                        <Graph/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Contact us at checkout.com</p>
            </footer>
        </div>
    );
}

export default App;
