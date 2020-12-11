// create a request variable. request variable issue the http request. by
// creating an instance of xml-http-request
let request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {

    var data = JSON.parse(this.response);
    console.log(data);
    let lat=data[0].latlng[0];
    let long = data[0].latlng[1];
    getweather(lat,long);
   }
   request.onerror=function()
   {
       alert("Network error");
   }
function getweather(lat,long)
{
    let request = new XMLHttpRequest();
    let urlstring="https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long+ "&appid=5b996480ee4cdf815ae66267c16431ec";
    request.open('GET',urlstring,true);
    request.send();
    request.onload = function () {
         var data = JSON.parse(this.response);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
    }
}   