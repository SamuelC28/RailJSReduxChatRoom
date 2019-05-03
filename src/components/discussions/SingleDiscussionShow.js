import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDiscussion } from '../../actions/discussionActions';
import Discussion from './Discussion';




class SingleDiscussionShow extends Component {
    componentDidMount() {
    //    debugger
        this.props.getDiscussion(this.props.match.params.id);
       
    }
    
      
    render() { 
        // debugger
    let discussion  = this.props.discussion;
    // console.log("SINGLE DISCUSSION SHOW:"+JSON.stringify(discussion))
    //debugger;
       if (discussion === {}) {  
           return <div> No Discussion </div>
       }
        return(
            <div className="container">
               <Discussion history={this.props.history} discussion={discussion} />
              
            </div>
        );   
    }
}

function mapStateToProps(state) {
    // debugger
    return { discussion: state.discussion.discussion};
}
export default connect(mapStateToProps, {getDiscussion})(SingleDiscussionShow); 