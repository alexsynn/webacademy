import React from 'react';
import Counter from '../Counter/Counter';

export default class CounterCreator extends React.Component {
    constructor() {
        super();

        this.state = {
            currentValue: '',
            currentStep: '',
            countersList: []
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.currentValue && this.state.currentStep) {
            const counterModel = {
                value: parseInt(this.state.currentValue),
                step: parseInt(this.state.currentStep)
            };

            this.setState({
                currentValue: '',
                currentStep: '',
                countersList: [
                    ...this.state.countersList,
                    counterModel
                ]
            });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Value:
                        <input
                            type='number'
                            value={this.state.currentValue}
                            onChange={event => {
                                this.setState({currentValue: event.target.value});
                            }}/>
                    </label>
                    <label>
                        Step:
                        <input
                            type='number'
                            value={this.state.currentStep}
                            onChange={event => {
                                this.setState({currentStep: event.target.value});
                            }}/>
                    </label>
                    <button type='submit'>Add counter</button>
                </form>
                <ul className='counters'>
                    {this.state.countersList.map((counterProps, index) => {
                        return (
                            <li key={index}>
                                <b>Counter #{index + 1}</b>
                                <Counter {...counterProps}/>
                            </li>
                        )
                    })}
                    <li>
                        Counters: {this.state.countersList.length}
                    </li>
                </ul>
            </div>
        )
    }
}