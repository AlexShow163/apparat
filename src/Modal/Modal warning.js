import React from "react";
import "./Modal.sass";

function ModalWarning(props)  {
    const modalWarningClose = () => {
        if(props.modalWarning === true) {
            props.setModalWarning(false)
        } else if(props.modalMany === true) {
            props.setModalMany(false)
        }
    }

    return(
        <div className='modal'>
            <div className="modal-window">
                <div>
                    <div className='image'/>
                </div>
                <h2>{props.value}</h2>
                <button className='modal-window__click' onClick={modalWarningClose}>Ok</button>
            </div>
        </div>
    )

}

export default ModalWarning;