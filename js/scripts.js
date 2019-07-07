$(document).ready(function(){
    $('#evento-titulo-input').keyup(function(){
        var titulo = $('#evento-titulo-input').val();
        $('#previsualizacion-evento-titulo').html(titulo);
    })


    $('[name=color]').click(function(){
        switch (this.id) {
            case 'circulo1':
                $('#previsualizacion-evento-contenedor').css('color','blue');
                break;
            case 'circulo2':
                $('#previsualizacion-evento-contenedor').css('color','red');
                break;
            case 'circulo3':
                $('#previsualizacion-evento-contenedor').css('color','green');
            break;
            case 'circulo4':
                $('#previsualizacion-evento-contenedor').css('color','yellow');
                break;
            case 'circulo5':
                 $('#previsualizacion-evento-contenedor').css('color','pink');
            break;
        }
    })

    $('[name=tamanio-fuente]').click(function(){
        switch (this.id) {
            case 'fuente1':
                $('#previsualizacion-evento-titulo').css('font-size','20px');
                break;
            case 'fuente2':
                $('#previsualizacion-evento-titulo').css('font-size','22px');
                break;
            case 'fuente3':
                $('#previsualizacion-evento-titulo').css('font-size','24px');
            break;
            case 'fuente4':
                $('#previsualizacion-evento-titulo').css('font-size','26px');
                break;
            case 'fuente5':
                 $('#previsualizacion-evento-titulo').css('font-size','28px');
            break;
        }
    })

    $('#evento-fecha-input').keyup(function(){
        var titulo = $('#evento-fecha-input').val();
        $('#previsualizacion-evento-fecha').html(titulo);
    })

    $('[name=ubicacion]').click(function(){
        switch (this.id) {
            case 'ubicacion1':
                $('#previsualizacion-evento-fecha').css({
                    'left' : '0',
                    'top' : '0',
                    'right' : 'unset',
                    'bottom' : 'unset'
                });
                break;
            case 'ubicacion2':
                    $('#previsualizacion-evento-fecha').css({
                        'right' : '0',
                        'top' : '0',
                        'left' : 'unset',
                        'bottom' : 'unset'
                    });                
                break;
            case 'ubicacion3':
                    $('#previsualizacion-evento-fecha').css({
                        'left' : '0',
                        'bottom' : '0',
                        'top' : 'unset',
                        'right' : 'unset',
                    });            
                break;
            case 'ubicacion4':
                    $('#previsualizacion-evento-fecha').css({
                        'right' : '0',
                        'bottom' : '0',
                        'top' : 'unset',
                        'left' : 'unset',

                    });               
                break;

        }
    })

    $('[name=fondo]').click(function(){
        switch (this.id) {
            case 'fondo1':
                $('#previsualizacion-evento-contenedor').css('background-color','blue');
                break;
            case 'fondo2':
                $('#previsualizacion-evento-contenedor').css('background-color','red');
                break;
            case 'fondo3':
                $('#previsualizacion-evento-contenedor').css('background-color','green');
            break;
            case 'fondo4':
                $('#previsualizacion-evento-contenedor').css('background-color','yellow');
                break;
            case 'fondo5':
                 $('#previsualizacion-evento-contenedor').css('background-color','pink');
            break;
        }
    })
})