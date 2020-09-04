import React, {useState} from 'react';
import './Header.sass';
import axios from 'axios'
import Converter from './Converter/Converter'

function Header () {
    const [basketCount, setBasketCount] = useState(0)
    const [manyCurrency, setManyCurrency] = useState('')
    const [inputSum, setInputSum] = useState('')


const submitData= (event) =>{
        event.preventDefault()
        console.log(event.target.value)

}
    console.log(manyCurrency)
    console.log(inputSum)



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
                       <span className="basket-count">0</span>
                   </div>
                   <div className="Header-control__many">
                       <form>
                           <select onChange={event => setManyCurrency(event.target.value)}   className="many__currency">
                               <option className="currency-img"> $ </option>
                               <option value="USD">USD</option>
                               <option value="EUR">EUR</option>
                               <option value="RUB">RUB</option>
                           </select>
                           <input onChange={event => setInputSum(event.target.value)} type="number" placeholder="Сумма"/>
                           <button  type='submit' className="many__add">Добавить</button>
                           <button className="many__dropping">Сбросить</button>
                       </form>
                   </div>
               </div>
           </header>
           <hr/>
           <Converter />
       </>

    )
}

export default Header