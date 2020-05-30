// SOURCE: https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only

$.getJSON('https://api.ipify.org?format=json', function(data){
    console.log(data.ip);
    $('.myinput').html(data.ip);
});