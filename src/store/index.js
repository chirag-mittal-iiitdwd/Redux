const {createStore} = require('redux');
import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter:0,showCounter:true};

createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment(){},
        decrement(){},
    }
});

const counterReducer = (state={counter:0},action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+1
        };
    }
    if(action.type==='decrement'){
        return {
            counter:state.counter-1
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;