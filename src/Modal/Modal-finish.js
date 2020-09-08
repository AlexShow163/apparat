import React from "react";
import ReactDOM from 'react-dom'


function ModalFinish (props) {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className='modal-window finish'>
                <img src={props.dataModal.img} alt="товар"/>
                <button  onClick={() => {props.setModalFinish(false)}} className="modal-window__click finish-btn">ОК</button>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default ModalFinish;