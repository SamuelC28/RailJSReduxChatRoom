import { GET_DISCUSSIONS, GET_DISCUSSION,DELETE_REPLY, ADD_NEWDISCUSSION,ADD_NEWREPLY, UPDATE_DISCUSSION, DELETE_DISCUSSION} from '../actions/types';

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
                return {...state,discussion
                };
            case UPDATE_DISCUSSION:
                return {
                  ...state,
                  discussions: state.discussions.map(
                    discussion =>
                      discussion.id === action.payload.id
                        ? (discussion = action.payload)
                        : discussion
                  )
                };

            case DELETE_DISCUSSION:
                return {
                ...state,
                discussions: state.discussions.filter(
                    discussion => discussion.id !== action.payload
                  )
                };
        case DELETE_REPLY:
            return {
                ...state,
                discussion: {...state.discussion,
                    replies: state.discussion.replies.filter(
                    reply => reply.id !== action.payload
                  )}
                };

                

    default:
        return state;
    }
}
 


  
const INITIAL_STATE = { discussions: [], discussion: [] };




  
  
  
  