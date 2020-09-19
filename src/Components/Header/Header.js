import React  from 'react';
import './Header.sass';
import Input from "../Input";


function Header (props) {
    return(
       <React.Fragment>
           <header className="Header">
               <div className="Header-logo">
                   <img className="Header-logo__image" src="https://img.icons8.com/windows/60/000000/shopping-bag.png" alt="Сумка"/>
                   <h2 className="Header-logo__title">Вендинговый аппарат</h2>
               </div>
                <Input/>
           </header>
           <hr/>
       </React.Fragment>
    )
}

export default Header