import { LightningElement, api } from 'lwc';

export default class Nike extends LightningElement {
    @api nike;
    @api cart = [];

    addToCart(product) {
        console.log('this is nike => ', this.nike);
        const filtered = this.nike.filter((item) => item.id !== product.id);
        this.cart.push(filtered);
    }
}
