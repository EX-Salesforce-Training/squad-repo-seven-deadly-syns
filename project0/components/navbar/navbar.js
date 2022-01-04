import { LightningElement, wire, track, api } from 'lwc';
import products from '../../client/data/products';
export default class Navbar extends LightningElement {
    @api productList = products
    navList = ['Home', 'About', 'Contact Us', 'Cart'];



    navSelection(event) {
        event.preventDefault();
        console.log(event.target.name);
        const name = event.target.name.toLowerCase().replace(/\s+/g, '');
        console.log('this is name to lowercase => ', name);
        const tagName = `my-${name}`;

        const elem = document.querySelector('my-about');
        const myElem = document.querySelector(tagName);
        console.log('this is elem => ', elem);
        console.log('this is myElem => ', myElem);
        myElem.scrollIntoView();
    }

    handleSearch(event){
        const searchKey = event.target.value.toLowerCase();
        console.log('this is productList => ', this.productList)
        this.productList = this.productList.filter(product => product.name.toLowerCase().includes(searchKey))

    }
}
