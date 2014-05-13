var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos
var idDelCliente = 0;
var idDelPedido = 0;

function cargarProductos(){
	idDelCliente = getVarUrl("idDelCliente");
    idDelPedido = getVarUrl("idDelPedido");
    db.transaction(queryDBRuta, errorOI);
}

function queryDBRuta(tx) {
    tx.executeSql('SELECT * FROM Productos', [], VectorProducto, errorCB);
}

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function VectorProducto(tx, results)
{
    for(var i = 0; i < results.rows.length; i++)
	{
        var textCliente = "";
        if(idDelCliente != 0)
        {
            if(idDelPedido == 0)
                textCliente = 'Detalle_Producto_Pedido.html?idDelProducto='  + results.rows.item(i).id + '&idDelCliente=' + idDelCliente;
            else
                textCliente = 'Detalle_Producto_Pedido.html?idDelProducto='  + results.rows.item(i).id + '&idDelCliente=' + idDelCliente + '&idDelPedido=' + idDelPedido;
        }
        else
            textCliente = 'Detalle_Producto.html?idDelProducto='  + results.rows.item(i).id;

		$("#Listado_Productos").append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-c">'
            +'<div class="ui-btn-inner ui-li">'
            +'<div class="ui-btn-text">'
            +'<a rel="external" href="'  + textCliente + '"class="ui-link-inherit">'
            +'<img src="'+ results.rows.item(i).Imagen1 +'"class="ui-li-thumb">'
            +'<h2 class="ui-li-heading">'+ results.rows.item(i).Descripcion +'</h2>'
            +'<p class="ui-li-desc">'+ results.rows.item(i).Marca +'</p>'
            +'<p style="color:#00AC23;" class="ui-li-desc"><strong>$'+ results.rows.item(i).Precio1 +' &nbsp &nbsp <span style="color:gray;">'+ results.rows.item(i).IVA +'%</span>&nbsp &nbsp &nbsp <span style="color:red;">'+ results.rows.item(i).DctoPromo+'%</span> &nbsp &nbsp <span style="color:red;">'+ results.rows.item(i).DctoVence+'</span></strong> </p> '
            +'</a> </div> </div></li>');
	}
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