export const getChart = (data) => {
  
    const times=[];
    if (data.trades){
      data.trades.forEach(element => {

        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(element.timestamp*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        times.push(formattedTime);  
      });
    }
    const prices = [];
    if (data.trades){

      data.trades.forEach(element => {
          prices.push(element.price);  
      });
    }
    const companyName = data.quote.companyName;
    
   return {
       chartData: {
                labels: ["times", "pd","po"],
                datasets: [
                    {
                      label: companyName,
                      data: [6,7,2,9,0,4],
                      borderColor: "green", 
                      fill: false                   
                      }
                ],
        }
      };
}