// DAVIDRVU - 2020
// SOURCE: https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only

$.getJSON('https://api.ipify.org?format=json', function(data){
    console.log(data.ip);
    document.getElementById('id_ip_value').value=data.ip;

    // SOURCE: https://stackoverflow.com/questions/4937517/ip-to-location-using-javascript
    $.getJSON('https://ipapi.co/'+data.ip+'/json', function(data){
        console.log(data.city);
        console.log(data.country);
        document.getElementById('id_city').value=data.city;
        document.getElementById('id_country').value=data.country;
    });
});