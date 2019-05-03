import React from 'react';
// import { Link } from 'react-router-dom';
import Discussion from '../discussions/Discussion';
import PropTypes from 'prop-types';


const Channel = ({ channel}) => (
 
  <div>
    <h3>
      {channel.channel}
      {/* <Discussion discussion={channel.discussions}/> */}
    </h3>
  </div> 
);


Channel.propTypes = {
  channel: PropTypes.object.isRequired,
};

Channel.defaultProps = {
  channel:"No Channel",
};

export default Channel;