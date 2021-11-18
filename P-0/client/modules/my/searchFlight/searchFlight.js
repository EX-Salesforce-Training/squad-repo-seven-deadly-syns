import { LightningElement, track, api } from 'lwc';

export default class SearchFlight extends LightningElement {

    @track
    states = [
        {
            Id: "FL",
            Name: 'Florida',
        },
        {
            Id: "TX",
            Name: 'Texas',
        },
        {
            Id: "CA",
            Name: 'California',
        },
    ];

    @track
    cities = [
        {
            Id: 1,
            Name: 'Orlando',
            State_id: "FL",
        },
        {
            Id: 2,
            Name: 'Tampa',
            State_id: "FL",
        },
        {
            Id: 3,
            Name: 'Dallas',
            State_id: "TX",
        },
        {
            Id: 4,
            Name: 'Houston',
            State_id: "TX",
        },
        {
            Id: 5,
            Name: 'Los Angeles',
            State_id: "CA",
        },
        {
            Id: 6,
            Name: 'San Diego',
            State_id: "CA",
        },
    ];

    @track
    cities = [
        {
            Id: 1,
            Name: 'Orlando',
            State_id: "FL",
        },
        {
            Id: 2,
            Name: 'Tampa',
            State_id: "FL",
        },
        {
            Id: 3,
            Name: 'Dallas',
            State_id: "TX",
        },
        {
            Id: 4,
            Name: 'Houston',
            State_id: "TX",
        },
        {
            Id: 5,
            Name: 'Los Angeles',
            State_id: "CA",
        },
        {
            Id: 6,
            Name: 'San Diego',
            State_id: "CA",
        },
    ];

    @track
    airports = [
        {
            Id: "ORL",
            Name: 'Orlando International',
            City_id: 1,
        },
        {
            Id: "TPA",
            Name: 'Tampa International',
            City_id: 2,
        },
        {
            Id: "DFW",
            Name: 'Dallas Ft Worth International',
            City_id: 3,
        },
        {
            Id: "HOU",
            Name: 'George Bush Intercontinental',
            City_id: 4,
        },
        {
            Id: "LAX",
            Name: 'Los Angeles International',
            City_id: 5,
        },
        {
            Id: "SAN",
            Name: 'San Diego International',
            City_id: 6,
        },
    ];

    @track
    airports = [
        {
            Id: 1,
            Airport_id_from: 'ORL',
            Airport_id_to: 'TPA',
            Date: '2022-01-01 08:15:00'
        },
        {
            Id: 2,
            Airport_id_from: 'ORL',
            Airport_id_to: 'DFW',
            Date: '2022-01-01 09:15:00'
        },
        {
            Id: 3,
            Airport_id_from: 'ORL',
            Airport_id_to: 'LAX',
            Date: '2022-01-01 10:15:00'
        },
        {
            Id: 4,
            Airport_id_from: 'TPA',
            Airport_id_to: 'ORL',
            Date: '2022-01-01 11:15:00'
        },
        {
            Id: 5,
            Airport_id_from: 'TPA',
            Airport_id_to: 'HOU',
            Date: '2022-01-01 12:15:00'
        },
        {
            Id: 6,
            Airport_id_from: 'TPA',
            Airport_id_to: 'SAN',
            Date: '2022-01-01 13:15:00'
        },


        {
            Id: 7,
            Airport_id_from: 'DFW',
            Airport_id_to: 'TPA',
            Date: '2022-01-01 08:15:00'
        },
        {
            Id: 8,
            Airport_id_from: 'DFW',
            Airport_id_to: 'DFW',
            Date: '2022-01-01 09:15:00'
        },
        {
            Id: 9,
            Airport_id_from: 'DFW',
            Airport_id_to: 'LAX',
            Date: '2022-01-01 10:15:00'
        },
        {
            Id: 10,
            Airport_id_from: 'DFW',
            Airport_id_to: 'ORL',
            Date: '2022-01-01 11:15:00'
        },
        {
            Id: 11,
            Airport_id_from: 'TPA',
            Airport_id_to: 'HOU',
            Date: '2022-01-01 12:15:00'
        },
        {
            Id: 12,
            Airport_id_from: 'TPA',
            Airport_id_to: 'SAN',
            Date: '2022-01-01 13:15:00'
        },


        {
            Id: 13,
            Airport_id_from: 'LAX',
            Airport_id_to: 'TPA',
            Date: '2022-01-01 08:15:00'
        },
        {
            Id: 14,
            Airport_id_from: 'LAX',
            Airport_id_to: 'HOU',
            Date: '2022-01-01 09:15:00'
        },
        {
            Id: 15,
            Airport_id_from: 'LAX',
            Airport_id_to: 'SAN',
            Date: '2022-01-01 10:15:00'
        },
        {
            Id: 16,
            Airport_id_from: 'SAN',
            Airport_id_to: 'ORL',
            Date: '2022-01-01 11:15:00'
        },
        {
            Id: 17,
            Airport_id_from: 'SAN',
            Airport_id_to: 'DFW',
            Date: '2022-01-01 12:15:00'
        },
        {
            Id: 18,
            Airport_id_from: 'SAN',
            Airport_id_to: 'LAX',
            Date: '2022-01-01 13:15:00'
        },
    ];

    @api
    searchAttempted;

    whereFrom = '';
    whereTo = '';
    when;

    @track
    foundFlights;

    connectedCallback(){
        
    }

    handleChild(event){
        if(event.detail.departure == "1")
            this.whereFrom = event.detail.whereFrom;
        else
            this.whereTo = event.detail.whereTo;
    }

    handleDate(event) {
        this.when = event.detail.dateSelected;
    }

    handleSearchButton() {
        this.searchAttempted = true;
        this.foundFlights = this.airports.filter(airport => {
            return (airport.Airport_id_from == this.whereFrom && 
            airport.Airport_id_to == this.whereTo);
        });
        console.log(this.whereFrom + "   " + this.whereTo);
    }
}