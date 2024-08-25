import { useContext } from 'react';
import { appContext } from '../../context/AppContext'
import "./QuestionCounter.css"

const QuestionCounter = () => {
    let {counter} = useContext(appContext);
  return (
    <h1 className=''>
        Question {counter}
    </h1>
  )
}

export default QuestionCounter;