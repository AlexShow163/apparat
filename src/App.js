import React, {useState} from 'react';
import './App.sass';
import Header from './Header/Header'
import Main from './Main/Main'

function App() {
    const [courseUSD, setCourseUSD] = useState(0) //Курс на сейчас


    const modalProps = (value) => {
        setCourseUSD(value);
        console.log('App:', courseUSD)
    }

  return (
    <div className="App">
      <Header modalProps={modalProps} />
      <Main  course={courseUSD}/>
      
    </div>
  );
}

export default App;
