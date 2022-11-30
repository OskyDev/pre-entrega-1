let nombre   = prompt("Ingrese su nombre ");
let saludo   = alert(`Hola ${nombre}. Presione aceptar para empezar su pedido`)

   
let pedidoHamburguesa = prompt('Que burga desea pedir hoy? (Simple, Doble o Triple)?').toUpperCase()
let delivery          = prompt('Desea que se lo llevemos a su casa?').toUpperCase();

    if(delivery == 'SI'){
        prompt('Ingrese su direccion ')
    }else{
        alert('Su pedido estara listo para ser retirado por nuestro local en 30 minutos')
    }

    let precioPedido = '';


    function pedidoCompleto(pedidoHamburguesa){
       

       if ( pedidoHamburguesa == 'SIMPLE' ){

        precioPedido = 1000;
        nombrePedido = 'Hamburguesa simple'

       }if ( pedidoHamburguesa == 'DOBLE' ){

        precioPedido = 1200;
        nombrePedido = 'Hamburguesa doble ' 

       } if( pedidoHamburguesa == 'TRIPLE' ){

        precioPedido = 1400;
        nombrePedido = 'Hamburguesa triple'

       }



    }

    pedidoCompleto(pedidoHamburguesa);



    prompt('Desea agregar algo mas?(SI/NO')

   
alert(`Su pedido esta completado , este incluye una ${nombrePedido} y el precio es de ${precioPedido} `);

    