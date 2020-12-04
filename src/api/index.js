import axios from 'axios';

// shoutout naar https://github.com/mathdroid/ voor deze API :)
const apiURL = "https://covid19.mathdro.id/api";

// we maken een arrow function waarmee we met asynchronous data werken

export const fetchInformatie = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}


export const fetchDagelijkseInfo = async () => {
    try {
        const { data } = await axios.get(`${apiURL}/daily`) // we maken template string met ${}
        const modifiedData = data.map((dagelijkseInfo) => ({
            confirmed: dagelijkseInfo.confirmed.total,
            deaths: dagelijkseInfo.deaths.total,
            date: dagelijkseInfo.reportDate,
        }));

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

/*
export const fetchLanden = async () => {
    try {
        const { data: { countries }} = await axios.get(`${apiURL}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {  
        console.log(error);
    }
}

*/