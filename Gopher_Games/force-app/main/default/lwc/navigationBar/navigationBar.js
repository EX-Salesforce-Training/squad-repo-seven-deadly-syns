import { api, LightningElement } from 'lwc';

export default class navigationBar extends LightningElement
{
    /*
    HomePage; 1
    Games;    2
    Contact;  3
    Support;  4
    Careers;  5
    AboutUs;  6
    */
   
    navigationToHome()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 1});
        this.dispatchEvent(selectedEvent);
    }
    
    navigationToGames()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 2});
        this.dispatchEvent(selectedEvent);
    }

    navigationToContact()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 3});
        this.dispatchEvent(selectedEvent);
    }

    navigationToSupport()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 4});
        this.dispatchEvent(selectedEvent);
    }

    navigationToCareers()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 5});
        this.dispatchEvent(selectedEvent);
    }

    navigationToAboutUs()
    {
        const selectedEvent = new CustomEvent("navigationswitch", {detail: 6});
        this.dispatchEvent(selectedEvent);
    }
}