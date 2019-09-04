import { combineReducers } from "redux"
import { connectorsReducer } from "./reducers"

const rootReducer = combineReducers({
    connectors: connectorsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
