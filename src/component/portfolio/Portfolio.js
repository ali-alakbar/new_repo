import React, { Component } from 'react';
import ImgBox from "./boxes/imgBox.portfolio";
import data from '../../js/data.json'

class Portfolio extends Component {

        constructor(){
            super();
            this.state = {
                info : []
            }
        }

        componentDidMount(){
            this.setState({
                info : data.portfolio
            })
            
        }


        mapping(matrix){
            return(
                matrix.map( (res, id) => 
                    <ImgBox
                    img = {require( `${res.image}`) }
                    key = {id}
                    />
                )
            )
        }


        render(){
        return(
            <section className='portfolioSection'>
                <div className="container">
                    <div className="specialHeading">
                        <h1>My Portfolio</h1>
                    </div>
                    <div className="otherContent">
                        <ul>
                            <li>All</li>
                            <li>HTML</li>
                            <li>SASS</li>
                            <li>ReactJS</li>
                        </ul>
                        <div className="boxesContainer">
                            {this.mapping(this.state.info)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Portfolio;

