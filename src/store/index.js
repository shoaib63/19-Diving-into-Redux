import { createStore } from "redux";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter: 0 , showCounter: true}

const counterReducer = (state=initialState , action)=>{
    if(action.type === 'increment'){
        return {
            counter: state.counter + action.step,
            showCounter: state.showCounter,
        }
    }

    if( action.type === 'decriment'){
        return{
            counter: state.counter - action.step,
            showCounter: state.showCounter,
        }
    }

    if(action.type === 'toggle'){
        return{
            showCounter: !state.showCounter,
            counter: state.counter,
        }
    }

    return state;
}


const store = createStore(counterReducer);


export default store;



