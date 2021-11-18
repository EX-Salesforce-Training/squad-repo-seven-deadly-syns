import { LightningElement, api } from 'lwc';

import data from './data';

export default class App extends LightningElement {
    nikeId = 1;
    adidasId = 2;
    underarmourId = 3;
    newbalanceId = 4;
    @api myData = data;
    @api input = '';

    about =
        'We Are Pro Cleats and we have the best professional sports clearts in the market';

    handleSubmit(event) {
        this.input = event.target.value;
        let filtered = input.toLowerCase();
        return this.myData.filter((product) => {
            if (product) {
                product.adidas.filter((item) => item.name !== filtered);
            }
        });
    }
}
