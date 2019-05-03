import {GET_REPLIES} from '../actions/types';
export default function(state = INITIAL_STATE , action) {

    switch (action.type) {
       case GET_REPLIES:
            return {
               ...state,
               replies: action.payload
                };
        // case DELETE_REPLY:
        //     return {
        //         ...state,
        //         replies: state.replies.filter(
        //             reply => reply.id !== action.payload
        //           )
        //         };
                

        default:
            return state;
    }
}
 



const INITIAL_STATE = { replies: [], reply: [] };