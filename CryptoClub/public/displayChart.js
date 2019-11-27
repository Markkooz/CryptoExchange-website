var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('c')); // true
var type = urlParams.get('c');

var cryptos = [];
var rgb = '';
var rgbBack = '';
function findB(curren) {
    return curren.currency == "BTC";
}
function findE(curren) {
    return curren.currency == "ETH";
}
function findL(curren) {
    return curren.currency == "LTC";
}
$.get("https://api.nomics.com/v1/currencies/sparkline?key=2018-09-demo-dont-deploy-b69315e440beb145&start=2019-11-15T00%3A00%3A00Z", function(data, status) {
	//checking network status of calls
	console.log("Status: " + status);
	//console.log(data);
    //cryptos = data;
    if(type === "bitcoin"){
        cryptos = data.find(findB);
        rgb = 'rgba(255, 99, 132, 0.2)';
        rgbBack = 'rgba(255, 99, 132, 1)';
    }
    else if (type === "ethereum"){
        cryptos = data.find(findE);
        rgb = 'rgba(54, 162, 235, 0.2)';
        rgbBack = 'rgba(54, 162, 235, 1)';
    }
    else{ //type is litecoin
        cryptos = data.find(findL);
        rgb = 'rgba(255, 206, 86, 0.2)'
        rgbBack = 'rgba(255, 206, 86, 1)';
    }
    cryptos.timestamps.forEach((time, index) => {
        cryptos.timestamps[index] = time.substr(0,10);
    })
    console.log(cryptos);
}).then(() => {
    //example
    //edit for line style
    //add in data set code from ajax request!
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cryptos.timestamps,
            datasets: [{
                label: 'USD value',
                data: cryptos.prices,
                backgroundColor: [
                    rgb
                ],
                borderColor: [
                    rgbBack
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        },
        responsive: false,
    });
});
