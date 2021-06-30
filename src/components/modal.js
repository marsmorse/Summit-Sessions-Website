import React, {useState } from 'react';

function Modal() {
        const [isOpen, setOpen] = useState(true);


        if (isOpen === true) {
            return(
                <div id="modal">
                    
                    <form>
                        <div className='row'>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."></input>
                        </div>
                        <div className='row'>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Your email.."></input>
                        </div>
                        <textarea id="message" name="message" rows="4" cols="50">

                        </textarea>
                        <button> Submit </button>
                    </form>
                </div>
            );
        } else {
            return null;
        }
}
export default Modal;
