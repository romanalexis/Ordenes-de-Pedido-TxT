var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos

var idDelCliente = 0;
var CrearPedido = 0;
/*------------------------------------------------------------------------- Listar los Clientes--------------------------------------------------------------------------*/
function ObtenerCliente () {
    CrearPedido = getVarUrl("CrearPedido");
	db.transaction(queryDBCliente, errorOI);
}

function queryDBCliente(tx) {
    tx.executeSql('SELECT * FROM Clientes', [], VectorCliente, errorCB);
}

function VectorCliente(tx, results){
    $('.clear').click(function()
    {
        $("#Lista_Clientes").empty();
    });
    for(var i=0; i < results.rows.length; i++) 
    {
        var textCliente = "";
        if(CrearPedido != 0)
        {
            textCliente = 'productos.html?idDelCliente='  + results.rows.item(i).CCNit;
        }
        else
            textCliente = 'Menu_Cliente.html?idDelCliente='  + results.rows.item(i).CCNit;

    	$("#Lista_Clientes").append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-c">' 
    		+ '<div class="ui-btn-inner ui-li">' 
    		+ '<div class="ui-btn-text">'
    		+'<a rel="external" class="ui-link-inherit" href="' + textCliente +'" >' + 
    		'<img src="'+ results.rows.item(i).url + '" class="ui-li-thumb" >' +
    		'<h2 class="ui-li-heading">' + results.rows.item(i).NombreComercial + '</h2>' + 
    		'<p class="ui-li-desc">' + results.rows.item(i).RazonSocial + '&nbsp &nbsp <b style="color:#000000;">' + results.rows.item(i).CCNit + '</b></p>' + 
    		'<p class="ui-li-desc">' + results.rows.item(i).Direccion + ' &nbsp ' + results.rows.item(i).Barrio + '</p>' 
    		+'</a> </div> </div> </li>'
        );
    }
}


function mostrarCliente(){
    idDelCliente = getVarUrl("idDelCliente");
    //idDelCliente = id;
    db.transaction(function (tx){

        tx.executeSql('SELECT * FROM Clientes WHERE CCNit =' + idDelCliente, [], function (tx, results){
            $('.clear').click(function()
            {
                $("#Cliente_Name").empty();
                //$("#Menu_Cliente").empty();
            });
            for(var i=0; i < results.rows.length; i++) 
            {
                $("#Cliente_Name").append(results.rows.item(i).NombreComercial);
            }
        }, errorCB);
        }
    );
}

function ObtenerDatosCliente(){
    document.location = "Detalle_Cliente.html?idDelCliente=" +getVarUrl("idDelCliente");
}

function mostrarDatosCliente(){
    var id = getVarUrl("idDelCliente");
    db.transaction(function (tx){

        tx.executeSql('SELECT * FROM Clientes WHERE CCNit =' + id, [], function (tx, results){
            $('.clear').click(function()
            {
                $("#ClienteDetalle_RSocial").empty();
                $("#ClienteDetalle_Dir").empty();
                $("#ClienteDetalle_Ciudad").empty();
                $("#ClienteDetalle_Zona").empty();
                $("#ClienteDetalle_Barrio").empty();
                $("#ClienteDetalle_Tel1").empty();
                $("#ClienteDetalle_Cel").empty();
                $("#ClienteDetalle_Mail").empty();
                $("#ClienteDetalle_Tabla").append();
            });
            for(var i=0; i < results.rows.length; i++) 
            {
                $("#imagen_Cliente").append('<img src="'+results.rows.item(i).url +'">');

                $("#Cliente_Name2").append(results.rows.item(i).NombreComercial);

                $("#ClienteDetalle_RSocial").append(results.rows.item(i).RazonSocial);
                $("#ClienteDetalle_Dir").append(results.rows.item(i).Direccion);
                $("#ClienteDetalle_Ciudad").append(results.rows.item(i).Ciudad);
                $("#ClienteDetalle_Zona").append(results.rows.item(i).Zona);
                $("#ClienteDetalle_Barrio").append(results.rows.item(i).Barrio);
                $("#ClienteDetalle_Tel1").append(results.rows.item(i).Telefono1);
                $("#ClienteDetalle_Cel").append(results.rows.item(i).Celular);
                $("#ClienteDetalle_Mail").append(results.rows.item(i).Email);

                $("#ClienteDetalle_NombreListaP").append(results.rows.item(i).NombreListaP);
                $("#ClienteDetalle_Descuento").append(results.rows.item(i).Descuento);
                $("#ClienteDetalle_FormaPago").append(results.rows.item(i).FormaPago);
                $("#ClienteDetalle_Cupo").append(results.rows.item(i).Cupo);
                $("#ClienteDetalle_Plazo").append(results.rows.item(i).Plazo);
                $("#ClienteDetalle_CCNit").append(results.rows.item(i).CCNit);
                $("#ClienteDetalle_Celular").append(results.rows.item(i).Celular);
                $("#ClienteDetalle_TipoJuridico").append(results.rows.item(i).TipoJuridico);
                $("#ClienteDetalle_Regimen").append(results.rows.item(i).Regimen);
                $("#ClienteDetalle_Retefuente").append(results.rows.item(i).Retefuente);
                $("#ClienteDetalle_ReteIVA").append(results.rows.item(i).ReteIVA);
                $("#ClienteDetalle_ReteICA").append(results.rows.item(i).ReteICA);
                $("#ClienteDetalle_ReteCREE").append(results.rows.item(i).ReteCREE);
                   
            }
        }, errorCB);
        }
    );
}
/*------------------------------------------------------------------------- Fin Listar los Clientes------------------------------------------------------------------------*/
function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}

function getVarUrl( name ){
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp ( regexS );
 var tmpURL = window.location.href;
 var results = regex.exec( tmpURL );
 if( results == null )
  return"";
 else
  return results[1];
}

function EnviarProductos(){

    document.location = "productos.html?idDelCliente=" + idDelCliente;
}