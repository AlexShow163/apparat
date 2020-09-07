import React, {useState} from 'react';
import './App.sass';
import Header from './Header/Header'
import Main from './Main/Main'
import ModalWarning from "./Modal/Modal warning";

function App() {
    const [courseUSD, setCourseUSD] = useState(0) //Курс на сейчас
    const [manyBasket, setManyBasket] =useState(0)
    const [modalOpened, setModalOpened] = useState(null)
    const [modalWarning, setModalWarning] = useState(false)


    
    const modalProps = (value) => {
        setCourseUSD(value);
    }

    return (
        <div className="App">
          <Header modalProps={modalProps}
                  setManyBasket ={setManyBasket}
                  setModalWarning={ setModalWarning}
          />
          <Main
              course={courseUSD}
              setModalOpened={setModalOpened}
              manyBasket={manyBasket}
          />

          {modalOpened ? <div className="modal" /> : null}
          {modalWarning ? <ModalWarning
              value={"Выберете валюту!"}
              setModalWarning={setModalWarning}

          /> : false}

        </div>
    );
}

export default App;
