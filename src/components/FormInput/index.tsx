import React from 'react';
import classNames from "classnames";
import './index.scss';


interface FormInputProps {
    label: string,
}

interface IState {
    label: string,
    value: string,
    hasError: boolean,
}

class FormInput extends React.Component<FormInputProps, IState> {
    constructor(props: FormInputProps) {
        super(props);
        this.state = {
            value: '',
            label: '',
            hasError: false,
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value,
        })
    };

    validateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        const inputId = this.props.label.replace(/ /g, '');
        return <div className={classNames('form-element form-element-input', {
            'has-error': this.state.hasError,
            'has-value': this.state.value.length
        })}>
            {this.state.hasError && (<p>{this.props.label} is missing</p>)}
            <input id={inputId} value={this.state.value} onChange={this.handleChange} onBlur={this.validateChange}/>
            <label htmlFor={inputId}>{this.props.label}</label>
        </div>
    }
}

export default FormInput;
