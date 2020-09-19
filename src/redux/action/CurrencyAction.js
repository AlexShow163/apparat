import {PRICE_PRODUCT, RECORD_BASKET, RESET_BASKET, SUBTRACTION_BASKET} from "./actionTypes";


export function recordBasket(number) {
    return {
        type: RECORD_BASKET,
        payload: number
    }
}

export function resetBasket() {
    return {
        type: RESET_BASKET,

    }
}

export function subtractionBasket(number) {
    return {
        type: SUBTRACTION_BASKET,
        payload: number

    }
}


export function recordPriceProduct(number) {
    return {
        type: PRICE_PRODUCT,
        payload: number
    }
}