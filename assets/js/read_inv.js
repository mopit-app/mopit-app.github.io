// DAVIDRVU - 2020
// SOURCE: https://stackoverflow.com/questions/12252378/capturing-a-form-submit-with-jquery-and-submit

$('#inv_form').on('submit', function(e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    var data = $("#inv_form :input").serializeArray();
    console.log(data); //use the console for debugging, F12 in Chrome, not alerts
    var cod_hex = hex_md5(data[0].value)
    if (cod_hex == "81fc444d0b46054e355d00f0992b065b"){
        console.log("Código correcto :)");
        window.location.replace("index-8c54340a-77c8-4270-85ed-0635a18cfd51.html");
    }
    else{
        console.log("Código incorrecto");
        alert("Acceso denegado");
    }
});
