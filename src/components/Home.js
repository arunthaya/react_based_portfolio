import React from 'react';
import '../App.css';
import Typing from 'react-typing-animation';
import { Parallax, Background } from 'react-parallax';



class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const insideStyles2 = {background : 'rgba(255, 255, 255, 0.75)', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
        const insideStyles = {padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
        return(
            <div className="main-content">
                <Parallax
                    bgImage={require('../images/toronto.jpg')}
                    bgImageAlt="Markham"
                    strength={100}
                    blur={{ min: -15, max: 15}}
                >
                <br/>
                    <div style={{ height: '800px' }}>
                        <div style={insideStyles}>
                            <Typing speed={75} delay={100}>
                                <span className="animatedTitle"><h1>Hi, I'm Arun. I'm from Toronto, and I love to code.</h1></span>
                            </Typing>
                        </div>
                    </div>
                </Parallax>
                <h1></h1>
                <Parallax
                    bgImage={require('../images/carletonu.jpg')}
                    bgImageAlt="Carleton University"
                    strength={200}
                    blur={{ min: -15, max: 15}}
                    >
                    <div style={{ height: '800px'}}>
                        <div style={insideStyles2}>
                            <h1 style={{color: 'black'}}>I am a proud Carleton Computer Science Student, that is graduating this December (2018).</h1>
                        </div>
                    </div>
                </Parallax>
                <h1></h1>
                <Parallax
                    bgImage={require('../images/server.jpg')}
                    bgImageAlt="Servers"
                    strength={200}
                    blur={{ min: -15, max: 15}}
                >
                    <div style={{ height: '800px'}}>
                        <div style={insideStyles2}>
                            <h1 style={{color: 'black'}}>I am currently interested in Servers, Natural Language Processing and a little bit of Front-End Frameworks like React. This website was coded by hand in React!</h1>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default Home;