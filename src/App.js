import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discussions from './components/discussions/Discussions';
import NewDiscussion from './components/discussions/NewDiscussion'; //import NewDiscussion from './NewDiscussion'
import SingleDiscussionShow from './components/discussions/SingleDiscussionShow';
import NewChannel from './components/channels/NewChannel';
import SingleChannelShow from './components/channels/SingleChannelShow';
import ChannelList from './components/channels/ChannelList';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Navigation />
        
          <div className="container">
            <Switch>
              <Route exact path="/" component={Discussions} />
              <Route exact path="/discussions" component={Discussions} />
              {/* <Route exact path={`/:title"`} component={SingleDiscussionShow} /> */}
              <Route exact path='/discussions/new' component={NewDiscussion} />
              <Route exact path={`/discussions/:id`} component={SingleDiscussionShow} />
              <Route exact path="/channels" component={ChannelList} />
              <Route exact path='/channels/new' component={NewChannel} />
              <Route exact path={`/channels/:id`} component={SingleChannelShow} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;






