import React from 'react';
import logo from './logo.svg';
import './App.css';
import ACTIONS, {fetchItem, filterItem} from "./modules/action";
import store from "./modules/store";
import {Provider as ReduxProvider, connect} from "react-redux";
import thunk from 'redux-thunk';
import RootComponent from './components/RootComponent'

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <div className="App">
            <RootComponent />
            </div>
        </ReduxProvider>
);
}

export default App

