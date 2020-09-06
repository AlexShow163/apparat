import React from "react";
import mockProduct from '../Main/product/mockProduct'

function Modal  ()  {
    return(
        <>
            <div className='issue'>
                <img src="#" alt="Товар"/> // Подставить name
                <h2>Примите товар</h2>
                <button>Ок</button>
            </div>
            <div className='confirmation'>
                <img src="#" alt="товар"/>
                <h2>Выбрать данный товар</h2>
                <span>Цена</span>
            </div>



        </>
    )

}

export default Modal;