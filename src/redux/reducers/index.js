import { combineReducers } from "redux";
import {abcd} from './FormReducer';

const postReducers=(state=[],action)=>{
    if(action.type==='Post')
        return action.payload
    return state;
}

const commentReducers=(state={},action)=>{
    if(action.type==='Comment')
        return {...state,[action.id]:action.payload};
    return state;
};

export default combineReducers({
    posts:postReducers,
    comments:commentReducers,
    marketing: abcd
})