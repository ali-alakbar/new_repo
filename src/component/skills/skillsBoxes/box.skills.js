import React from 'react';


const Box = (props)=> {

    return(
        <div key={props.id} className={`skill skill-${props.id}`}>
            <span>{props.title}</span>
            <span>{props.percentage}</span>
        </div>
    )

}


export default Box;
