import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import React, { Component }  from 'react'


class CourseList extends Component{

        constructor(){
        super();
        this.state ={
            isCorrect : false,
        }
        this.isEdit= this.isEdit.bind(this);
        this.newForm= this.newForm.bind(this);
    }

    // A Function to Change The Value of isCorrect Everytime
    isEdit(){
        const {isCorrect} = this.state;
        this.setState({
            isCorrect : !isCorrect
        })
    }

    // Calling The Function uploadNewValue as props
    apply=(e)=>{

        e.preventDefault();
        this.props.uploadNewValue(this.props.index, this.input.value)
        this.isEdit()
    }


    // On Submit Will Call The Function of apply()
    newForm(){
        return(
            <form className="newForm" onSubmit={   this.apply  }>
                <input type="text"  ref={   (v) => { this.input = v  } } defaultValue={this.props.courseName}/>
                <button>Upload</button>
            </form>
        )
    }
    originalForm(){
        return(
            <li >
                {this.props.courseName}
                <div className="leftSide">
                    <button type="submit" onClick={()=>this.isEdit()}>Edit</button>
                    <span className="closeBtns">
                        <FontAwesomeIcon 
                            onClick   =  {() => this.props.removing(this.props.index)} 
                            icon      =  { faTimes  } 
                            className =  'close'>
                        </FontAwesomeIcon>
                    </span>
                </div>
            </li>
        )
    }

    render(){
        return(
            <div>
                { this.state.isCorrect ?  this.newForm()  : this.originalForm()}
            </div>
        )
    }

}

export default CourseList
