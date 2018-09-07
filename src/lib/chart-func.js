import moment from 'moment';

export const buildChart = (data) => {
    const filteredData = data.map((day) => ({
        date: day.date,
        high: day.high,
        low: day.low,
        close: day.close
    }));
    
	return {
			labels: filteredData.map((day) => day.date),
			datasets: [
				{
					label: 'high',
					data: filteredData.map((day) => day.high),
					borderColor: "green", 
					fill: false                   
                },
                {
					label: 'low',
					data: filteredData.map((day) => day.low),
					borderColor: "red", 
					fill: false                   
                },
                {
					label: 'close',
					data: filteredData.map((day) => day.close),
					borderColor: "blue", 
					fill: false                   
				}
			],
	};
}

//gonna add candle stick later with open 