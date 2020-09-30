import React, { Component } from 'react';
import Scene from '../assets/Mordhau.mp4';
import VideoPop from 'react-video-pop';

const Video = (props) =>{

    return(
        <React.Fragment>
            <div className="Wrapper">
                <VideoPop Src={Scene} mute={true} autoplay={false}  root="video-root" ratio={{w:16,h:9} } />
            </div>
        </React.Fragment>
    );

}
export default Video;