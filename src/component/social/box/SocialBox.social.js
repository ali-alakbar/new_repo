import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialBox = (props)=> {

    return(
        <div key={props.id} className={`box ${props.social.toLowerCase()}`}>
            <div className="socialIconContainer">
                <FontAwesomeIcon
                    className={'icon'}
                    icon={props.icon}
                />
            </div>
            <div className="moreContent">
                <h3>{props.title}</h3>
                <p>{props.social}</p>
            </div>
        </div>
    )

}


export default SocialBox;
