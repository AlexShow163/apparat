import React from "react";
import './Modal.sass'
import ReactDOM from 'react-dom'
import mockProduct from "../Main/product/mockProduct";

function Modal  (props)  {
    const modalClose = () => {
        props.setModalOpened(false)
    }

    const resultQuantity = () => {
        mockProduct.map((el) => {
            if(props.dataModal.number === el.number) {
                el.quantity = el.quantity - 1
            }
        })
    } //Работаем с количеством

    const modalReceive = () => {
        let many = props.dataModal.price * props.courseUSD
        many = parseInt(many.toFixed(2))
        let balance = props.manyBasket - many
        props.setManyBasket(balance)
        props.setModalOpened(false)
        props.setModalFinish(true)
        resultQuantity()



    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className='modal-window confirmation'>
                <img src={props.dataModal.img} alt="товар"/>
                <h2>Выбрать данный товар</h2>
                <div className='confirmation-price'>{props.dataModal.price} $</div>
                <button onClick={modalClose} className='modal-window__cancel'>Отмена</button>
                <button onClick={modalReceive} className="modal-window__click">ОК</button>
            </div>
        </div>,
        document.getElementById('modal')


    )

}

export default Modal;


// <div className="modal">
//     <div className='modal-window'>
//         <img src="#" alt="Товар"/> // Подставить name
//         <h2>Примите товар</h2>
//         <button>Ок</button>
//     </div>
// </div>