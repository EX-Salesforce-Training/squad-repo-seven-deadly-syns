import { LightningElement } from 'lwc';

export default class App extends LightningElement 
{
  title = "Golden Spoke Driving School";
  isAboutUs = true;
  isAppointment = false;
  isFaq = false;

  handleClick(event)
  {
    if (event.target.label === "About Us")
    {
      this.isAboutUs = true;
      this.isAppointment = false;
      this.isFaq = false;
    }

    else if (event.target.label === "Class Registration")
    {
      this.isAboutUs = false;
      this.isAppointment = true;
      this.isFaq = false;
    }

    else
    {
      this.isFaq = true;
      this.isAboutUs = false;
      this.isAppointment = false;
    }
  }
}