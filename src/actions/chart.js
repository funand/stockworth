import rp from 'request-promise';
import { buildChart } from '../lib/chart-func';

export const setSymbol = (symbol) => ({ 
    type: "SET_SYMBOL", 
    symbol 
});

const setName = (name) => ({
    type: "SET_NAME",
    payload: name
});

export const getName = (stock) => {
    return (dispatch) => {
        return rp(`https://api.iextrading.com/1.0/stock/${stock}/book`)
            .then((data) => JSON.parse(data))
            .then((data) => {
                dispatch(setName(data.quote.companyName));
            })
            .catch((error) => {
                console.error(error)
            });
    }
}

const setChart = (chartData) => ({
    type: "SET_CHART_DATA", 
    chartData
});

export const getChartData = (stock) => {        
    return (dispatch) => {
        return rp(`https://api.iextrading.com/1.0/stock/${stock}/chart`)
        .then((data) => JSON.parse(data))
        .then((data) => {
            const formattedData = buildChart(data);
            dispatch(setChart(formattedData));
        })
        .catch((error) => {
            console.error(error)
        }); 
    }  
}
//add url to get all time data and store in firebase