const initialState = {
    symbol: 'K',
   chartData: {}
   }
   

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_SYMBOL": 
        return{
            ...state,
            symbol: action.symbol
        };
        case "SET_CHART_DATA":
        return{
            ...state,
            chartData: action.chartData
        };    
        default:
            return state;        
    }
};