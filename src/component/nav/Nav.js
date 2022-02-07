import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';


class Nav extends Component{


    constructor(){
        super();
        this.state = {
            switcher : false,
        }
        this.handleSwitcher = this.handleSwitcher.bind(this)
    }

    handleSwitcher(){
        const {switcher} = this.state
        this.setState({
            switcher : !switcher
        })
        let list = document.querySelector(".myList")
        if (switcher === false) {
            list.classList.add("active")
        }else{
            list.classList.remove("active")
        }
    }

        render(){
        return(
            <section className='header'>
                <div className="container">
                    <div className="titleContainer"> 
                        <h1>Ali Portfolio</h1> 
                    </div>
                    <ul className='myList'>
                        <li><a href="../../App.js"> Home    </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                    <div onClick={this.handleSwitcher} className="alignIcon">
                        <FontAwesomeIcon
                            className='icon'
                            icon={this.state.switcher ? faTimes : faAlignJustify}
                        />
                    </div>

                </div>
            </section>
        )
    }
}





export default Nav;

