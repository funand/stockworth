const initialState = {
    symbol: 'K',
    companyName: "Kellogg Company",
    chartData: {}
} 

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_SYMBOL": 
            return { ...state, symbol: action.symbol };
        case "SET_CHART_DATA":
            return { ...state, chartData: action.chartData };  
        case "SET_NAME": 
            return { ...state, companyName: action.payload };      
        default:
            return state;        
    }
};