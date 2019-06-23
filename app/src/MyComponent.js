import React from "react";
import { ToastContainer } from 'react-toastify'
import { drizzleConnect } from 'drizzle-react'
import 'react-toastify/dist/ReactToastify.css'
import {
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "./logo.png";

const Homepage = () => (
  <div className="App">
    <ToastContainer />
    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Drizzle Event Example</h1>
      <p>Connect and react to Solidity Contract events by hooking into Drizzle Redux state</p>
    </div>

    <div className="section">
      <h2>SimpleStorage with event</h2>
      <p>Change the value to invoke a contract event</p>
      <p>
        <strong>Stored Value: </strong>
        <ContractData contract="SimpleStorage" method="storedData" />
      </p>
      <ContractForm contract="SimpleStorage" method="set" />
    </div>
  </div>
);

const mapStateToProps = state => ({
  accounts: state.accounts,
  SimpleStorage: state.contracts.SimpleStorage,
  TutorialToken: state.contracts.TutorialToken,
  drizzleStatus: state.drizzleStatus
})

export default drizzleConnect(Homepage, mapStateToProps);
