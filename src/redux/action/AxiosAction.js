import axios from "axios";
import {AXIOS_VALUTE_ERROR, AXIOS_VALUTE_FINISH, AXIOS_VALUTE_START} from "./actionTypes";


export function axiosValute() {
    return async dispatch => {
        dispatch(axiosValuteStart())
        try {
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            const arrValuteAxios = []
            let usdMany = ""
            Object.values(response.data.Valute).forEach(el => {
                if(el.CharCode === 'USD' ) {
                    arrValuteAxios.push(el)
                    usdMany = el.Value
                }
                else if(el.CharCode === 'EUR') {
                    arrValuteAxios.push(el)
                }

            })
            dispatch(axiosValuteFinish(arrValuteAxios,usdMany))
        } catch (e) {
            dispatch(axiosValuteError(e))
        }
    }
}

export function axiosValuteStart() {
    return {
        type: AXIOS_VALUTE_START
    }

}
export function axiosValuteFinish(arrValuteAxios,usdMany) {
    return {
        type: AXIOS_VALUTE_FINISH,
        arrValuteAxios, usdMany
    }

}
export function axiosValuteError(e) {
    return {
        type: AXIOS_VALUTE_ERROR,
        error: e
    }

}






//Обрабытываю инпут


