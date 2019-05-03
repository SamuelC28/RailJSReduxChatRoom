import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addChannel } from '../../actions/channelActions';



 class NewChannel extends Component {
     state = {
         channel: " ",
         errors: {}
     };

  onSubmit = e => {
    e.preventDefault();
    
    const { channel } = this.state;

    // do this if any errors
    if (channel === '') {
       this.setState({ errors: {channel: 'You must enter a channel!'}});
       return;
    }

    const newAttempt = {
        channel
    };
    this.props.addChannel(newAttempt);
    //clear out the fields for new input
    this.setState({
        channel: "",
        errors: {}
    });
    //push infos to Discussions page
    this.props.history.push(`/`);

    }

    
    onChange = e => this.setState({[e.target.name]: e.target.value })
    
    render() {
        const { channel, errors} = this.state;
        if (channel === '') {
            this.setState({ errors: {channel: 'You must enter a channel!'}});
            return;
         }
        
        return (

            
        <div className="card mb-3">
            <h2 className="card-header">New Channel</h2>
            
            <div className="card-body">
                <form className="form-group" onSubmit={this.onSubmit}>
               
                    <div className="col col-lg">
                        <strong>Channel:</strong>
                        <input className="form-control" type="text"  id="channel" name="channel" placeholder="Channel"
                        value={channel}
                        onChange={this.onChange} error={errors.channel} />
                    </div>
                        

                        
                   <br/>
                    <div className="form-actions">
                        <input type="submit" value="Add New Channel" className="btn btn-info" />
                    </div>
                </form>
          </div>
        </div>
        );
  }








}

// NewChannel.propTypes = {
//     addChannel: PropTypes.func.isRequired
// }

export default connect(
    null,
    { addChannel }
)(NewChannel);