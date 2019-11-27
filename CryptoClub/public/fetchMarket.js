var btcQ = $("#btcQ");
var ethQ = $("#ethQ");
var ltcQ = $("#ltcQ");
var btcImg = $("#btcImg");
var ethImg = $("#ethImg");
var ltcImg = $("#ltcImg");

$.get('https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=BTC,ETH,LTC&interval=1d,30d&convert=USD', function(data, status) {
	//checking network status of calls
	console.log("Status: " + status);
	console.log(data);
    cryptos = data;
    btcQ.text("$" + (Math.ceil(cryptos[0].price * 100) / 100));
    ethQ.text("$" + (Math.ceil(cryptos[1].price * 100) / 100));
    ltcQ.text("$" + (Math.ceil(cryptos[2].price * 100) / 100));
    btcImg.attr('src', cryptos[0].logo_url);
    ethImg.attr('src', cryptos[1].logo_url);
    ltcImg.attr('src', cryptos[2].logo_url);
})