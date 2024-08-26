import React, { useEffect, useState } from 'react';

class ApiEngine {
    constructor (){
        this.previousRequestTime = new Date();
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
        while (RequestMustWait){
            Sleep(1000).then(() => { !RequestMustWait && DataFetcher.fetchData(endpointUrl) });
        }
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

