import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getOneChannel } from '../../actions/channelActions';
import Channel from './Channel';
// import Discussion from '../discussions/Discussion';

class SingleChannelShow extends Component {
    componentWillMount() {
    //    debugger
        this.props.getOneChannel(this.props.match.params.id);
       
    }
    render() { 
        
    let { channel } = this.props;
    // let discussions  = this.props.discussion
    //    if (channel === null) return null;

    //    const { match } = this.props;
    //    const channelId = match.params.id;
    //     channel = channel.find(e => e.id === Number(channelId ));

    //    if (!this.props.getOneChannel) {  
    //        return <div>Channel is loading ...</div>
    //    }
    //     return(
    //         <div className="container">
    //            <Channel channel={channel} />
    //         </div>
    //     );   
    // }

       if (channel === {}) {
        return <div> No Channel</div>;
       }
      

    //    const { match } = this.props;
    //    const channelId = match.params.id;
    //     channel = channel.find(e => e.id === Number(channelId ));

    //    if (!this.props.getOneChannel) {  
    //        return <div>Channel is loading ...</div>
    //    }
        return(
            <React.Fragment>
            <div className="container">
               <Channel channel={channel} />
               {/* <Discussion channel={discussions} /> */}
               {/* <Discussion discussion={channel.discussions}/> */}
            </div>
            </React.Fragment>
        );   
    }
}

function mapStateToProps(state) {
    return { channel: state.channels.single};
}
export default connect(mapStateToProps, {getOneChannel})(SingleChannelShow); 