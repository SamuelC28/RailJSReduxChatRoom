import { combineReducers } from 'redux';
import discussionReducer from './discussions_reducer';
import channelReducer from './channels_reducer';
import replylReducer from './replies_reducer';
// import {reducer as formReducer} from 'redux-form';


const allReducers = combineReducers({
  discussion: discussionReducer,
  channels: channelReducer,
  reply: replylReducer,
  // form: formReducer
});

export default allReducers;