import SocialBox from "./box/SocialBox.social";
import React, { Component } from 'react';
import data from '../../js/data.json'

class Social extends Component {

    constructor(){
        super();
        this.state = {
            info : [],
        }
    }

    componentDidMount(){
        this.setState({
            info : data.social
        })
    }

    mapping(matrix){
        return(
            matrix.map( (res, id) =>
                <SocialBox
                key     = {id}
                icon    = {require("@fortawesome/free-brands-svg-icons")[data.social[id].icon]}
                title   = {res.title}
                social  = {res.body}
                />
            )
        )
    }


    render(){
        return(
            <section className='socialSection'>
                <div className="boxesContainer">
                    {this.mapping(this.state.info)}
                </div>
            </section>
        )
    }

}


export default Social;
