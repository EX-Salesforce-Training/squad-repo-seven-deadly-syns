import { LightningElement, api } from 'lwc';
import products from '../../client/data/products';

export default class Home extends LightningElement {
    @api data = products;
    nikeId = 1;
    adidasId = 2;
    underarmourId = 3;
    newbalanceId = 4;
    // prentData(){
    //     console.log('this is my data(products) => ', data)
    // }
}
