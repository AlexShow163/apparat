import React from "react";
import "./Modal.sass";
import {closeModalWarningCurrency} from "../redux/action/ModalAction";
import {useDispatch} from "react-redux";

function ModalWarning(props)  {
    const dispatch = useDispatch()
    const closeWarning = () => dispatch(closeModalWarningCurrency())

    const closeModal = () => {
        closeWarning()
    }


    return(
        <div className='modal'>
            <div className="modal-window">
                <div>
                    <div className='image'/>
                </div>
                <h2>{props.value}</h2>
                <button className='modal-window__click' onClick={closeModal} >Ok</button>
            </div>
        </div>
    )

}


export default ModalWarning;