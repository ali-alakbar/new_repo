import React from 'react';

const ImgBox = (props)=> {

    return(
        <div key={props.id} className="imagesContainer">
                <img src={props.img} alt="img" />
                <button className='btn-abs'>Show Image</button>
        </div>
    )

}

export default ImgBox;
