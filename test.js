var geocoding = new require('reverse-geocoding');
var config = {
    'latitude': 40.00403611111111,
    'longitude': 116.48485555555555
};

// geocoding.location(config, function (err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
var config = {
    'latitude': 40.00403611111111,
    'longitude': 116.48485555555555,
    'language': 'zh-cn'
};
geocoding[0].location(config, (err, data) => {
    console.log(err ? err : data);
});