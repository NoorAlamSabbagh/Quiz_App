import React, { useEffect } from 'react'
import Questions from './Questions.js'


/** redux store import **/
import { useSelector, useDispatch} from 'react-redux' 
import { MoveNextQuestion } from '../hooks/FetchQuestion.js'

const Quiz = () => {
  const state = useSelector(state=>state.questions.trace)
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(state)
  })

  /**  next button event handler**/
  function onNext(){
    console.log('On next Click')

    /** update the trace value by one using MoveNextAction **/
    dispatch(MoveNextQuestion)
  }

  /**  previous button event handler**/
  function onPrev(){
    console.log('On prev Click')
  }
  return (
    <div className="container">
       <h1 className="title text-light">Quiz Application</h1>

       {/* Display Questions */}
      <Questions></Questions>

       <div className="grid">
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
       </div>
    </div>
  )
}

export default Quiz
