import { LightningElement, api, track, wire } from 'lwc';

export default class App extends LightningElement {
    checkout = false;
    continue = false;
    checkBack = false;
    addToCart = false;

    handleAddToCart(event) {
        this.addToCart = event.detail.value;
    }

    handleCheckout(event) {
        this.checkout = event.detail.value;
        this.continue = event.detail.value;
        this.checkBack = event.detail.value;
    }

    get isAddToCart() {
        return this.addToCart === true;
    }

    get isCheckout() {
        return this.checkout === true;
    }
}
