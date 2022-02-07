import React, { Component, Fragment } from 'react';
import Nav from './component/nav/Nav';
import LandingPage from "./component/landing/LandingPage";
import Work from "./component/works/Work"
import Portfolio from "./component/portfolio/Portfolio";
import Skills from "./component/skills/Skills";
import About from "./component/about/About";
import Social from './component/social/Social';
import ContactSection from './component/contact/ContactSection';
import Footer from './component/footer/Footer';



class App extends Component{


    render(){
        return(
            <Fragment>
                <Nav />
                <LandingPage/>
                <Work/>
                <Portfolio/>
                <Skills/>
                <About/>
                <Social/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App
