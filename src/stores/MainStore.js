import UIStore from "./UIStore";
import {action, makeObservable, observable} from "mobx";
import React from 'react';


class MainStore {

    @observable counter = 1;

    constructor() {
        makeObservable(this);
        // this.uiStore = new UIStore(this);
    }

    @action.bound
    increment() {
        this.counter += 1;
    }
}

const mainStoreInstance = new MainStore();
export const getMainStore = () => mainStoreInstance;
const mainStoreContext = React.createContext(mainStoreInstance);
export const useMainStore = () => React.useContext(mainStoreContext);

//export const MainStoreContext = React.createContext(mainStoreInstance);


// const { counter } = React.useContext(MainStoreContext);
// https://wix.github.io/react-native-navigation/docs/third-party-mobx/
// https://github.com/pinqy520/mobx-persist