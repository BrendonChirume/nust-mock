import AdminReducer from './adminReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        admin: AdminReducer
    }
)

export default rootReducer;