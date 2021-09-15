import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: defaultMiddleware => defaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store