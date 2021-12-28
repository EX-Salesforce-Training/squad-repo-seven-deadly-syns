import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { api, LightningElement } from 'lwc';

export default class Base extends LightningElement 
{
    // hold current page bool

    HomePage = false;
    Games = false;
    Contact = false;
    Support = false;
    Careers = false;
    AboutUs = false;

    connectedCallback()
    {
        this.HomePage = true;
    }

    handleNavigation(event)
    {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;

        switch(event.detail)
        {
            case 1:
                this.HomePage = true;
                break;
            case 2:
                this.Games = true;
                break;
            case 3:
                this.Contact = true;
                break;
            case 4:
                this.Support = true;
                break;
            case 5:
                this.Careers = true;
                break;
            case 6:
                this.AboutUs = true;
                break;
        }
    }
}