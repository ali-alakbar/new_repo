import React, { Component } from 'react'
import CourseList from "./component/CourseList";
import CourseForm from "./component/CourseForm";

class App extends Component{

    constructor(){
        super();
        this.state = {
            info : [
                { courseName : "HTML"},
                { courseName : "CSS" },
                { courseName : "JS"  },
            ],

            currentValue : "",
        }

        this.update = this.update.bind(this)
        this.adding = this.adding.bind(this)
        this.removing = this.removing.bind(this)
        this.uploadNewValue = this.uploadNewValue.bind(this)
    }

    // Map Through The State Array
    mapping(matrix){
        const checking = matrix.length ? 
        matrix.map(
            (res, id)=> {
                return(
                <CourseList 
                courseName     = {res.courseName}
                key            = {id}
                removing       = {this.removing}
                index          = {id}
                uploadNewValue = {this.uploadNewValue}
                />
                )}
        )
        :
            <h1 className='warnning'>There Is No Info To Show ...</h1>;
        return checking
    }

    // Initilize The State Key (currentValue)
    update(e){
        this.setState({
            currentValue : e.target.value
        })
    }

    // Adding The State Key (currentValue) Within info
    adding(e){
        e.preventDefault()
        const {info} = this.state;
        const {currentValue} = this.state
        if (currentValue.trim().length !==0) {
            info.push( { 
                courseName : currentValue 
            });
            this.setState({
                info ,
                currentValue : ""
            })
        }else{
            alert("Fill The Required Fields")
        }
    }

    // Removing an Array Element by Their Index 
    removing(index){
        const {info} = this.state;
        info.splice(index,1)
        this.setState({
            info
        })

    }

    // Detect the Array Element By Their Index And Add The Argument [ value ] To It
    uploadNewValue(index, value){
        const {info} = this.state;
        const courseName = info[index];
        courseName['courseName'] = value;
        this.setState({
            info
        })
        
    }

    render(){
        return(
            <div className='container'>
                <div className='special-heading'>
                    <h1>CRUD With React</h1>
                </div>
                    <CourseForm 
                    currentValue = {this.state.currentValue} 
                    adding       = {this.adding}  
                    update       = {this.update}
                    />

                <ul>
                    {this.mapping(this.state.info)}
                </ul>
            </div>
        )
    }
}

export default App

