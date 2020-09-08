import React, {useEffect, useState} from 'react';
import './App.sass';
import Header from './Header/Header'
import Main from './Main/Main'
import ModalWarning from "./Modal/Modal warning";
import Modal from "./Modal/Modal";
import ModalFinish from "./Modal/Modal-finish";



function App() {
    const [courseUSD, setCourseUSD] = useState(0) //Курс на сейчас
    const [manyBasket, setManyBasket] =useState(0) // Сумма в кошельке
    const [modalOpened, setModalOpened] = useState(false) //Открытие можального окна с выбором
    const [dataModal,setDataModal] =useState({}) //Данные о продукте
    const [modalWarning, setModalWarning] = useState(false) // Ворнинг при отсутствии валюты
    const [modalMany, setModalMany] = useState(false) // Ворнинг при отсутствии денег
    const [modalFinish,setModalFinish] = useState(false) // Модальное окно при получении товара



    const modalProps = value => setCourseUSD(value);


    return (
        <div className="App">
          <Header modalProps={modalProps}
                  setManyBasket ={setManyBasket}
                  setModalWarning={ setModalWarning}
                  manyBasket={manyBasket}
          />
          <Main
              course={courseUSD}
              setModalOpened={setModalOpened}
              manyBasket={manyBasket}
              setModalMany={setModalMany}
              setDataModal={setDataModal}

          />
            {modalFinish ? <ModalFinish
                dataModal={dataModal}
                setModalFinish={setModalFinish}



            /> : false}


            {modalOpened ? <Modal
                dataModal={dataModal}
                setModalOpened={setModalOpened}
                courseUSD={courseUSD}
                manyBasket={manyBasket}
                setManyBasket={setManyBasket}
                setModalFinish={setModalFinish}
            /> : false}

          {modalWarning ? <ModalWarning
              value={"Выберете валюту!"}
              setModalWarning={setModalWarning}
              modalWarning={modalWarning}


          /> : false}
            {modalMany ? <ModalWarning
                value={"Пополните баланс!"}
                setModalMany={setModalMany}
                modalMany={modalMany}
            /> : false}

        </div>
    );
}

export default App;
