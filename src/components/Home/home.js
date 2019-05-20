import React, { Component }  from 'react'
import VideoPlayer from '../video-player/video-player'
import VideoControls from '../video-player/video-control'
import { POPEYEVIDEO, BOSKOS_VIDEO, MOOCHER_VIDEO } from '../../constants/images';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        MOOCHER_VIDEO,
        BOSKOS_VIDEO,
        POPEYEVIDEO
      ],
      arr: [1, 2, 3],
      isTVOn: false,
      currentVideo: 0
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  rotateNext( array , times ) {
    while( times-- ){
      let temp = array.shift();
      array.push( temp )
    }
    this.setState ({
      videos:array
    })
  }
  
   rotatePrev(arr, times) {
    for (let i = 0; i < times; i++) {
      arr.unshift(arr.pop());
    }
    this.setState ({
      videos:arr
     })
}

  handleTVPower(tvState) {
    this.setState={
      isTVOn: tvState
    }
  }

  handleChangeVideo(direction) {
    if (direction === 'next') {
      this.rotateNext( this.state.videos , 1 )
    }
    else {
      this.rotatePrev( this.state.videos , 1 )
    }
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------



  render() {
    const { isTVOn, videos } = this.state;
    return (
      <div className="video-player-home-view">
       <VideoPlayer videoLink={videos[1]} isTVOn={isTVOn}/>
       <VideoControls playVideo={this.handleTVPower} changeVideo={(direction) => this.handleChangeVideo(direction)}/>
      </div>
    );
  }
}


export default (Home);
