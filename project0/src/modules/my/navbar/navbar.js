import { LightningElement } from 'lwc';

export default class Navbar extends LightningElement {
    navList = ['Home', 'About', 'Contact Us', 'Cart'];

    navSelection(event) {
        event.preventDefault();
        console.log(event.target.name);
        const name = event.target.name.toLowerCase().replace(/\s+/g, '');
        const tagName = `my-${name}`;
        const elem = document.querySelector(tagName);
        elem.scrollIntoView();
    }
}
