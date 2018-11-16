const request=require('request');

var geocodeAddress = (address,callback) => {
  var loc=encodeURIComponent(address);
  const map='http://www.mapquestapi.com/geocoding/v1/address?key=MXjcmkeO9BStuQGww23AVp0uSu238Vis&location=';
  loc=map+loc;
  request({
    url:loc,
    json : true
  },(error,response,body)=>{
    if(error)
      callback('Unable to connect to Google api');
    else if(body.info.statuscode === 400)
      callback('Invalid location');
    else{
      callback(undefined,{
        latitude:body.results[0].locations[0].latLng.lat,
        longitude:body.results[0].locations[0].latLng.lng
      });

  }
}
);
};
module.exports={
  geocodeAddress
};
