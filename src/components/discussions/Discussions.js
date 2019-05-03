import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDiscussions, deleteDiscussion  } from '../../actions/discussionActions';
import ChannelList from '../channels/ChannelList';
// import { ADD_NEWREPLY } from '../../actions/types';

// import NewDiscussion from './Discussion'




class Discussions extends Component {
  // static contextType = {
  //   router: PropTypes.object
  // }

  componentWillMount(){
    this.props.getDiscussions();
  }

  deleteButtonClick = id =>{
    this.props.deleteDiscussion(id)
  //   .then(() => {
  //     this.context.router.push("/");
  // })
  }
  renderChannels() {
      const { channel } = this.props;
        return(
          <ChannelList channel={channel} />
        )
  }

  renderDiscussions() {
    return this.props.discussions.map((discussion) => {
      return(
       
        <ul key={discussion.id}>
          <Link to ={`/discussions/${discussion.id}`}>
           <h6><strong>{discussion.title}</strong></h6>
          </Link>
          <p> {discussion.content}
          <button className="deletebtn" onClick={(e) => this.deleteButtonClick(discussion.id)}>x</button>
          </p> 
         
       </ul>
      )
    });
  }
  

  


  render() {
        
    return (
      <React.Fragment>
        <div className="card2 card mb-6">
          <h4 className="card-header text-secondary"><strong>Recent discussions</strong></h4>
            <div className="card-body">
        
              <section className="discussionList">
                <ul>{this.renderDiscussions()}</ul>
              </section>
            </div>
        </div>
        <div className="channel-pos"></div>
        <div className="card3 card mb-6">
            <section className="channel">
              <h5 className="card-header text-secondary"><strong>Channels</strong></h5> 
              <ul>{this.renderChannels()}</ul>
            </section>
         </div>
       
      </React.Fragment>
    );
  }
}


Discussions.propTypes = {
  discussions: PropTypes.array.isRequired,
  getDiscussions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  discussions: state.discussion.discussions
});

export default connect(mapStateToProps, { getDiscussions, deleteDiscussion })(Discussions);








