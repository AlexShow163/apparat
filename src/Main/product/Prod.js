import React from 'react';
import mockProduct from "./mockProduct";

  function  Prod() {


      return (

          mockProduct.map((elem,i) => {
              return(

                  <tr key={i}>
                      <td  className="Main-number">{elem.number}</td>
                      <td  className="Main-product">{elem.product}</td>
                      <td   className="Main-name">{elem.name}</td>
                      <td  className="Main-price">{elem.price}</td>
                      <td  className="Main-quantity">{elem.quantity}</td>
                  </tr>
              )
          })


      )


}

export default Prod;