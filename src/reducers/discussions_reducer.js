import { GET_DISCUSSIONS, GET_DISCUSSION, ADD_NEWDISCUSSION,ADD_NEWREPLY, DELETE_DISCUSSION} from '../actions/types';

export default function(state = INITIAL_STATE , action) {

    switch (action.type) {
       case GET_DISCUSSIONS:
                return {
                ...state,
                discussions: action.payload
                };

            case GET_DISCUSSION:
                return {
                ...state,
                discussion: action.payload
                }; 

                case ADD_NEWDISCUSSION:
                return {
                ...state,
                discussions: [action.payload, ...state.discussions]
                }; 
                case ADD_NEWREPLY:
                let discussion=action.payload.data
                return {...state,discussion}

                case DELETE_DISCUSSION:
                return {
                ...state,
                discussions: state.discussions.filter(
                    discussion => discussion.id !== action.payload
                  )
                };

                

    default:
        return state;
    }
}
 


  
const INITIAL_STATE = { discussions: [], discussion: [] };




  
  
  
  