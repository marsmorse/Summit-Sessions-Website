import React from 'react';
import { Link } from 'react-router-dom';
//import '../public/styles/text.css';

function NeonHeader(props) {
    if (props.size === '1') {
        return(
            <div className="header-cont">
                <h1 className={`${props.color} ${props.margins} headerlayer1`}> {props.content} </h1>
                <h1 className={`${props.color} ${props.margins} headerlayer2`}>{props.content}</h1>
                <h1 className={`${props.color} ${props.margins} headerlayer3`}>{props.content}</h1>
            </div>
        )
    } else if (props.size === '2') {
        return(
            <div className="header-cont">
                <h2 className={`${props.color}l1 ${props.margins} headerlayer1`}>{props.content}</h2>
                <h2 className={`${props.color}l2 ${props.margins}  headerlayer2`}>{props.content}</h2>
                <h2 className={`${props.color}l3 ${props.margins}  headerlayer3`}>{props.content}</h2>
            </div>
        )
    } else if (props.size === '3') {
        return(
            <div className={`header-cont`}>
                <h3 className={`${props.color}l1 ${props.margins}  headerlayer1`}>{props.content}</h3>
                <h3 className={`${props.color}l2 ${props.margins}  headerlayer2`}>{props.content}</h3>
                <h3 className={`${props.color}l3 ${props.margins}  headerlayer3`}>{props.content}</h3>
            </div>
        )
    } else if (props.size === '4') {
        return(
            <div className="header-cont">
                <h4 className={`${props.color}l1 ${props.margins}  headerlayer1`}>{props.content}</h4>
                <h4 className={`${props.color}l2 ${props.margins}  headerlayer2`}>{props.content}</h4>
                <h4 className={`${props.color}l3 ${props.margins}  headerlayer3`}>{props.content}</h4>
            </div>
        )
    } else if (props.size === 'a') {
        return(
            <div className="header-cont">
                <a className={`${props.linkSize} ${props.color}l1 ${props.margins} headerlayer1`} target="_blank" rel="noopener noreferrer" href={props.link}>{props.content}</a>
                <a className={`${props.linkSize} ${props.color}l2 ${props.margins} headerlayer2`} target="_blank" rel="noopener noreferrer" href={props.link}>{props.content}</a>
                <a className={`${props.linkSize} ${props.color}l3 ${props.margins} headerlayer3`} target="_blank" rel="noopener noreferrer" href={props.link}>{props.content}</a>
            </div>
        )
    } else if (props.size === 'link') {
        return(
            <div onClick={props.click_behavior} className="header-cont a-big">
                <Link className={`${props.color}l1 ${props.margins} headerlayer1`} to={props.link}>{props.content}</Link>
                <Link className={`${props.color}l2 ${props.margins} headerlayer2`} to={props.link}>{props.content}</Link>
                <Link className={`${props.color}l3 ${props.margins} headerlayer3`} to={props.link}>{props.content}</Link>
            </div>
        )
    } else {
        return(
            <div className="header-cont">
                <h5 className={`${props.color}l1 headerlayer1`}>{props.content}</h5>
                <h5 className={`${props.color}l2 headerlayer2`}>{props.content}</h5>
                <h5 className={`${props.color}l3 headerlayer3`}>{props.content}</h5>
            </div>
        )       
    }
}

export default NeonHeader