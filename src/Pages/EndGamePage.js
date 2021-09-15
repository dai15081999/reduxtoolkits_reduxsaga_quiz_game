import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {restartGame} from '../store/slices/gameInit'

const EndGamePage = () => {
    const dispatch = useDispatch()
    const answers = useSelector((state) => state.quiz.answers)
    const score = useSelector((state) => state.quiz.score)

    const restartGameHandler = () => {
        dispatch(restartGame())
    }

    return (
        <div>
            <p>Your score: {score}/10</p>
            <button onClick={restartGameHandler}>Restart Game</button>
            {answers.map(answer => (
               <div>
                   <p dangerouslySetInnerHTML={{__html: answer.question}}></p>
                    <p>{answer.question}-{answer.answer}-{answer.correct_answer}</p>
               </div>
            ))}
        </div>
    )
}

export default EndGamePage
