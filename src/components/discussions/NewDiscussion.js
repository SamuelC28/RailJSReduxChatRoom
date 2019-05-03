import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDiscussion } from '../../actions/discussionActions';
// import ChannelList from '../channels/ChannelList'
// import Select from 'react-select'; 
// import Select from '.Select'; 
// import 'bootstrap/dist/css/bootstrap.min.css'; 


// const options = [{value: 2, label: 'chocolate'}, {value: 3, label: 'cookie'} ]

 class NewDiscussion extends Component {
     state = {
         title: " ",
         content: " ",
         selectedOption: null,
         errors: {}
     };

  onSubmit = e => {
    e.preventDefault();
    
    const { title, content } = this.state;

    // do this if any errors
    if (title === '') {
       this.setState({ errors: {title: 'You must enter a title!'}});
       return;
    }

    if (content === '') {
        this.setState({ errors: {content: 'You must enter a content!'}});
       return;
    }
    // return//
    const newAttempt = {
        title,
        content
    };
    this.props.addDiscussion(newAttempt);
    //clear out the fields for new input
    this.setState({
        title: "",
        content: "",
        errors: {}
    });
    //push infos to Discussions page
    this.props.history.push("/");

    }

    
    onChange = e => this.setState({[e.target.name]: e.target.value })
    
    render() {
        const { title, content, errors} = this.state;
        // const options = <ChannelList />
        if (title === '') {
            this.setState({ errors: {title: 'You must enter a title!'}});
            return;
         }

        
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
                    <div className="container">
                        {/* <div className="row"> 
                         <div className="col-md-4"></div> 
                            <div className="col-md-4"> 
                             <Select 
                               name={options}
                            //    id={id}
                               options={options}
                               value={selectedOption}
                               onChange={this.onChange} error={errors.content} /> 
                            </div> 
                        <div className="col-md-4"> */}
                    {/* </div> 
                        </div>  */}
                        </div>
                        
                   <br/>
                    <div className="form-actions">
                        <input type="submit" value="Add New Discussion" className="btn btn-warning" />
                    </div>
                </form>
          </div>
        </div>
        );
  }
  
}

NewDiscussion.propTypes = {
    addDiscussion: PropTypes.func.isRequired
}

export default connect(
    null,
    { addDiscussion }
)(NewDiscussion);