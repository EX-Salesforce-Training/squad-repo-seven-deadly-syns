import { LightningElement, api } from 'lwc';

export default class AirportSearchBox extends LightningElement {

    @api
    whereFrom = '';
    @api
    whereTo = '';

    @api
    departure;

    connectedCallback() {
    }

    handleSearchKeyInput(event) {
        if(this.departure == "1")
            this.whereFrom = event.target.value;
        else
            this.whereTo = event.target.value;

        const event2 = new CustomEvent('child', {
            // detail contains only primitives
            detail: {whereFrom: this.whereFrom,
                whereTo: this.whereTo,
                departure : this.departure}
            });
            this.dispatchEvent(event2);
    }

}