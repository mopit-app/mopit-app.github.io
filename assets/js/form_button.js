/* DAVIDRVU - 2020 */

$(document).ready(function(){

    $('#id_envio_contacto').on('submit', function() {
        var $this = $('#button_submit_msg');
        console.log("submit! -> " + $this.get(0).id);
        $this.button('loading');
    });
    
});

