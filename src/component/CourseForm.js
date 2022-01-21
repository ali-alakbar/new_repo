import React from 'react'


const CourseForm = (props)=>{

    return(
        <form onSubmit={props.adding} action="" className='myForm'>
            <input value={props.currentValue} onChange={props.update} type="text" className='courseInput' placeholder='Enter A Course...' />
            <button type='submit'>Submit</button>
        </form>
    )

}

export default CourseForm

