import React, { Component }  from 'react'

class VideoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVideoPlayerOn: false 
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  toggleTVPower() {
    this.setState({
        isVideoPlayerOn: !this.state.isVideoPlayerOn
    }, 
    () => {
        this.props.playVideo(this.state.isVideoPlayerOn);
    })
  }

  handleChangeVideo(event) {
      this.props.changeVideo(event)
  }

  changeVolume() {

  }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
      <div className="player-control-view">
        <div className="line-break"></div>
        <div className="player-control-wrapper">
            <div className="player-control">
                <div className="control-menu">
                    <span className="btn-box icon-plus" role="img" aria-label="" onClick={()=>this.handleChangeVideo('next')}>➕</span>
                    <span role="img" aria-label="">📡</span>
                    <span className="btn-box icon-minus" role="img" aria-label="" onClick={()=>this.handleChangeVideo('prev')}>➖</span>
                </div>
                <div>
                    <span className="btn-box icon-plus" role="img" aria-label="" onClick={()=>this.changeVolume('inc')}>➕</span>
                    <span role="img" aria-label="">🔊</span>
                    <span className="btn-box icon-minus" role="img" aria-label="" onClick={()=>this.changeVolume('dec')}>➖</span>
                </div>
            </div>
            <button type="button" className="btn-box primary-btn" onClick={this.toggleTVPower}>on/off</button>
        </div>
      </div>
    );
  }
}


export default (VideoControl);
