import React from "react";
import "./Modal.sass";

function ModalWarning(props)  {
    const modalWarningClose = () => {
        props.setModalWarning(false)
    }

    return(
        <div className='modal'>
            <div className="modal-window">
                <div>
                    <div className='image'/>
                </div>
                <h2>{props.value}</h2>
                <button onClick={modalWarningClose}>Ok</button>
            </div>
        </div>
    )

}

export default ModalWarning;