const request=require('request');

var getWeather = (lat,lon,callback) =>{

  var loc='https://api.darksky.net/forecast/57eb0e5c0a9c72e9682af09f09029d48/'
  loc=loc+lat+','+lon;

  request({
      url:loc,
      json : true
    },(error,response,body)=>{
      if((!error) &&(response.statusCode === 200 )){
            callback(undefined,{
              temperature: body.currently.temperature,
              apparentTemperature:  body.currently.apparentTemperature

            })
          }
      else {
        callback('Unable to fetch');
      }
  });

};

module.exports.getWeather  = getWeather;
