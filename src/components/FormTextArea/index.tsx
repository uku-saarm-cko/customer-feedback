import React from 'react';
import './index.scss';
import classNames from "classnames";


interface FormTextAreaProps {
    name: string,
}

interface IState {
    hasError: boolean,
    value: string,
}

class FormTextArea extends React.Component<FormTextAreaProps, IState> {
    constructor(props: FormTextAreaProps) {
        super(props);
        this.state = {
            hasError: false,
            value: '',
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            value: event.target.value,
        })
    };

    validateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!this.state.value.length) {
            this.setState({
                hasError: true,
            })
        } else if (this.state.hasError) {
            this.setState({
                hasError: false,
            })
        }
    };

    render() {
        return <div className={classNames('form-element form-element-textarea', {
            'has-error': this.state.hasError,
            'has-value': this.state.value.length
        })}>
            {this.state.hasError && (<p>{this.props.name} is missing</p>)}
            <textarea value={this.state.value} name={this.props.name} onChange={this.handleChange}
                      onBlur={this.validateChange}/>
            <label>{this.props.name}</label>
        </div>
    }
}

export default FormTextArea;