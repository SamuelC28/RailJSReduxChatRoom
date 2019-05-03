import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReply } from '../../actions/discussionActions';





 class NewReply extends Component {
     state = {
         reply: " ",
         errors: {}
     };

  onSubmit = e => {
    e.preventDefault();
    
    const {reply } = this.state;

    // do this if any errors
    if (reply === '') {
       this.setState({ errors: {reply: 'your must write something before submission!'}});
       return;
    }

    const discussionId=this.props.discussionId
    // return//
    const newAttempt = {
       reply,
       discussionId
    };
    this.props.addReply(newAttempt);
    //clear out the fields for new input
    this.setState({
        reply:"",
        errors: {}
    });
    //push infos to Discussions page
    // this.props.history.push(`/discussions/:${t}`);

    }

    
    onChange = e => this.setState({[e.target.name]: e.target.value })
    
    render() {
        const { reply, errors} = this.state;
        
        return (
            
            <div className="container">
             <h4 className="text-secondary"><strong>Leave a reply</strong></h4>
           
                <form className="form-group" onSubmit={this.onSubmit}>
                    <strong>**Reply</strong>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                <i className="fas fa-pencil-alt prefix"></i>
                                </span>
                            </div>
                                <textarea className="reply form-control" 
                                    id="reply" 
                                    name="reply" 
                                    value={reply}
                                    onChange={this.onChange}
                                    error={errors.reply}
                                    rows="5">
                                </textarea>
                            </div>
                
                    <div className="form-actions">
                        <input type="submit" value="Leave a reply" className="btn btn-primary" />
                    </div>
                </form>
        </div>
        );
  }
}

// NewReply.propTypes = {
//     addDiscussion: PropTypes.func.isRequired
// }

export default connect(
    null,
    { addReply }
)(NewReply);