import React from 'react';
import mockProduct from "./mockProduct";


  function  Prod(props) {
      console.log( typeof props.manyBasket)



      return (

          mockProduct.map((elem,i) => {
              return(
                  <tr key={i}   onClick={event => console.log(event.target) }>
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