import {
    MODAL_OPENED,
    MODAL_WARNING_CURRENCY,
    MODAL_WARNING_CLOSE,
    MODAL_WARNING_MANY_OPEN,
    PRODUCT_MODAL, MODAL_FINISH
} from "../action/actionTypes";


const initialState = {
    modalData: {
        img: '',
        price: 0,
        number: 0
    },
    modalWarningCurrency: false,
    modalWarningMany: false,
    modalOpened: false,
    modalFinish: false
}

export default function modalWindow(state = initialState, action) {
    switch(action.type) {
        case MODAL_WARNING_CURRENCY:
            return {
                ...state,
                modalWarningCurrency: true
            }
        case MODAL_WARNING_CLOSE:
            return {
                ...state,
                modalWarningCurrency: false,
                modalWarningMany: false
            }
        case MODAL_WARNING_MANY_OPEN:
            return{
                ...state,
                modalWarningMany: action.payload
            }
        case PRODUCT_MODAL:
            return {
                ...state,
                modalData: action.modalData
            }
        case MODAL_OPENED:
            return{
                ...state,
                modalOpened: action.payload
            }
        case MODAL_FINISH:
            return {
                ...state,
                modalFinish: action.payload
            }


        default:
            return state
    }
}