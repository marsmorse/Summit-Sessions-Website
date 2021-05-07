import React, { useState } from 'react';
import { LabelErrors, Errors } from './inputerrors'
function validateInput(input_name, value, min, max) {
    //runs an input's tests and returns an array of error messages. if empty no error exist with the input
    let err_msgs = [];
    LabelErrors[input_name].forEach((v) => {
        console.log(Errors["tests"][v](value, min, max));
        if (!Errors["tests"][v](value, min, max)) err_msgs.push(Errors.messages[v]);
    })
    console.log(err_msgs);
    return LabelErrors[input_name].reduce(function(acc, ele) {
        if (Errors.tests[ele](value, min, max)) acc.push(Errors.messages[ele]);
        console.log(acc);
        return acc;
    }, []);
    //return err_msgs;
}
function Input(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState({ status:false, list:[]});

    let handleChange = function(event) {
        setValue(event.target.value);
        event.preventDefault();
    }
    let handleFocus = function() {
        setError({status:false, list:[]});
    }
    let handleBlur = function(event) {
        event.preventDefault();
        let errList = [];
        //errors exist
        if ((errList = validateInput(props.label, event.target.value, props.min, props.max)).length) {
            console.log(errList);
            setError({status:true, list:[errList]});
            setValue('');
        } 
        console.log(errList)
    }

    return(
        <div className="input_cont">
            <label className={`input_label ${ (error.status === true)? "label_err": null }`}> 
                <span className="label_text"> {props.label} </span>
            </label>
            <input 
                {...props} 
                placeholder={props.placeholder}
                className={`input ${ (error.status === true)? "input_err": null }`}
                defaultValue={props.defaultValue}
                value={value}
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                type="text"
                required={true}
            />
            { (error.status === true)? <p className="error_text">{error.list.pop()}</p>: null }
        </div>
        
    )
}
export default Input;