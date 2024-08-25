import { useContext } from "react"
import {appContext} from "../../context/AppContext"
import "./Timer.css"

const Timer = () => {
  const {timer, setTimer} = useContext(appContext);

  return (
    <h2 className="timer">Time: {timer}</h2>
  )
}

export default Timer