import {action, observable} from "mobx";

export default class UIStore {

    constructor(mainStore) {
        this.mainStore = mainStore;
    }

}
