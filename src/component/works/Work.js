import React, { Component }  from 'react';
import Box from "./box/box.work";
import data from '../../js/data.json'
class Work extends Component{

    constructor(){
        super();
        this.state = {
            work : [],
        }
    }

    componentDidMount(){
        this.setState({
            work : data.works
        })
        
    }

    mapping(matrix){
        return( matrix.map( (res, id) => 
                <Box icon= {require("@fortawesome/free-solid-svg-icons")[data.works[id].icon]} 
                    title = {res.title}
                    body = {res.body}
                    key = {id}
                />
        )
    )

    }


    render(){

        return(
            <section className='workSection'>
                <div className="container">
                    <div className="specialHeading">
                        <h1>My Works</h1>
                    </div>
                    <div className="boxesContainer">
                        {this.mapping(this.state.work)}
                    </div>
                </div>
            </section>
    )
    }

}


export default Work;
