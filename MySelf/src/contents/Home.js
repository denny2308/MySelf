import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Dennis lopez','I am a web developer']} speed={150} eraseDelay={900}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    