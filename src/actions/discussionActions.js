
import {GET_DISCUSSIONS, GET_DISCUSSION, ADD_NEWDISCUSSION, ADD_NEWREPLY, DELETE_REPLY, DELETE_DISCUSSION, UPDATE_DISCUSSION} from './types';
import axios from 'axios';
// import discussions_reducer from '../reducers/discussions_reducer';
    const API_URL = 'http://localhost:3000';


 export function getDiscussions(){
     return (dispatch) => {
         dispatch({type: 'DATA_LOADING'})

         return fetch(`${API_URL}/discussions`).then(res => res.json())
         .then(json =>{
          // console.log(json)
             return dispatch({
                 type: GET_DISCUSSIONS,
                 payload: json
               });
         }).catch(error => console.log(error));
     }
  
}



export function getDiscussion(id) {
  return (dispatch) => {
      dispatch({type: 'DATA_LOADING'})

  return fetch(`${API_URL}/discussions/${id}`).then(res => res.json())
  .then(json=>{
      return dispatch({
          type: GET_DISCUSSION,
          payload: json
          
          
        });
  }).catch(error => console.log(error));

  
 
  };
}

export const addDiscussion = discussion => async dispatch => {
    const res = await axios.post(`${API_URL}/discussions`, discussion);
    console.log(res.data)
    dispatch({
      type: ADD_NEWDISCUSSION,
      payload: res.data
    });
  };

  export const addReply = reply => async dispatch => {
    // console.log("AXIOS REPLY:"+JSON.stringify(reply))
    const res = await axios.post(`${API_URL}/discussions/${reply.discussionId}/replies`,reply);
    console.log("AXIOS DONE!!")
    console.log(res)
    dispatch({
      type: ADD_NEWREPLY,
      payload: res
    });
  };

  export const deleteReply = (discussion_id,rep_id) => async dispatch => {
    // console.log("AXIOS REPL delete:"+ discussion_id)
   
    dispatch({type: 'DELETE_REQUEST'})
    
      return await axios.delete(`${API_URL}/discussions/${discussion_id}/replies/${rep_id}`)
      .then(function(res){
        console.log("AXIOS REPL delete:"+ rep_id);
        dispatch({
          type: DELETE_REPLY,
          payload: rep_id
        });
      })
  }
 
  export const deleteDiscussion= id => async dispatch => {
    // console.log("AXIOS REPL delete:"+id);
    try {
      await axios.delete(`${API_URL}/discussions/${id}`)
      .then(function(res){
        dispatch({
          type: DELETE_DISCUSSION,
          payload: id
        });
      })
      
    } catch (e) {
      dispatch({
        type: DELETE_DISCUSSION,
        payload: id
      });
    }
  };
  
  export const updateDiscussion = discussion => async dispatch => {
    console.log("AXIOS REPL update:"+ discussion)
    const res = await axios.put(`${API_URL}/discussions/${discussion.id}`, discussion);
    dispatch({
      type: UPDATE_DISCUSSION,
      payload: res.data
    });
  };
