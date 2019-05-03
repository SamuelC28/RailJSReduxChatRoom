import { GET_CHANNELS, GET_CHANNEL, ADD_NEWCHANNEL } from '../actions/types';
import axios from 'axios';

const API_URL = 'http://localhost:3000';


export function getChannelList(){
    return (dispatch) => {
        dispatch({type: 'DATA_LOADING'})

        return fetch(`${API_URL}/channels`).then(res => res.json())
        .then(json =>{
            return dispatch({
                type: GET_CHANNELS,
                payload: json
              });
        }).catch(error => console.log(error));
    }
 
}

export const addChannel = channel => async dispatch => {
    console.log("AXIOS channel:"+JSON.stringify(channel));
    
    const res = await axios.post(`${API_URL}/channels`, channel);
    console.log(res.data)
    dispatch({
      type: ADD_NEWCHANNEL,
      payload: res.data.channel
    });
  };



export function getOneChannel(id) {
    return (dispatch) => {
        dispatch({type: 'DATA_LOADING'})
  
    return fetch(`${API_URL}/channels/${id}`).then(res => res.json())
    .then(json=>{
        return dispatch({
            type: GET_CHANNEL,
            payload: json
            
          });
          
    }).catch(error => console.log(error));
      
    };
  }
