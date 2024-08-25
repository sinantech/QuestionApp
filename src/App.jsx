import './App.css'
import Question from './components/question/Question'
import QuestionCounter from './components/questionCounter/QuestionCounter'
import Timer from './components/timer/Timer'

function App() {

  return (
    <div className='app-container'>
      <div className='header-container'>
        <QuestionCounter/>
        <Timer/>
      </div>
      <Question/>
    </div>
  )
}

export default App
