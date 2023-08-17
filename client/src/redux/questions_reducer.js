import { createSlice } from "@reduxjs/toolkit";

export const questionsReducer =  createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action)=>{
            return{
                ...state,
                queue: action.payload
            }
        },
        moveNextAction : (state)=>{
            return {
                ...state,
                trace: state.trace+1
            }
        }
    }
})

export const {startExamAction, moveNextAction} = questionsReducer.actions
export default questionsReducer.reducer;