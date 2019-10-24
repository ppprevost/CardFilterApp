import React from 'react';
import './App.css';
import store from "./modules/store";
import {Provider as ReduxProvider} from "react-redux";
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

