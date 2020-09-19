import React from 'react';
import './App.sass';
import Header from './Components/Header/Header'
import Main from './Main/Main'
import ModalWarning from "./Modal/Modal warning";
import Modal from "./Modal/Modal";
import ModalFinish from "./Modal/Modal-finish";
import AxiosComponent from "./Components/AxiosComponent";
import { useSelector} from 'react-redux'






function App() {
    const modalWarningCurrency = useSelector(state => state.ModalReducers.modalWarningCurrency)
    const modalWarningMany = useSelector(state =>  state.ModalReducers.modalWarningMany)
    const modalOpened = useSelector( state =>state.ModalReducers.modalOpened)
    const modalFinish = useSelector(state => state.ModalReducers.modalFinish)






    return (
        <div className="App">
          <AxiosComponent/>
          <Header/>
          <Main/>
          {modalFinish ? <ModalFinish/> : false}

          {modalOpened ? <Modal/> : false}

          {modalWarningCurrency ? <ModalWarning
              value={"Выберете валюту!"}
          /> : false}

          {modalWarningMany ? <ModalWarning
              value={"Пополните баланс!"}
            /> : false}

        </div>
    );
}





export default  App;
