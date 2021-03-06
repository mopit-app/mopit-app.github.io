// DAVIDRVU - 2020
// SOURCE: https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only

$.getJSON('https://api.ipify.org?format=json', function(data){
    console.log(data.ip);
    $('.data_ip').html(data.ip);

    // SOURCE: https://stackoverflow.com/questions/4937517/ip-to-location-using-javascript
    $.getJSON('https://ipapi.co/'+data.ip+'/json', function(data){
        console.log(data.city);
        console.log(data.country);
        $('.data_city').html(data.city);
        $('.data_country').html(data.country);
    });
});