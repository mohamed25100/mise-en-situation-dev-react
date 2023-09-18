import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import { UserReducer } from "./reducers/userReducer";

const middlewares = [logger]

const rootReducer = combineReducers({
    user : UserReducer
})

const persistConfig = {
    key: "root",
    storage,
    backlist : []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, composedEnhancers)
export const persistor = persistStore(store)