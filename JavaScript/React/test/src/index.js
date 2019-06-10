import React from 'react';
import ReactDOM from 'react-dom';
import CounterCreator from './CounterCreator/CounterCreator'

// import PropTypes from 'prop-types';
// import './counter.css';
import Counter from './Counter/Counter'



// const app = ( //app  это типа div
//     <div>
//         <h2>Counter 1</h2>
//         < Counter value={100} step={5}/>
//         <h2>Counter 2</h2>
//         < Counter value={30}/>
//         <h2>Counter 3</h2>
//         < Counter value={40}/>
//     </div>
// );
ReactDOM.render(
    <CounterCreator />,
    document.getElementById('root')
);

