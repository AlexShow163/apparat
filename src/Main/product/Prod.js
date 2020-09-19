import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import mockProduct from "./mockProduct";

import {
    modalOpened,
    openModalWarningMany,
} from "../../redux/action/ModalAction";





  function Prod() {
      const basketCount = useSelector(state =>  state.CurrencyReducer.basketCount)
      const modalData = useSelector(state => state.ModalReducers.modalData)
      const usdMany = useSelector(state => state.AxiosReducer.usdMany)





      const dispatch = useDispatch()
      const conditionModalWarning  = condition => dispatch(openModalWarningMany(condition))
      const productModalOpened = condition => dispatch(modalOpened(condition))





      const onHandleClick = (elem) => {
          let outProduct = ""
          outProduct = elem.price * usdMany
          outProduct = outProduct.toFixed(2)
          outProduct = parseInt(outProduct)
          if(outProduct <= basketCount) {
              modalData.img = elem.product
              modalData.price = elem.price
              modalData.number = elem.number
             productModalOpened(true)

          }else{
              conditionModalWarning(true)
          }
      }



      return (
          mockProduct.map((elem) => {
              return(
                  <tr key={elem.number.toString()} onClick={() => onHandleClick(elem)} >
                      <td  className="Main-number">{elem.number}</td>
                      <td  className="Main-product"><img  className='image-prod' src={elem.product} alt="1"/></td>
                      <td   className="Main-name">{elem.name}</td>
                      <td  className="Main-price">{elem.price}</td>
                      <td  className="Main-quantity">{elem.quantity}</td>
                  </tr>
              )
          })


      )


}

export default Prod;