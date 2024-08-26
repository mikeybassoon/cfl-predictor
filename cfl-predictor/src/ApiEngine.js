import { useEffect, useState } from 'react';

export class ApiEngine {
    constructor (){
        this.previousRequestTime = new Date();
        this.urlBase = "http://api.cfl.ca";
    }

    DataFetcher = function(endpointUrl) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        const fetchData = async() => {
            try{
                const response = await fetch(endpointUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
    }

    ExecuteApiCall = function(endpointUrl) {
        while (this.RequestMustWait){
            this.Sleep(1000).then(() => { !this.RequestMustWait && this.DataFetcher.fetchData(endpointUrl) });
        }
    }

    GetSeasonStandings = function(year){
        const key = ''; // this should contain the API key once I get it working
        const url = this.urlBase + '/v1/standings/' + year + key;
        return this.ExecuteApiCall(url);
    }

    RequestMustWait = function() {
        const currentTime = new Date();
        if (currentTime - this.previousRequestTime > 2000)
            return false;
        return true;
    }

    Sleep = function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};