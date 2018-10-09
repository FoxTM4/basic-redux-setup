import React from 'react';
import './textContainer.css';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/reducer';

function TextContainer ( { increment, decrement, number } ) {
    return (
        <div className="text-container--component">
            <h3> value: { number } </h3>
            

            <button onClick={increment}> + </button> 

            <button onClick={decrement}> - </button>
        </div>
    )
}

function mapStateToProps({ number }) {
    return { number }
}

const actionCreators = {
    increment, decrement
}
export default connect(mapStateToProps, actionCreators)(TextContainer)