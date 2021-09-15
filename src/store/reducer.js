import { combineReducers } from "redux";
import gameStage from './slices/gameInit'
import quiz from './slices/game'

export default combineReducers({
    gameStage,
    quiz
})
