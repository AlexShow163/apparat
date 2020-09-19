import React from "react";
import ReactDOM from 'react-dom'
import {useDispatch, useSelector} from "react-redux";
import {modalFinish} from "../redux/action/ModalAction";


function ModalFinish () {
    const dispatch = useDispatch()
    const modalDataInfo = useSelector(state => state.ModalReducers.modalData )

    return ReactDOM.createPortal(
        <div className="modal">
            <div className='modal-window finish'>
                <img src={ modalDataInfo.img} alt="товар"/>
                <button  onClick={() => dispatch(modalFinish(false)) } className="modal-window__click finish-btn">ОК</button>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default ModalFinish;