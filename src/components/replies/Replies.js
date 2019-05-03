import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReply } from '../../actions/discussionActions';
import Discussion from '../../components/discussions/Discussion'
import '../../App.css'

class Replies extends Component {
  componentWillMount(){
    // debugger
  }

  deleteButtonClick = id =>{
    this.props.deleteReply(id)
  }


  renderReplies=(replies)=>{
    //   debugger
    let discussion  = this.props.discussion;
       return replies.map((rep)=>
      
       <li key={rep.id}>  
        <div className="container">
        
         <div className="card card-body mb-3 border-top-0 border-gray">
        {rep.reply}
        {/* <button className="deletebtn" onClick={this.deleteButtonClick.bind(this)}>x</button> */}
        {/* <Discussion key={discussion.id}/> */}
        {/* <Discussion discussionId={discussion.id} /> */}
        <button className="deletebtn" onClick={(e) => this.deleteButtonClick(rep.id)}>x</button>
       
        {/* <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={this.deleteButtonClick.bind(this)}
        /> */}
        </div>
      
        </div>
      
        </li>)
  }

  render() {
    // debugger
    const { replies }=this.props;
    return(
      
      <div><ul>
       <h6 className="text-secondary">
       <strong>{replies.length} Replies </strong>
       </h6>
        {
        (replies.length > 0) ? 
            this.renderReplies(replies)
        :
        "NO REPLIES YET" 
        }
       
        </ul>
      </div>
    )
    }
  }
  

  Replies.defaultProps = {
    replies: []
  };

// const mapStateToProps = state => ({
//   replies: state.reply.replies
// });

export default connect(null, { deleteReply })(Replies);
// 