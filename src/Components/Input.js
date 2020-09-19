import React, {useState} from "react";
import { useDispatch, useSelector} from 'react-redux'
import './Header/Header.sass';
import {recordBasket, resetBasket} from "../redux/action/CurrencyAction";
import { openModalWarningCurrency} from "../redux/action/ModalAction";




function Input () {
    const [manyCurrency, setManyCurrency] = useState('$') //Валюта
    const [inputSum, setInputSum] = useState('') //Сумма

    const manyCourse = useSelector(state => state.AxiosReducer.manyCourse)
    const basketCount = useSelector(state =>  state.CurrencyReducer.basketCount)

    const dispatch = useDispatch()
    const basketRecord = number => dispatch(recordBasket(number))
    const basketReset = () => dispatch(resetBasket())
    const openWarningCurrency = () => dispatch(openModalWarningCurrency())

    const dataCurrency = event  => setManyCurrency(event.target.value) //Получаем валюту выбраю пользователем
    const dataSum = event => setInputSum(event.target.value) // Сумма выбраная пользователем


    const addData = (event)  => {
        event.preventDefault()
        let out =''
        if(manyCurrency === "$") {
            openWarningCurrency()
        }else {
            manyCourse.forEach(elem => {
                if ( elem.CharCode === manyCurrency) {
                    out = inputSum * elem.Value
                    out = out.toFixed(2)
                    out = parseInt(out)
                    basketRecord(out)
                    setInputSum('')
                }
            } )

        }
    }

    const reset = (event) => {
        event.preventDefault()
        basketReset()
    }

    return(
        <div className="Header-control">
            <div className="Header-control__basket">
                <img className="basket-image" src="https://img.icons8.com/material-sharp/24/000000/shopping-basket-2.png" alt="Корзина"/>
                <span className="basket-count">{basketCount}</span>
            </div>
            <div className="Header-control__many">
                <form >
                    <select onChange={dataCurrency}  value={manyCurrency}   className="many__currency">
                        <option> $ </option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <input onChange={dataSum} type="number" value={inputSum} placeholder='Сумма'  />
                    <button onClick={addData} type='submit' className="many__add">Добавить</button>
                    <button  onClick={reset} className="many__dropping">Сбросить</button>

                </form>
            </div>
        </div>
    )

}


export default Input;