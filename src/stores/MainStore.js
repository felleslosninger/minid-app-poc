import UIStore from "./UIStore";

export default class MainStore {
    constructor() {
        this.uiStore = new UIStore(this);
    }
}
