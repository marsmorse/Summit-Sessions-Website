import React, { useState } from 'react';
import NeonHeader from './text.js';
import { Formik, Form, useField} from 'formik';
import sendContactForm from '../controllers/contactController';
const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="input-cont">
        <label className={`input_label`} htmlFor={props.id || props.name}>{label}</label>
        <input maxLength="26" className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error_text">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
/* const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
*/
  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="input-cont">
        <label as="textarea" className={`input_label`} htmlFor={props.id || props.name}>{`${label} (${field.value.length}/500)`}</label>
        <textarea maxLength="500" id="message" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error_text">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
function ContactForm() {

    let [msgSent, setMsgSent] = useState(false);
    const updateSucess = () => { setMsgSent(true) }
    const validater = values => {
        const errors = {};
      
        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length > 25) {
          errors.name = 'Must be 25 characters or less';
        }  
        if (!values.email) {
          errors.email = 'Required';
        } else if (values.email.length > 25) {
          errors.email = 'Must be 25 characters or less';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
            errors.message = 'Required';
          } else if (values.message.length < 20) {
            errors.message = 'Must include a message at least 20 characters or more';
          }  
        return errors;
      };
      console.log(msgSent);
    return (
        (!msgSent)?
      <Formik
        initialValues={{ email: '', name: '', message: ''}}
        validate={validater}
        onSubmit={(values, { setSubmitting}) => {
            sendContactForm(values, updateSucess);
            setSubmitting(false);
        }}
      >
        <Form>
            <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Jane"
            />
            <MyTextInput
                label="Email"
                name="email"
                type="text"
                placeholder="Jane@gmail.com"
            />
            <MyTextArea
                label="Message"
                name="message"
                type="text"
            />            
            <button type="submit">Submit</button>
        </Form>
      </Formik>:
      <div className="input-cont">
          <h1>Success ✅ </h1>
      </div>
        
    );
};


function Contact() {

        return(
            <div className="about-container">
                <div id="about">
                    <img src="./assets/logo-md.png" alt="Summit Sessions Logo" className="mb-30"/>
                    <div className="about-section-cont">
                        <div className="mt-30 form_cont">
                        <NeonHeader content='CONTACT' size='2'/>
                        <ContactForm/>
                        </div>
                    </div>
                </div>
          </div>
        )
}
export default Contact;