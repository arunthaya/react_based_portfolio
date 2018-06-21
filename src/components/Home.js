import React from 'react';
import '../App.css';
import Typing from 'react-typing-animation';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main-content">
                <Typing>
                    <span className="animatedTitle"><h1>This span will get typed.</h1></span>
                </Typing>
            </div>
        );
    }
}

export default Home;