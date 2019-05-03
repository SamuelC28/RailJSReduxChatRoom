import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (

  //     <nav class="navbar navbar-color-r">
	// 	<div class="container-fluid">
	// 		<div class="navbar-header">
	// 			<button class="btn navbar-toggle" data-toggle="collapse" data-target="#my">
	// 			<span class="icon-bar"></span>
	// 			<span class="icon-bar"></span>
	// 			<span class="icon-bar"></span>
	// 			</button>
  //       <a className="navbar-brand" href="/"><strong>Discussion Forums</strong></a>
	// 		</div>
	// 		<div class="collapse navbar-collapse" id="my">
	// 			<ul class="nav navbar-nav navbar-right ul2">
	// 				<li class="c1"><a class="active" href="#">home</a></li>
	// 				<li><a href="#">home</a></li>
	// 				<li><a href="#">home</a></li>
	// 				<li><a href="#">home</a></li>
	// 				<li><a href="#">home</a></li>
	// 			</ul>
	// 		</div>
	// 	</div>
	// </nav>



      <nav className="navbar navbar-expand-lg navbar-color-r">
       
        <a className="navbar-brand" href="/"><strong>Anonymous Discussion</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                {/* <a className="nav-link" href="/discussions/new"><strong>New Discussion</strong><span className= "btn btn-warning sr-only">(current)</span></a> */}
                <Link to ={`/discussions/new`} className="navbar-nav navbar-right"><strong> New Discussion </strong></Link>
              </li>
              {/* <div className="float-right"> */}
              {/* <ul class="nav pullRight">
              <li className="nav-item">
                <Link to ={`/channels/new`} className= "btn btn-info">
                   New Channel
                </Link>
              </li>
             </ul> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}








export default Navigation;