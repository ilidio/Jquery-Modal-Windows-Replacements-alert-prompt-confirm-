Jquery prompt replacement

Provides a Jquery replacement for JavaScript's Alert Dialog

* Alert2, Prompt2, Confirm2



Provides a Jquery replacement for JavaScript's Alert Dialog
  
Example:
	alert2('This an example','Title example');      



Provides a Jquery replacement for JavaScript Confirm
  
Example:
      confirm2('Tem a certeza que deseja eliminar esta página e todos os dados a ela associados?','Confirm',
                 function () {
                    location.href = '../conteudos/index.php?target=listar-paginas&action=delete&id_website='+id_website+'&id_pagina=' +id+'&tab='+tab;
                });    




Provides a Jquery replacement for JavaScript Prompt
   
Example:
      prompt2('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
       if( r ) alert('You entered ' + r);
      });





