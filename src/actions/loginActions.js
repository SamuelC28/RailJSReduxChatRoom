// // function added
export default function postData(type, userData) {
    let res = 'http://localhost:3000/discussions/new'
  
    return new Promise((resolve, reject) => {
      fetch(res+type,{
        method: 'POST',
        body: JSON.stringify(userData)
      })
     .then((response) => response.json())
     .then((responseJson) => {
       resolve(responseJson);
     })
     .catch((error) => {
       reject(error);
     })
    })
  };
  

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