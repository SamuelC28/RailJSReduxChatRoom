// import { GET_REPLIES } from './types';


// const API_URL = 'http://localhost:3000';


// export default function getDiscussion(id) {
//     return (dispatch) => {
//         dispatch({type: 'DATA_LOADING'})
 
//     return fetch(`${API_URL}/discussions/${id}`).then(res => res.json())
//     .then(json=>{
//         console.log(GET_REPLIES,json)
//         return dispatch({
//             type: GET_REPLIES,
//             payload: json
            
//           });
          
//     }).catch(error => console.log(error));
      
//     };
//   }
