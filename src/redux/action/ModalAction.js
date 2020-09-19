import {
    MODAL_OPENED,
    MODAL_WARNING_CURRENCY,
    MODAL_WARNING_CLOSE,
    MODAL_WARNING_MANY_OPEN, PRODUCT_MODAL, MODAL_FINISH
} from "./actionTypes";


export function openModalWarningCurrency() {
    return {
        type: MODAL_WARNING_CURRENCY,


    }
}

export  function closeModalWarningCurrency() {
    return {
        type: MODAL_WARNING_CLOSE
    }
}

export function openModalWarningMany(condition) {
    return {
        type: MODAL_WARNING_MANY_OPEN,
        payload: condition


    }
}


export function productModalData(modalInfo) {
    return {
        type: PRODUCT_MODAL,
        modalInfo

    }
}

export function modalOpened(condition) {
    return {
        type: MODAL_OPENED,
        payload: condition
    }
}

export function modalFinish(condition) {
    return {
        type: MODAL_FINISH,
        payload: condition
    }
}

