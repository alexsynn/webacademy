import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Counter.css';

function CounterValue(props) {
    const textClass = props.value > 0 ? 'green' : 'red';
    return (
        <span className={props.value !== 0 ? textClass : ''}>
            Counter value: {props.value}
        </span>
    )
}
// const userName = prompt('name');
// const name =<i>{userName}</i>;
// const age =<u>30</u>;
// const phrase = <h1>Hello my name is {name},  I'm {age}</h1> ;
// ReactDOM.render(
//     phrase,
//     document.getElementById('root')
// );
//------------------------
class Counter extends React.Component {
    // static propTypes = {
    //     value: PropTypes.number,
    //     step: PropTypes.string
    // };

    static defaultProps = {
        value: 0,
        step: 1
    };

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || 0
        };
    }

    increase = () => this.setState({value: this.state.value + this.props.step});

    decrease = () => this.setState({value: this.state.value - this.props.step});

    // increase = () => console.log('increase');
    // decrease = () => console.log('decrease');

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <CounterValue value={this.state.value} />
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Counter;

//------------------
// ReactDOM.render(
//     <Counter/>,
//     document.getElementById('root')