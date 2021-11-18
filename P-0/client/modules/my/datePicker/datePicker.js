import { LightningElement, api } from 'lwc';

export default class DatePicker extends LightningElement {

    connectedCallback() {
    }

    handleInput(event) {
        const event2 = new CustomEvent('child', {
            // detail contains only primitives
            detail: {dateSelected: event.target.value}
            });
            this.dispatchEvent(event2);
    }
}