import React from 'react';

/**
 * returns an blurred line svg 
 * @param {string} width
 * @param {string} horMargins
 * @constructor
 * @return {JSX} svg element
 */
function LightBar(props) {
    //viewBox="0 0 117 21"
    if (props.width === '100%') {
        return(
            <div className={`bar ${props.margins}`}/>
        )
    }
        return(
            <div className="bar" style={{width: '100px', margin: '0 20px'}}/>
        )
    }

    export default LightBar;