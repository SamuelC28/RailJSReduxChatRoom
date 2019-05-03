import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDiscussion, updateDiscussion} from '../../actions/discussionActions';

class EditDiscussion extends Component {
    state = {
      title: '',
      content: '',
      errors: {}
    };
  
    componentWillReceiveProps(nextProps, nextState) {
      const { title, content } = nextProps.discussion;
      this.setState({
        title,
        content
      });
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getDiscussion(id);
      }

      onSubmit = e => {
        e.preventDefault();
    
        const { title, content} = this.state;
    
        // Check For Errors
        if (title === '') {
          this.setState({ errors: { title: 'title is required' } });
          return;
        }
    
        if (content === '') {
          this.setState({ errors: {content: 'content is required' } });
          return;
        }
        const { id } = this.props.match.params;
    
        const updDIscussion = {
          id,
          title,
          content
        };
    
        this.props.updateDiscussion(updDIscussion);
    

        // Clear State
        this.setState({
          title: '',
          content: '',
          errors: {}
        });
    
        this.props.history.push('/');
      };
      onChange = e => this.setState({[e.target.name]: e.target.value })

      render() {
        const { title, content, errors} = this.state;
        
        return (
        <div className="card mb-3">
            <h2 className="card-header">New discussion</h2>
            
            <div className="card-body">
                <form className="form-group" onSubmit={this.onSubmit}>
               
                    <div className="col col-lg">
                        <strong>Title:</strong>
                        <input className="form-control" type="text"  id="title" name="title" placeholder="Title"
                        value={title}
                        onChange={this.onChange} error={errors.title} />
                    </div>
                        
                    <div className="col col-lg">
                        <strong>Content:</strong>
                        <textarea className="form-control"
                           id="content" name="content" placeholder="Content"
                           value={content}
                           onChange={this.onChange} error={errors.content}>
                        </textarea>
                    </div>
                        
                   <br/>
                    <div className="form-actions">
                        <input type="submit" value="Update Discussion" className="btn btn-info" />
                    </div>
                </form>
          </div>
        </div>
        );
  }
  
}

// EditDiscussion.propTypes = {
//     discussion: PropTypes.object.isRequired,
//     getDiscussion: PropTypes.func.isRequired
//   };
  
  const mapStateToProps = state => ({
    discussion: state.discussion.discussion
  });
  
  export default connect(
    mapStateToProps,
    { getDiscussion, updateDiscussion }
  )(EditDiscussion);
