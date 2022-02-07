import React, { Component } from 'react';
import data from '../../js/data.json'
import Box from './skillsBoxes/box.skills'

class Skills extends Component {


    constructor(){
        super();
        this.state = {
            info : [],
        }
    }

    componentDidMount(){
        this.setState({
            info : data.skills
        })
    }

    mapping(matrix){
        return(
            matrix.map( (res, id) => 
                <Box
                key = {id}
                number = {res.id}
                title = {res.title}
                percentage = {res.percentage}
                />
            )
        )
    }

    render(){
            return(
            <section className='skillsSection'>
                <div className="container">
                    <div className="profileInfo">
                        <h1>My <span className='selectedSpanTitle'>Profile</span></h1>
                        <div className='infoSection'>
                            <h3>Name</h3> <span>Ali Akbar</span>
                        </div>
                        <div className='infoSection'>
                            <h3>Birthday</h3> <span>25/03/1997</span>
                        </div>
                        <div className='infoSection'>
                            <h3>Address</h3> <span>India, Bangalore</span>
                        </div>
                        <div className='infoSection'>
                            <h3>Email</h3> <span>ali.akbar@myakbar.com</span>
                        </div>
                        <div className='infoSection'>
                            <h3>Website</h3> <span className='coloredSpan'>myakbar.com</span>
                        </div>
                    </div>
                    <div className="someSkills">
                        <h1><span className='selectedSpan'>Some</span> Skills</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</p>
                        <div className="skills">
                            {this.mapping(this.state.info)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}


export default Skills;
