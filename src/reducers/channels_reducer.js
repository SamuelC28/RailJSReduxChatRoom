import { GET_CHANNELS, GET_CHANNEL, ADD_NEWCHANNEL } from '../actions/types';
export default function(state = INITIAL_STATE , action) {

    switch (action.type) {
       case GET_CHANNELS:
            return {
               ...state,
               all: action.payload
                };

        case GET_CHANNEL:
            return {
              ...state,
              single: action.payload
            }; 
            case ADD_NEWCHANNEL:
            return {
              ...state,
              all:[...state.all,action.payload]
            }; 
                
    
    default:
        return state;
    }
}
 



const INITIAL_STATE = { all: [], single: [] };