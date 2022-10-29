import { useState } from 'react';
import { formatDistanceToNow, parseISO } from "date-fns";

export default function SingleQuestion({question}) {
  const [answers, setAnswers] = useState()
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(0)
  // const [isActive, setIsActive] = useState(false)

  // for date change
  // <small>{new Date([datedata]createdAt).toString()}</small>


    const handleAnswers = ()=> {
     let answers = Object.values(question.answers)
     setAnswerIndex(answerIndex+2)
     let slicedAnswer= answers.slice(0, answerIndex)
     setDisplayAnswers(slicedAnswer)

    }

    // this component passes to helphul comp --
      // pass
        // question body
        // product id
        // helpful ness
        // question id

              // onClick={()=>setIsActive(true)}
  return (
    <>
     <div onClick={()=>{handleAnswers()}} className="questions" key={question.question_id}>Q:&nbsp;&nbsp;{question.question_body} </div>
     <div className="answers-container">
      {
            displayAnswers.map((answer)=>(
      <div className="single-answer">A:&nbsp;&nbsp;{answer.body}</div>
        ))
      }
     </div>
    </>
  )
}