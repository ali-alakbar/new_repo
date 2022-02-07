import React, { Component } from 'react';
import ImgBox from "./boxes/imgBox.portfolio";
import data from '../../js/data.json'
// import img1 from '../../images/Portfolio/portfolio-img1.jpg'
// import img2 from '../../images/Portfolio/portfolio-img2.jpg'
// import img3 from '../../images/Portfolio/portfolio-img3.jpg'
// import img4 from '../../images/Portfolio/portfolio-img4.jpg'
// import img5 from '../../images/Portfolio/portfolio-img5.jpg'
// import img6 from '../../images/Portfolio/portfolio-img6.jpg'
// import img7 from '../../images/Portfolio/portfolio-img7.jpg'
// import img8 from '../../../public/images/Portfolio/portfolio-img1.jpg'

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
                    // console.log(res.image)
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

                            {/* <ImgBox img = {} /> */}
                            
                            {this.mapping(this.state.info)}
                            {/* <ImgBox img = {img1}/>
                            <ImgBox img = {img2}/>
                            <ImgBox img = {img3}/>
                            <ImgBox img = {img4}/>
                            <ImgBox img = {img5}/>
                            <ImgBox img = {img6}/>
                            <ImgBox img = {img7}/>
                            <ImgBox img = {img8}/> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Portfolio;



// import React, { Component } from 'react';
// import ImgBox from "./boxes/imgBox.portfolio";
// import data from '../json_files/data.json'


// class Portfolio extends Component {

//     constructor(){
//         super();
//         this.state = {
//             array : []
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             imges : data.portfolio
//         })
        
//     }


//     mapping(matrix){
//         return(
//             matrix.map( (res, id) => 
//                 <ImgBox
//                 img = {res.image}
//                 id = {id}
//                 />
//             )
//         )
//     }


//     render(){
//         return(
//             <section className='portfolioSection'>
//                 <div className="container">
//                     <div className="specialHeading">
//                         <h1>My Portfolio</h1>
//                     </div>
//                     <div className="otherContent">
//                         <ul>
//                             <li>All</li>
//                             <li>HTML</li>
//                             <li>SASS</li>
//                             <li>ReactJS</li>
//                         </ul>
//                         <div className="boxesContainer">
//                             {this.mapping(this.state.array)}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }

// }


// export default Portfolio;
