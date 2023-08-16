import React from 'react'
import Questions from './Questions.js'

const Quiz = () => {

  /**  next button event handler**/
  function onNext(){
    console.log('On next Click')
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
