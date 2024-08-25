import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext, { appContext } from './context/AppContext.jsx'
import Login from './components/login/Login.jsx'
import questions from './questions.js'
import Result from './components/result/Result.jsx'

const Root = () => {
  const {isAppVisible, counter, correctCounter} = useContext(appContext);

  const allQuestionsAnswered = counter > questions.length;

    const app = isAppVisible ? <App /> : <Login />;
    return (
    <>
        {allQuestionsAnswered ? (
      <Result
        totalQuestions={questions.length}
        correctAnswers={correctCounter}
      />
    ) : app}
    </>
)}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <Root />
    </AppContext>
  </React.StrictMode>,
)