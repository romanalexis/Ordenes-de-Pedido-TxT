var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos

function cargarPedidos(){
	db.transaction(queryDBPedido, errorOI);
}

function queryDBPedido(tx) {
    tx.executeSql('SELECT * FROM OrdenPedido, Clientes WHERE OrdenPedido.NitCC == Clientes.CCNit', [], VectorPedido, errorCB);
}

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function VectorPedido(tx, results)
{
	for(var i = 0; i < results.rows.length; i++)
	{
		$("#Lista_Pedidos").append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-last-child">'
                        +'<div class="ui-btn-inner ui-li"><div class="ui-btn-text">'
                        +'<a href="Detalle_Pedido.html?idDelPedido=' + results.rows.item(i).id + '&idDelCliente='+ results.rows.item(i).CCNit +'" rel="external" class="ui-link-inherit">'
                        +'<h2 class="ui-li-heading">' + results.rows.item(i).NombreComercial + '</h2>'
                        +'<p class="ui-li-desc">' + results.rows.item(i).CCNit + '</p>'
                        +'<p class="ui-li-desc">$ <span style="color:red;">' + results.rows.item(i).Total + '</span></p> '+
                            '<span class="ui-li-count">'+ results.rows.item(i).id +'</span>'+
                        '</a>'+
                     '</div></div></li>');
	}
}



function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}