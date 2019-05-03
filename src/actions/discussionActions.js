
import {GET_DISCUSSIONS, GET_DISCUSSION, ADD_NEWDISCUSSION, ADD_NEWREPLY, DELETE_REPLY, DELETE_DISCUSSION} from './types';
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
   
      // console.log('getDiscussion',json)
      return dispatch({
          type: GET_DISCUSSION,
          payload: json
          
          
        });
  }).catch(error => console.log(error));

  
 
  };
}


// export function addDiscussion(discussion){
//     return (dispatch) => {
//         dispatch({type: 'DATA_LOADING'})

//         return fetch(`${API_URL}/discussions`, {
//             method: 'POST', 
//             headers: {'Content-Type': 'application/json'}, 
//             body: JSON.stringify(discussion)}).then(res => res.json())
//         .then(json =>{
//          // console.log(json)
//             return dispatch({
//                 type: ADD_NEWDISCUSSION,
//                 payload: json
//               });
//         }).catch(error => console.log(error));
//     }
 
// }
export const addDiscussion = discussion => async dispatch => {
    const res = await axios.post(`${API_URL}/discussions`, discussion);
    console.log(res.data)
    dispatch({
      type: ADD_NEWDISCUSSION,
      payload: res.data
    });
  };

  export const addReply = reply => async dispatch => {
    // console.log("AXIOS REPLY:"+JSON.stringify(reply));
    // console.log(`${API_URL}/discussions/${reply.discussionId}/replies`);
    const res = await axios.post(`${API_URL}/discussions/${reply.discussionId}/replies`,reply);
    console.log("AXIOS DONE!!")
    console.log(res)
    dispatch({
      type: ADD_NEWREPLY,
      payload: res
    });
  };

  export const deleteReply = reply => async dispatch => {
    console.log("AXIOS REPL delete:"+ reply)
    await axios.post(`${API_URL}/discussions/${reply.discussionId}/replies`,reply)
   
    .then(response => {
      const id = response.reply
      return axios.delete(`${API_URL}/discussions/${reply.discussionId}/replies/${id}`)
      .then(function(res){
        console.log("AXIOS REPL delete:"+ id);
        dispatch({
          type: DELETE_REPLY,
          payload: id
        });
      })
    })
  }
    // dispatch({
      // type: GET_DISCUSSION,
      // payload: json,
      
      // searchId: id

    // // console.log("AXIOS REPL delete:"+ id);
    // try {
  //     await axios.delete(`${API_URL}/discussions/${reply.discussionId}/replies/${searchId}`)
  //     .then(function(res){
  //       console.log("AXIOS REPL delete:"+ searchId);
  //       dispatch({
  //         type: DELETE_REPLY,
  //         payload: searchId
  //       });
  //     })
  //     } 
  //   // catch (e) {
  //   //   dispatch({
  //   //     type: DELETE_REPLY,
  //   //     payload: id
  //   //   });
  //   }
  // };
  // export const deleteReply = id => async dispatch => {
  //   console.log("AXIOS REPL delete:"+ id);
  //   try {
  //     await axios.delete(`${API_URL}/discussions/${id}/replies/${id}`)
  //     .then(function(res){
  //       console.log("AXIOS REPL delete:"+ id);
  //       dispatch({
  //         type: DELETE_REPLY,
  //         payload: id
  //       });
  //     })
  //     } catch (e) {
  //     dispatch({
  //       type: DELETE_REPLY,
  //       payload: id
  //     });
  //   }
  // };

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
  
  // export const deleteRe= id => async dispatch => {
  //   // console.log("AXIOS REPL delete:"+id);
  //   try {
  //     await axios.delete(`${API_URL}/discussions/${id}`)
  //     .then(function(res){
  //       dispatch({
  //         type: DELETE_DISCUSSION,
  //         payload: id
  //       });
  //     })
      
  //   } catch (e) {
  //     dispatch({
  //       type: DELETE_DISCUSSION,
  //       payload: id
  //     });
  //   }
  // };
  
