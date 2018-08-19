const request = (method, url, done) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(method, url, true);

    xmlhttp.onload = () => {
        done(null, xmlhttp.response);
    }
    xmlhttp.onerror = () => {
        done(xmlhttp.response)
    }
    xmlhttp.send();
}

export const getStock = (stock) => {
    const method = 'GET';
    const url = `https://api.iextrading.com/1.0/stock/${stock}/book`;
    return new Promise((resolve, reject) => {
        request(method, url, (error, data) => {
            if(error) { 
                reject(error);
            }
            resolve(JSON.parse(data));
        });
    });
}





