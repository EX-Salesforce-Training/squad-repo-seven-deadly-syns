import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import FIRST_NAME_FIELD from '@salesforce/schema/Student__c.First_Name_del__c';
import LAST_NAME_FIELD from '@salesforce/schema/Student__c.Last_Name_del__c';
import EMAIL_FIELD from '@salesforce/schema/Student__c.Student_Email__c';

export default class Appointment extends LightningElement 
{
    @api objectApiName;

    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_FIELD];

    handleSuccess(event)
    {
        const evt = new ShowToastEvent(
            {
                title: 'Student Submitted',
                message: 'First Name: ' + this.fields.FIRST_NAME_FIELD + ' Last Name: ' + this.fields.LAST_NAME_FIELD
            });

            this.dispatchEvent(evt);
    }
}