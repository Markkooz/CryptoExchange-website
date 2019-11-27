//var Chart = require('chart.js');
//$("#tests").addClass("text-white bg-primary");
// require('axios')
//   .get("https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR")
//   .then(response => console.log(response))
var cryptos = [];
$.get('https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=BTC,ETH,LTC&interval=1d,30d&convert=USD', function(data, status) {
	//checking network status of calls
	console.log("Status: " + status);
	console.log(data);
    cryptos = data;
}).then(() => {
    //example
    //edit for line style
    //add in data set code from ajax request!
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [cryptos[0].name, cryptos[1].name, cryptos[2].name],
            datasets: [{
                label: 'USD value',
                data: [cryptos[0].price, cryptos[1].price, cryptos[2].price],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        responsive: false,
    });
});
