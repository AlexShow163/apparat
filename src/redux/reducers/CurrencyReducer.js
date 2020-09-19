import {PRICE_PRODUCT, RECORD_BASKET, RESET_BASKET, SUBTRACTION_BASKET} from "../action/actionTypes";


const initialCourse = {
    basketCount: 0,
    priceProduct: 0,

}

export default  function currencyCourse( state = initialCourse,action) {
   switch (action.type) {
       case RECORD_BASKET:
           return {
               basketCount: state.basketCount + action.payload
           }
       case RESET_BASKET:
           return {
               basketCount: 0
           }
       case SUBTRACTION_BASKET:
           return {
               basketCount: state.basketCount - action.payload
           }
       case PRICE_PRODUCT:
           return {
               priceProduct: state.priceProduct + action.payload
           }

       default:
           return state
   }

}