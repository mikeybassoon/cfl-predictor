import { useEffect, useState } from 'react';
import Sleep from './Functions.js';

const urlBase = "http://api.cfl.ca";

ApiEngine = function(props) {
    //
}

DataFetcher = function(endpointUrl) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    FetchData = async() => {
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
    while (RequestMustWait){
        Sleep(1000).then(() => { !RequestMustWait && DataFetcher(endpointUrl) });
    }
}

RequestMustWait = function(previousRequestTime) {
    const currentTime = new Date();
    if (currentTime - previousRequestTime > 2000)
        return false;
    return true;
} 

// specific API calls

GetSeasonStandings = function(year){
    const key = ''; // this should contain the API key once I get it working
    const url = urlBase + '/v1/standings/' + year + key;
    return ExecuteApiCall(url);
} 