import React, {useState} from 'react';
import axios from 'axios'

const Converter = () => {
    const [course,setCourse] = useState([])


    let manyCourse = ["USD", "EUR"];


    const priceValute = () => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => {
                let result = {}
                for(let i = 0; i < manyCourse.length; i++) {
                    result[manyCourse[i]] = response.data.Valute[manyCourse[i]]
                }
                // console.log(result)
                // setCourse(result)
            })


    }
    priceValute()
    console.log(course)








    return(
       <div className='Converter'>
           <h1>Converter </h1>

       </div>

    )
}

export default Converter;