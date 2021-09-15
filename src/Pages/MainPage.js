import React from 'react'
import StartGame from './StartGamePage'
import GamePage from './GamePage'
import FetchingPage from './FetchingPage'
import EndGamePage from './EndGamePage'
import * as stages from '../utils/constants'
import { useSelector } from 'react-redux'

const MainPage = () => {
    const currentStage = useSelector(state => state.gameStage.stage)

    let displayedPage;
    switch (currentStage) {
        case stages.START_GAME:
            displayedPage = <StartGame/>
            break;
        case stages.FETCHING_GAME:
            displayedPage = <FetchingPage/>
            break
        case stages.GAME:
            displayedPage = <GamePage/>
            break
        case stages.END_GAME:
            displayedPage = <EndGamePage/>
            break
        default: 
            break;
    }
    return (
        <div>
            { displayedPage }
        </div>
    )
}

export default MainPage
