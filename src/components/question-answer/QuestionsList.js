// import { useState, useEffect } from 'react';
import SingleQuestion from './SingleQuestion.js';
export default function QuestionsList({filteredList, searchQuery}) {

  // sliced questions array to account for default value
  let slicedQuestions = filteredList.slice(0,4);

  // pass mapped to single question component
  // render individual single component there
    // pass answer to answers component (maybe answers list --> single answer)



  return (
    <div className="testing">
    {slicedQuestions.map((question, index )=> (
  < SingleQuestion key={question.question_id}  className="questions" question={question}/>
  ))}

    </div>
  )
}
