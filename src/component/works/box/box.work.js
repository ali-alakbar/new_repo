import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Box = (props)=> {

    return(
        <div key={props.id} className='box'>
            <div className="content">
                <FontAwesomeIcon
                    icon={props.icon}
                    className = "icon"
                />
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    )

}


export default Box;
