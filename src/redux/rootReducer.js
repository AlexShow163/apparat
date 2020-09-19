import {combineReducers} from "redux";
import AxiosReducer from './reducers/AxiosReducer'
import CurrencyReducer from './reducers/CurrencyReducer'
import ModalReducers from "./reducers/ModalReducers";


export default  combineReducers({
    AxiosReducer, CurrencyReducer, ModalReducers,
})