import { LightningElement, wire, track, api } from 'lwc';
import products from '../../../client/data/products';

export default class Navbar extends LightningElement {
    // @api productList = products;
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
        // myElem.scrollIntoView();
    }

    handleSearch(event) {
        event.preventDefault();
        const searchKey = event.target.value.toLowerCase();
        console.log('this is products => ', products);

        products.map((product) => {
            //     console.log('this is product.nike => ', product.nike);
            //     if (product.nike) {
            //         return product.nike
            //             ? product.nike.filter((prod) =>
            //                   prod.name.toLowerCase().includes(searchKey)
            //               )
            //             : '';
            //     }
            if (product.adidas) {
                return product.adidas
                    ? product.adidas.filter((prod) =>
                          prod.name.toLowerCase().includes(searchKey)
                      )
                    : '';
            }
            // if (product.underarmour) {
            //     return product.underarmour
            //         ? product.underarmour.filter((prod) =>
            //               prod.name.toLowerCase().includes(searchKey)
            //           )
            //         : '';
            // }
            // if (product.newbalance) {
            //     return product.newbalance
            //         ? product.newbalance.filter((prod) =>
            //               prod.name.toLowerCase().includes(searchKey)
            //           )
            //         : '';
            // }
        });
    }
}
