var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('c')); // true
var type = urlParams.get('c');

var cryptos = [];
var rgb = '';
var rgbBack = '';
$.get("https://api.nomics.com/v1/currencies/sparkline?key=2018-09-demo-dont-deploy-b69315e440beb145&start=2019-11-22T00%3A00%3A00Z", function(data, status) {
	//checking network status of calls
	console.log("Status: " + status);
	//console.log(data);
    //cryptos = data;
    if(type === "bitcoin"){
        cryptos = data[340];
        rgb = 'rgba(255, 99, 132, 0.2)';
        rgbBack = 'rgba(255, 99, 132, 1)';
    }
    else if (type === "ethereum"){
        cryptos = data[806];
        rgb = 'rgba(54, 162, 235, 0.2)';
        rgbBack = 'rgba(54, 162, 235, 1)';
    }
    else{ //type is litecoin
        cryptos = data[1318];
        rgb = 'rgba(255, 206, 86, 0.2)'
        rgbBack = 'rgba(255, 206, 86, 1)';
    }
    console.log(cryptos);
}).then(() => {
    //example
    //edit for line style
    //add in data set code from ajax request!
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [cryptos.timestamps[1].substr(0,10) , cryptos.timestamps[2].substr(0,10), cryptos.timestamps[3].substr(0,10), cryptos.timestamps[4].substr(0,10), cryptos.timestamps[5].substr(0,10),],
            datasets: [{
                label: 'USD value',
                data: [cryptos.prices[0], cryptos.prices[1], cryptos.prices[2], cryptos.prices[3], cryptos.prices[4], cryptos.prices[5]],
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
