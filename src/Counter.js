import React from 'react'


/**
 * Renders a counter component
 * @component
 * @param {Number} props.nb my number
 * 
 * @example
 * <Counter nb="3"/>
 */
function Counter(props) {
    return (
        <div>
            Cliqué {props.nb} fois
        </div>
    )
}
export default Counter;
