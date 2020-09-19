import {AXIOS_VALUTE_ERROR, AXIOS_VALUTE_FINISH, AXIOS_VALUTE_START} from "../action/actionTypes";


const initialValute = {
    manyCourse: []  ,// Получаем доллар и евро
    usdMany: 0,


}

export default function manyCourseValute(state = initialValute, action) {
    switch (action.type) {
        case  AXIOS_VALUTE_START:
            return  {
                ...state
            }
        case  AXIOS_VALUTE_FINISH:
            return  {
                ...state,
                manyCourse: action.arrValuteAxios,
                usdMany: action.usdMany

            }
        case  AXIOS_VALUTE_ERROR:
            return  {
                ...state
            }
        default:
            return state
    }

}