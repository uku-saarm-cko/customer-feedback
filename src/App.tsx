import React, {useState} from 'react';
import './App.scss';
import FormInput from "./components/FormInput";
import HeaderLogo from "./components/Logo";
import RatingInput from "./components/RatingInput";
import CommentsArea from "./components/CommentsArea";
import CommentsFeatured from "./components/CommentsFeatured";
import Graph from "./components/Graph";
import FormTextArea from "./components/FormTextArea";

function App() {
    const [isSubmitted, submit] = useState(false);
    function trySubmit() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        submit(!isSubmitted);
    }
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
                            {!isSubmitted ? (
                                <React.Fragment>
                                    <h1>Leave us your feedback</h1>
                                    <h2>Let us know what you think about our product and browse what others have written.</h2>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <h1>Thank You!</h1>
                                    <h2>Your opinion matters to us and we are grateful that you decided to share it with us.</h2>
                                </React.Fragment>
                            )}
                        </div>
                        {!isSubmitted && (
                            <div className="layout-split">
                                <div className="layout-split-left">
                                        <form>
                                            <div className="section-inputs">
                                                <FormInput label="Name"/>
                                                <FormInput label="E-mail"/>
                                                <FormTextArea name="Comment"/>
                                                <RatingInput/>
                                            </div>
                                            <button onClick={trySubmit}>Submit review</button>
                                        </form>
                                </div>
                                <div className="layout-split-right">
                                    <CommentsFeatured/>
                                </div>
                            </div>
                        )}
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
