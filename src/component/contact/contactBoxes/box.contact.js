import React from 'react';
import { Fragment } from 'react/cjs/react.development';

const Box = ()=>{
    return(
        <Fragment>
                <div className="specialHeading">
                    <h1>Contact Me</h1>
                </div>

                <form action="">
                    <input type="text" placeholder='Enter Your Name...' />
                    <input type="email" placeholder='Enter Your Email...' />
                    <input type="text" placeholder='Enter Your Subject...' />
                    <textarea type="text" className="myTextArea" placeholder="Message" required="required" ></textarea>
                    <button>Send</button>
                </form>
        </Fragment>
    )
}

export default Box