import { combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todos, isLoading } from './todos/reducers'

const reducers = {
    todos,
    isLoading
}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer) // HOW TO SAVE AND WHERE TO SAVE IT

export const configureStore = () => 
    createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
        //TO ADD REDUX DEV TOOLS
        //window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //window.__REDUX_DEVTOOLS_EXTENSION__()
        )

