import { LightningElement, api } from 'lwc';

import data from './data';

export default class App extends LightningElement {
    nikeId = 1;
    adidasId = 2;
    underarmourId = 3;
    newbalanceId = 4;
    @api myData = data;
}
