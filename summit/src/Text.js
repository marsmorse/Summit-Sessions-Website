import React from 'react';
//import '../public/styles/text.css';

function NeonHeader(props) {

//props.headerStyle = altheader or header
//header 
    if (props.size === '1') {
        return(
            <div className="header-cont">
                <h1 className="headerlayer1"> {props.content} </h1>
                <h1 className={`${props.headerColor} headerlayer2`}>{props.content}</h1>
                <h1 className={`${props.headerColor} headerlayer3`}>{props.content}</h1>
            </div>
        )
    } else if (props.size === '2') {
        return(
            <div className="header-cont">
                <h2 className={`${props.headerColor} headerlayer1`}>{props.content}</h2>
                <h2 className={`${props.headerColor} headerlayer2`}>{props.content}</h2>
                <h2 className={`${props.headerColor} headerlayer3`}>{props.content}</h2>
            </div>
        )
    } else if (props.size === '3') {
        return(
            <div className={`ml-${props.ml} header-cont`}>
                <h3 className={`${props.headerColor} headerlayer1`}>{props.content}</h3>
                <h3 className={`${props.headerColor} headerlayer2`}>{props.content}</h3>
                <h3 className={`${props.headerColor} headerlayer3`}>{props.content}</h3>
            </div>
        )
    } else if (props.size === '4') {
        return(
            <div className="header-cont">
                <h4 className={`${props.headerColor} headerlayer1`}>{props.content}</h4>
                <h4 className={`${props.headerColor} headerlayer2`}>{props.content}</h4>
                <h4 className={`${props.headerColor} headerlayer3`}>{props.content}</h4>
            </div>
        )
    } else if (props.size === 'a') {
        return(
            <div className="header-cont mr-20">
                <a className={`${props.headerColor} headerlayer1`} href={props.link}>{props.content}</a>
                <a className={`${props.headerColor} headerlayer2`} href={props.link}>{props.content}</a>
                <a className={`${props.headerColor} headerlayer3`} href={props.link}>{props.content}</a>
            </div>
        )
    } else {
        return(
            <div className="header-cont">
                <h5 className={`${props.headerColor} headerlayer1`}>{props.content}</h5>
                <h5 className={`${props.headerColor} headerlayer2`}>{props.content}</h5>
                <h5 className={`${props.headerColor} headerlayer3`}>{props.content}</h5>
            </div>
        )       
    }
}

export default NeonHeader