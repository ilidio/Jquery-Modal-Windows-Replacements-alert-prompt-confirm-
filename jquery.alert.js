/**
 * Provides a Jquery replacement for JavaScript's Alert Dialog
 *  
 *  Example:
 *     alert2('This an example','Title example');       
 */
function alert2(text,title) {
    title = typeof(title) != 'undefined' ? title : 'Alert';
    //
    $('<div id="modalWindowAlert" style="display:none"></div>').appendTo('body');
    //
    $('#modalWindowAlert').html(text);
    $('#modalWindowAlert').dialog({
        buttons: {
            "Close": function() { 
                $(this).remove(); 
            }
        },
        closeOnEscape: true,
        closeText: "close",
        draggable: false,
        resizable: false,
        modal: true,
        width: 400,
        minHeight: 'auto',        
        hide: 'fade',
        modal: true,
        show: 'fade',
        title: title
    });
}

/**
 * Provides a Jquery replacement for JavaScript Confirm
 *  
 *  Example:
 *     confirm2('Tem a certeza que deseja eliminar esta página e todos os dados a ela associados?','Confirm',
 *                function () {
 *                   location.href = '../conteudos/index.php?target=listar-paginas&action=delete&id_website='+id_website+'&id_pagina=' +id+'&tab='+tab;
 *               });        
 */
function confirm2(msg,title,callback) {
    title = typeof(title) != 'undefined' ? title : 'Confirm';
    callback = typeof(callback) != 'undefined' ? callback : '';    
    $('<div id="modalWindowConfirm" style="display:none"></div>').appendTo('body');
    //    
    $('#modalWindowConfirm').html(msg);
    $('#modalWindowConfirm').dialog({
        title: title,
        closeOnEscape: true,
        closeText: "close",
        draggable: false,
        resizable: false,
        modal: true,
        width: 400,
        minHeight: 'auto',        
        hide: 'fade',
        modal: true,
        buttons : {
            "Confirm" : function() {
                $(this).remove(); 
                // call the callback
                if ($.isFunction(callback)) {
                     callback.apply();
                }
            },
            "Cancel" : function() {
               // $('#jqueryDialog').dialog("close");
                $(this).remove(); 

            }
        }
    });

}


/**
 * Provides a Jquery replacement for JavaScript Prompt
 *  
 *  Example:
 *     prompt2('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
 *      if( r ) alert('You entered ' + r);
 *     });
 */
function prompt2(msg,value,title,callback) {
    title = typeof(title) != 'undefined' ? title : 'Prompt';
    value = typeof(value) != 'undefined' ? value : '';
    callback = typeof(callback) != 'undefined' ? callback : '';
    $('<div id="modalWindowPrompt" style="display:none"></div>').appendTo('body');
    //    
    $('#modalWindowPrompt').html(msg+" <input id='modalWindowInputPrompt' value='"+value+"'/>");
    $('#modalWindowPrompt').dialog({
        title: title,
        closeOnEscape: true,
        closeText: "close",
        draggable: false,
        resizable: false,
        modal: true,
        width: 'auto',
        minHeight: 'auto',        
        hide: 'fade',
        modal: true,
        buttons : {
            "OK" : function() {
                // call the «callback function»
                if ($.isFunction(callback)) {
                     callback( document.getElementById("modalWindowInputPrompt").value );
                     //callback.apply();
                }
                $(this).remove(); 
            },
            "Cancel" : function() {
               // $('#jqueryDialog').dialog("close");
                $(this).remove(); 

            }
        }
    });

}