import React from "react";
import './Modal.sass'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector} from 'react-redux'
import mockProduct from "../Main/product/mockProduct";
import {modalFinish, modalOpened} from "../redux/action/ModalAction";
import {subtractionBasket} from "../redux/action/CurrencyAction";

function Modal  ()  {
    const modalDataInfo = useSelector(state => state.ModalReducers.modalData )
    const usd = useSelector(state => state.AxiosReducer.usdMany)


    const dispatch = useDispatch()
    const productModalOpened = condition => dispatch(modalOpened(condition))
    const subBasket = number => dispatch(subtractionBasket(number))
    const modalEnd = condition => dispatch(modalFinish(condition))



    const resultQuantity = (item) => {
        mockProduct.forEach((el) => {
            if( item.number === el.number) {
                el.quantity = el.quantity - 1
            }
        })
    } //Работаем с количеством


    const modalClose = () => {
        productModalOpened(false)
    }

    const modalCloseFinish = () => {
        let out = 0;
        out = modalDataInfo.price * usd
        out = out.toFixed(2)
        out = parseInt(out)
        subBasket(out)
        resultQuantity(modalDataInfo)
        productModalOpened(false)
        modalEnd(true)
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className='modal-window confirmation'>
                <img src={modalDataInfo.img} alt="товар"/>
                <h2>Выбрать данный товар</h2>
                <div className='confirmation-price'>{modalDataInfo.price} $</div>
                <button  className='modal-window__cancel' onClick={modalClose}>Отмена</button>
                <button  className="modal-window__click" onClick={modalCloseFinish}>ОК</button>
            </div>
        </div>,
        document.getElementById('modal')


    )

}



export default Modal;


