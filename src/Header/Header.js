import React, {useState, useEffect} from 'react';
import './Header.sass';
import axios from 'axios'


function Header (props) {
    const [basketCount, setBasketCount] = useState(0) // Конвертированная сумма
    const [manyCurrency, setManyCurrency] = useState(null) //Валюта
    const [inputSum, setInputSum] = useState(0) //Сумма
    const [course, setCourse] = useState(0) //Курс на сейчас




     const dataCurrency = (event)  => {
         setManyCurrency(event.target.value)

    }

    const dataSum = (event) => {
        setInputSum(event.target.value);
    }
    const arrValute = [];
    const priceValute = () => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => {
                Object.values(response.data.Valute).filter((el) => {
                    if(el.CharCode === 'USD'  ) {
                        arrValute.push(el)
                        props.modalProps(el.Value)
                        // let many = el.Value.toFixed(2)
                        // setCourse(parseInt(many))
                        // props.modalProps(many) //Передаем в App
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
    }


    const addData= (event) =>{
        manyWat()
        sumValute()
        event.preventDefault()
    }

    const remoteData = (event) => {
       setBasketCount(0)
        event.preventDefault()
    }

    const sumValute = ( )  => {
        arrValute.map((el) => {
            if(el.CharCode === manyCurrency) {
                setCourse(el.Value)

            }
        })
    }

   useEffect(() => {
       let result = parseInt(inputSum)
       result = result * course
       setBasketCount(result)
       props.setManyBasket(result)


   }, [course,inputSum])




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
                           <select onChange={dataCurrency}    className="many__currency">
                               <option> $ </option>
                               <option value="USD">USD</option>
                               <option value="EUR">EUR</option>
                           </select>
                           <input onChange={dataSum} type="number" value={inputSum}  placeholder="Сумма"/>
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