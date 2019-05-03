import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <a className="navbar-brand" href="/"><strong>Discussion Forums</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <a className="nav-link" href="/discussions/new"><strong>New Discussion</strong><span className= "btn btn-warning sr-only">(current)</span></a> */}
                <Link to ={`/discussions/new`} className= "btn btn-warning">
                   New Discussion
                </Link>
              </li>
              {/* <div className="float-right"> */}
              <li className="nav-item">
                <Link to ={`/channels/new`} className= "btn btn-info">
                   New Channel
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;