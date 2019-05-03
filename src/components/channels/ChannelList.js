import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getChannelList } from '../../actions/channelActions';




class ChannelList extends Component {
  componentWillMount(){
    // debugger]
    
    this.props.getChannelList();
  }

  renderChannels=(channels)=>{
    
    if(channels){
      return channels.map((chan)=>
     
       <Link key={chan.id} to={`/channels/${chan.id}`}>
        <li><strong>{chan.channel}</strong></li>
      </Link>)
      
    }else{
      return "NO CHANNELS YET"
    } 
  }



  
   

  render() {
   
    const { channels }=this.props;
    return(
      <div>
        <ul>
        {this.renderChannels(channels)}    
        </ul>
      </div>
    )
    }
  }

const mapStateToProps = state => ({
  channels: state.channels.all
});


export default connect(mapStateToProps, {getChannelList})(ChannelList);





