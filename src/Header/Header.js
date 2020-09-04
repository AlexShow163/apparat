import React, {useState, useEffect} from 'react';
import './Header.sass';
import axios from 'axios'


function Header () {
    const [basketCount, setBasketCount] = useState(0) // Конвертированная сумма
    const [manyCurrency, setManyCurrency] = useState('') //Валюта
    const [inputSum, setInputSum] = useState('') //Сумма
    const [course, setCourse] = useState(0) //Курс на сейчас
    const [isCalc, setIsCalc] = useState(false)


     const dataCurrency = (event)  => {
         setManyCurrency(event.target.value)
    }
    const dataSum = (event) => {
        setInputSum(parseInt(event.target.value))
    }



    const priceValute = () => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => {
                Object.values(response.data.Valute).map((el) => {
                    // console.log(el);
                    if(el.CharCode === manyCurrency) {
                        let many = el.Value.toFixed(2)
                        setCourse(parseInt(many))
                    }
                })
            })
    }


    const addData= (event) =>{
        setIsCalc(true)
        priceValute()
        event.preventDefault()
    }

    const remoteData = (event) => {
        setBasketCount(0)
        event.preventDefault()
    }

    useEffect(() => {
           if(!isCalc) {
               return
           }
               priceValute()
               setBasketCount(() =>{ // пофиксить прибавление суммы
                   return (inputSum * course)
               })
               console.log('work')
               console.log(basketCount)
                if(basketCount) {
                    setIsCalc(false)
                }



    } )
 console.log(isCalc)










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
                       <form>
                           <select onChange={dataCurrency}    className="many__currency">
                               <option className="currency-img"> $ </option>
                               <option value="USD">USD</option>
                               <option value="EUR">EUR</option>
                           </select>
                           <input onInput={dataSum} type="number"   placeholder="Сумма"/>
                           <button onClick={addData} type='submit' className="many__add">Добавить</button>
                           <button  onClick={remoteData}className="many__dropping">Сбросить</button>
                       </form>
                   </div>
               </div>
           </header>
           <hr/>

       </>

    )
}

export default Header