// SOURCE: https://stackoverflow.com/questions/12252378/capturing-a-form-submit-with-jquery-and-submit

$('#inv_form').on('submit', function(e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    var data = $("#inv_form :input").serializeArray();
    console.log(data); //use the console for debugging, F12 in Chrome, not alerts
});