import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"

import rootReducer from "./root"

const loggerMiddleware = createLogger()
const getMiddleware = () => {
    if (process.env.NODE_ENV === "production") {
        return applyMiddleware(thunkMiddleware)
    }
    return applyMiddleware(thunkMiddleware, loggerMiddleware)
}

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

const store = createStore(
    rootReducer,
    composeEnhancers(getMiddleware()),
)

export default store
