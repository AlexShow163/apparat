import React from 'react';
import  './Main.sass'
import Prod from './product/Prod'


function Main () {



    return(
        <>
            <div className="Main">
                <table>
                   <tbody>
                       <tr>
                           <td className="Main-number">#</td>
                           <td className="Main-product">Товар</td>
                           <td className="Main-name">Название</td>
                           <td className="Main-price">Цена</td>
                           <td className="Main-quantity">Количество</td>
                       </tr>
                       <Prod/>
                   </tbody>
                </table>

            </div>
        </>
        )


    }
    export default Main;

