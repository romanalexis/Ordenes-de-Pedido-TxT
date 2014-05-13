var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos
var fechaHoy = 0;
var semana=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];  

function seleccionarDia(){
	var f = new Date();
	fechaHoy = dia_semana(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
	db.transaction(queryDBRuta, errorOI);

	$("#Dia_ruta").append(semana[fechaHoy]);
}

function queryDBRuta(tx) {
    tx.executeSql('SELECT * FROM Ruta, Clientes WHERE Ruta.CCNit_Cliente == Clientes.CCNit AND Ruta.diaRuta == ' + fechaHoy, [], VectorRuta, errorCB);
}

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function VectorRuta(tx, results)
{
	for(var i = 0; i < results.rows.length; i++)
	{
		$("#Lista_Clientes_Ruta").append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-c">' 
                        + '<div class="ui-btn-inner ui-li">' 
                        + '<div class="ui-btn-text">'
                        +'<a href="Menu_Cliente.html?idDelCliente=' + results.rows.item(i).CCNit + '" rel="external" class="ui-link-inherit">' 
                        +'<img src="' + results.rows.item(i).url +'"" class="ui-li-thumb">' 
                        +'<h2 class="ui-li-heading">' + results.rows.item(i).Direccion +'</h2>' 
                        +'<p class="ui-li-desc">' + results.rows.item(i).NombreComercial +'</p>' 
                        +'<p class="ui-li-desc">' + results.rows.item(i).Barrio +'</p>'  
                        +'<p class="ui-li-desc">' + results.rows.item(i).Celular +'</p>' 
                        +'<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">'+ results.rows.item(i).ordenRuta+'</span>' 
                    +'</a>' 
                +'</div> </div> </li>');
	}
}

/*
    <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-c">
    <div class="ui-btn-inner ui-li">
    <div class="ui-btn-text">
                    <a href="Menu_Cliente.html" rel="external" class="ui-link-inherit">
                        <img src="img/clientes/Giam_Chou-Zen.jpg" class="ui-li-thumb">
                        <h2 class="ui-li-heading">Calle 56 32 54</h2>
                        <p class="ui-li-desc">Supermercados MercaUno</p>
                        <p class="ui-li-desc">Cabecera</p> 
                        <p class="ui-li-desc">6571234</p>
                        <span class="ui-li-count ui-btn-up-c ui-btn-corner-all">1</span>
                    </a>
                </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
*/

function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}

function dia_semana(fecha){   
    fecha=fecha.split('/');  
    if(fecha.length!=3){  
            return null;  
    }  
    
    //Vector para calcular día de la semana de un año regular.  
    var regular =[0,3,3,6,1,4,6,2,5,0,3,5];   
    //Vector para calcular día de la semana de un año bisiesto.  
    var bisiesto=[0,3,4,0,2,5,0,3,6,1,4,6];   
    //Vector para hacer la traducción de resultado en día de la semana.      
    //Día especificado en la fecha recibida por parametro.  
    var dia=fecha[0];  
    //Módulo acumulado del mes especificado en la fecha recibida por parametro.  
    var mes=fecha[1]-1;  
    //Año especificado por la fecha recibida por parametros.  
    var anno=fecha[2];  
    //Comparación para saber si el año recibido es bisiesto.  
    
    if((anno % 4 == 0) && !(anno % 100 == 0 && anno % 400 != 0))  
        mes=bisiesto[mes];  
    else  
        mes=regular[mes];  
    //Se retorna el resultado del calculo del día de la semana.  
    //return semana[
    return Math.ceil(Math.ceil(Math.ceil((anno-1)%7)+Math.ceil((Math.floor((anno-1)/4)-Math.floor((3*(Math.floor((anno-1)/100)+1))/4))%7)+mes+dia%7)%7);//];  
}  