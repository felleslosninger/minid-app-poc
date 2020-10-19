import {action, makeObservable, observable} from "mobx";

export default class UIStore {

    constructor(mainStore) {
        makeObservable(this);
        this.mainStore = mainStore;
    }

}
