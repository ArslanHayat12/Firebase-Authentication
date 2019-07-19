import {UPDATE_DATA} from "../constants/";
import {initialContent} from "../context/"; 
export const reducer=(state:any, action:any)=>{
    switch (action.type) {
      case UPDATE_DATA:
        return {
          isSignedIn: action.isSignedIn,
          data:action.data
        }
      default:
        return initialContent
    }
  };

  export const reducerPrivate=(state:any, action:any)=>{
    switch (action.type) {
      case UPDATE_DATA:
        console.log(action)
        return {
          value: action.value||state.value,
          data:action.data||state.data,
          
        }
      default:
        return initialContent
    }
  };