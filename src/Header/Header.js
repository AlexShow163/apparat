import React, {useState, useEffect} from 'react';
import './Header.sass';
import axios from 'axios'


function Header (props) {
    const [basketCount, setBasketCount] = useState(0) // Конвертированная сумма
    const [recordBasket,setRecordBasket] = useState(false) //Записываем валюту в basketCount
    const [manyCurrency, setManyCurrency] = useState('$') //Валюта
    const [inputSum, setInputSum] = useState(0) //Сумма
    const [course, setCourse] = useState(0) //Курс на сейчас




    const dataCurrency = event  => setManyCurrency(event.target.value)
    const dataSum = (event) => {
        setInputSum(event.target.value)

    }

    const arrValute = [];
    const priceValute = () => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => {
                Object.values(response.data.Valute).filter((el) => {
                    if(el.CharCode === 'USD'  ) {
                        arrValute.push(el)
                        props.modalProps(el.Value)
                    }
                    else if(el.CharCode === 'EUR') {
                        arrValute.push(el)
                    }
                })
            })
    }
    priceValute()

    const manyWat = () => {
        if (manyCurrency === null || manyCurrency === '$') {
            props.setModalWarning(true)

        }
    } // Проверяем выбрана ли валюта


    const addData= (event) =>{
        event.preventDefault()
        manyWat()
        sumValute()
        setRecordBasket(true)
    }

    const remoteData = (event) => {
       setBasketCount(0)
        props.setManyBasket(0)
        event.preventDefault()
    }

    const sumValute = ( )  => {
        arrValute.map((el) => {
            if(el.CharCode === manyCurrency) {
                setCourse(el.Value)
            }
        })
    } // Определяем валюту


    useEffect(() => {
            let result = inputSum
            result = result * course
            result = parseInt(result.toFixed(2))
            setBasketCount(result)
            props.setManyBasket(result)
            setRecordBasket(false)

    }, [recordBasket]) //Конвертируем и заносим в basketCount


    useEffect(() => {
            setBasketCount(props.manyBasket)
        }, [props.manyBasket]
    ) // При покупке вычитаем




    return(
       <>
           <header className="Header">
               <div className="Header-logo">
                   <img className="Header-logo__image" src="https://img.icons8.com/windows/60/000000/shopping-bag.png" alt="Сумка"/>
                   <h2 className="Header-logo__title">Вендинговый аппарат</h2>
               </div>
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
                           <input onChange={dataSum} type="number" placeholder='Сумма'  />
                           <button onClick={addData} type='submit' className="many__add">Добавить</button>
                           <button  onClick={remoteData} className="many__dropping">Сбросить</button>

                       </form>
                   </div>
               </div>
           </header>
           <hr/>

       </>
    )
}

export default Header