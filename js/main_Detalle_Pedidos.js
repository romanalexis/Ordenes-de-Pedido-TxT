var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos
var idDelCliente = 0;
var idDelPedido = 0;
var PedidoCliente = 0;
var PedidoDetalle = 0;

function obtenerDetallePedido(){
	idDelPedido = getVarUrl("idDelPedido");
	idDelCliente = getVarUrl("idDelCliente");

	db.transaction(queryDBPedido, errorOI);
}


function queryDBPedido(tx){
	tx.executeSql('SELECT * FROM OrdenPedido, Clientes WHERE OrdenPedido.id = ' + idDelPedido + ' AND Clientes.CCNit = ' + idDelCliente, [], VectorPedido, errorCB);
}

function VectorPedido(tx, results){

	for(var i=0; i < results.rows.length; i++)  
	{
		PedidoCliente = results.rows.item(i);
	
		$("#DirfactPedido").append(idDelPedido);
		$("#clientefactPedido").append(idDelCliente);
		$("#nitfactPedido").append(results.rows.item(i).RazonSocial);
		$("#PrecioTotalMPedidos").append(results.rows.item(i).Total);

		//QueryDetallePedido();
	};
	db.transaction(QueryDetallePedido, errorOI)
}

function QueryDetallePedido(tx){
	tx.executeSql('SELECT * FROM OrdenPedidoDet, Productos WHERE OrdenPedidoDet.Consecutivo == '+ idDelPedido + ' AND OrdenPedidoDet.CodProducto == Productos.Codigo', [], VectorDetallePedido, errorCB);
	//tx.executeSql('SELECT * FROM Ruta, Clientes WHERE Ruta.CCNit_Cliente == Clientes.CCNit AND Ruta.diaRuta == ' + fechaHoy, [], VectorRuta, errorCB);
}

function VectorDetallePedido(tx, results){
	for(var i=0; i < results.rows.length; i++)  
	{
		PedidoDetalle = results.rows.item(i);

		$("#listaProductosFactura").append('<tr><td>'+ results.rows.item(i).Descripcion +'</td><td>'+results.rows.item(i).CantUnidadEmpaque + ' x ' + results.rows.item(i).UnidEmpaque + '</td><td>'+ results.rows.item(i).Total +'</td></tr');
	};
}

function NewProduct(){
	document.location = "productos.html?idDelPedido=" + idDelPedido + "&idDelCliente=" + idDelCliente;
}

/*$("#listaProductosFactura").append('<tr><td>'+ descripcion +'</td><td>'+Cantidad * UM + '</td><td>'+Precio+'</td></tr');

productos.html?idDelCliente=604001301

precioTotal = precioTotal + parseFloat($('#DetallePedidocantidad').val() * $('#DetallePedidoTotal').val());
$("#PrecioTotalMPedidos").append(precioTotal);

*/

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

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}