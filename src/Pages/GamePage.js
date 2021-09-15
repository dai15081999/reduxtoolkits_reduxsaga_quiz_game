import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {answerQuestion} from '../store/slices/game'
import {finishGame} from '../store/slices/gameInit'

const GamePage = () => {
    const dispatch = useDispatch()

    const [timeLeft, setTimeLeft] = useState(60)

    const currentQuestion = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
        )
    const score = useSelector((state) => state.quiz.score)
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    const answerHandler = (answer) => {
        dispatch(answerQuestion({answer}))
    }
    const endGameHandler = () => {
        dispatch(finishGame())
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <p>Time left: {timeLeft}</p>
            <p>Score: {score}</p>
            <p>{currentQuestionIndex}/10</p>
           <p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
           <button onClick={() => answerHandler('True')}>True</button>
           <button onClick={() => answerHandler('Fasle')}>False</button>
           <button onClick={endGameHandler}>Quit game</button>
        </div>
    )
}

export default GamePage
