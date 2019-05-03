import React from 'react';
import NewReply from './NewReply'

// import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
import Replies from '../replies/Replies';
// import { connect } from 'react-redux';

// onDeleteClick =reply => {
//   this.props.deleteReply(reply);
// }

const Discussion = ({ discussion,history }) => {
  // debugger;
  return (
  <div className="container">
    <h2 className="text-secondary">
      <strong>
      {discussion.title}
      </strong>
    </h2>
    <h5 className="text-success">
      <strong>
      {discussion.content}
      </strong>  
    </h5>
    <Replies replies={discussion.replies}/>
   
    <NewReply discussionId={discussion.id} history={ history }/>
  </div>)
}

// Discussion.propTypes = {
//   discussion: PropTypes.object.isRequired,
// };

Discussion.defaultProps = {
  discussion: {title:"No Title",content:"No Content",replies:[]},
};

export default Discussion;


