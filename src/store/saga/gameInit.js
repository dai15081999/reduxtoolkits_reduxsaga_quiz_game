import {take, fork, put, call, delay, cancel} from 'redux-saga/effects'
import {startGame, cancelGame} from '../slices/gameInit'
import {fetchQuizFromApi} from '../../utils/api'
import {fetchQuestionsFail, fetchQuestionsSuccess} from '../slices/game'

function* fetchQuestionsSaga() {
    try {
        yield delay(2000)
        const data = yield call(fetchQuizFromApi)
        yield put(fetchQuestionsSuccess(data))
    } catch (error) {
        yield put(fetchQuestionsFail('The errors fetching'))
    }
}

function* cancelFetchQuiz(forkedSaga) {
    while(true) {
        yield take(cancelGame.type)
        yield cancel(forkedSaga)
    }
}

export default function* startGameSaga() {
    while(true) {
        yield take(startGame.type)
        const forkedSaga = yield fork(fetchQuestionsSaga)
        yield fork(cancelFetchQuiz, forkedSaga)
    }
}