var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos
var ProductoCliente = null;

var idDelCliente = 0;
var idDelPedido = 0;
var idDelProducto = 0;
var SubTotalOrden = 0;
var ValorIVAOrden = 0;
var TotalOrden = 0;
var idPedido = 0;
var idPedidoDetalle = 0;
var UltimoProductoPedido = 0;

function cargarProducto()
{
	idDelCliente = getVarUrl("idDelCliente");
	idDelPedido = getVarUrl("idDelPedido");
	idDelProducto = getVarUrl("idDelProducto");

	db.transaction(queryDBProducto, errorOI);
}

function queryDBProducto(tx){
	tx.executeSql('SELECT * FROM Productos, Clientes WHERE Productos.id = ' + idDelProducto + ' AND Clientes.CCNit = ' + idDelCliente, [], VectorProducto, errorCB);
}

function VectorProducto(tx, results)
{
	for(var i=0; i < results.rows.length; i++) 
        {
            ProductoCliente = results.rows.item(i);
            /*$("#detalleProdDescripcion").empty();
            $("#DetallePedidoimagen").empty();
            $("#UnidadMedida1").empty();

            $("#UnidadMedida2").empty();
            $("#UnidadMedida3").empty();
            $("#UM1Pedido").empty();
            $("#UM2Pedido").empty();
            $("#UM3Pedido").empty();
            
            
            //$("#DetallePedidocantidad").empty();
            
            $("#DetallePedidoprecio").empty();
            $("#DetallePedidoBase").empty();
            $("#DetallePedidoDctoCliente").empty();
            $("#DetallePedidoDctoC").empty();
            $("#DetallePedidoDctoPromo").empty();
            $("#DetallePedidoDctoP").empty();
            $("#DetallePedidoSubIVA").empty();
            $("#DetallePedidoCuantoIVA").empty();
            $("#DetallePedidoIVA").empty();
            $("#DetallePedidoTotal").empty();
            $("#DetallePedidoprecioUnidad").empty();


            $("#Dirfact").empty();
            $("#clientefact").empty();
            $("#nitfact").empty();*/

            //$("#Dirfact").val(idPedido);
            //$("#clientefact").val(results.rows.item(i).NombreComercial);
            //$("#nitfact").val(results.rows.item(i).CCNit);


            $("#detalleProdDescripcion").val(results.rows.item(i).Descripcion);
            $("#DetallePedidoimagen").append('<p><img class="detallePro" src="'+ results.rows.item(i).Imagen1 + '" float="right"/></p>');

            /*$("#UM1Pedido").append(' '+ results.rows.item(i).UM1 + ' ');
            $("#UM2Pedido").append(results.rows.item(i).UM2);
            $("#UM3Pedido").append(results.rows.item(i).UM3);*/

                       

            $("#DetallePedidoprecioUnidad").append(results.rows.item(i).Precio1);
            SubCantidad = parseFloat($("#DetallePedidoprecioUnidad").text().trim() * $("#DetallePedidocantidad").val());
            $("#DetallePedidoprecio").append(SubCantidad);

            PedidoBase = parseFloat(SubCantidad - parseFloat(SubCantidad * results.rows.item(i).IVA)/100);
            $("#DetallePedidoBase").append(PedidoBase);

            $("#DetallePedidoDctoCliente").append(results.rows.item(i).Descuento + '%');
            PedidoDctoC =  parseFloat(PedidoBase * results.rows.item(i).Descuento)/100;
            $("#DetallePedidoDctoC").append(PedidoDctoC);

            $("#DetallePedidoDctoPromo").append(results.rows.item(i).DctoPromo + '%');
            PedidoDctoP = parseFloat((PedidoBase - PedidoDctoC)*results.rows.item(i).DctoPromo)/100;
            $("#DetallePedidoDctoP").append(PedidoDctoP);
            
            PedidoSubIva = parseFloat(PedidoBase - PedidoDctoC - PedidoDctoP) ;
            $("#DetallePedidoSubIVA").append(PedidoSubIva);
            
            $("#DetallePedidoCuantoIVA").append(results.rows.item(i).IVA + '%')
            PedidoIva = parseFloat(PedidoSubIva * results.rows.item(i).IVA)/100;         
            $("#DetallePedidoIVA").append(PedidoIva);
            PedidoTotal = PedidoSubIva + PedidoIva;
            $("#DetallePedidoTotal").append(PedidoTotal);   

            $("#UnidadesMedida").empty();

            if(results.rows.item(i).UM1 != "")
                $("#UnidadesMedida").append('<option value="' + results.rows.item(i).Precio1 + '">' + results.rows.item(i).UM1 + '</option>');

            if(results.rows.item(i).UM2 != "")
                $("#UnidadesMedida").append('<option value="' + results.rows.item(i).Precio2 + '">' + results.rows.item(i).UM2 + '</option>');

            if(results.rows.item(i).UM3 != "")
                $("#UnidadesMedida").append('<option value="' + results.rows.item(i).Precio3 + '">' + results.rows.item(i).UM3 + '</option>'); 
        }
}

function calcularCantidad()
{
    $("#DetallePedidoprecio").empty();
    $("#DetallePedidoBase").empty();
    
    $("#DetallePedidoDctoC").empty();
    
    $("#DetallePedidoDctoP").empty();
    $("#DetallePedidoSubIVA").empty();
    $("#DetallePedidoCuantoIVA").empty();
    $("#DetallePedidoIVA").empty();
    $("#DetallePedidoTotal").empty();
    

    SubCantidad = parseFloat($("#DetallePedidoprecioUnidad").text().trim() * $("#DetallePedidocantidad").val());
    $("#DetallePedidoprecio").append(SubCantidad)
	
    PedidoBase = parseFloat(SubCantidad - parseFloat(SubCantidad * ProductoCliente.IVA)/100);
    $("#DetallePedidoBase").append(PedidoBase);
    
    PedidoDctoC =  parseFloat(PedidoBase * ProductoCliente.Descuento)/100;
    $("#DetallePedidoDctoC").append(PedidoDctoC);

    PedidoDctoP = parseFloat((PedidoBase - PedidoDctoC)*ProductoCliente.DctoPromo)/100;
    $("#DetallePedidoDctoP").append(PedidoDctoP);
    
    PedidoSubIva = parseFloat(PedidoBase - PedidoDctoC - PedidoDctoP) ;
    $("#DetallePedidoSubIVA").append(PedidoSubIva);
    
    $("#DetallePedidoCuantoIVA").append(ProductoCliente.IVA + '%')
    PedidoIva = parseFloat(PedidoSubIva * ProductoCliente.IVA)/100;         
    $("#DetallePedidoIVA").append(PedidoIva);
    PedidoTotal = PedidoSubIva + PedidoIva;
    $("#DetallePedidoTotal").append(PedidoTotal); 
}

function calcularUnidadMedida(){
    $("#DetallePedidoprecioUnidad").empty();
    $("#DetallePedidoprecioUnidad").append($("#UnidadesMedida").val());
    calcularCantidad();
    
}

function AceptarProducto(){

    if(idDelPedido == 0)
    {
        db.transaction(queryDBProductosPedidosCliete, errorOI);
    }
    else
    {
        GuardarOrdenPedidoDet();
    }
}

function queryDBProductosPedidosCliete(tx){
    fecha = new Date();
    fechaString = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    tx.executeSql('INSERT INTO OrdenPedido (TipoDoc, Fecha, NitCC, SubTotal, PorDescuento, ValorIva, PorReteFuente, PorReteIva, PorReteIca, Total, FormaPago, Plazo, CCAsesor) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', ['CC', fechaString, ProductoCliente.CCNit, SubTotalOrden, ProductoCliente.Descuento, ValorIVAOrden, ProductoCliente.Retefuente, ProductoCliente.ReteIVA, ProductoCliente.ReteICA, TotalOrden, ProductoCliente.FormaPago, ProductoCliente.Plazo, 1], null, errorCB);
    tx.executeSql('SELECT MAX(id) as idPedido from OrdenPedido',[], restIdOrdenPedido, errorCB);
}

function restIdOrdenPedido(tx, results){
    for(var i=0; i < results.rows.length; i++) 
    {
        idDelPedido = results.rows.item(i).idPedido;
    }
    GuardarOrdenPedidoDet()
}

function GuardarOrdenPedidoDet(){
    db.transaction(queryDBDetallePedido, errorOI);
}

function queryDBDetallePedido(tx){
    tx.executeSql('INSERT INTO OrdenPedidoDet (TipoDoc , Consecutivo , NumItem , CodProducto, UnidEmpaque, CantUnidadEmpaque, CantUnidadBase, ValorUnidad, SubTotal , PorDescuento , ValorDescuento , PorIVA , ValorIVA , Total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', ['CC', idDelPedido, '\'\'', ProductoCliente.Codigo, $('#UnidadesMedida').find(":selected").text(), $('#DetallePedidocantidad').val(),  ProductoCliente.ExistenciaUMBase, $('#DetallePedidoprecioUnidad').text().trim(), $("#DetallePedidoprecio").text().trim(), ProductoCliente.DctoPromo, $("#DetallePedidoDctoP").text().trim(), ProductoCliente.IVA, $("#DetallePedidoIVA").text().trim(), $('#DetallePedidoTotal').text().trim()], null, errorCB);               
    alert("Se ha agregado el producto a su pedido");
    tx.executeSql('SELECT MAX(id) as idPedidoDetalle from OrdenPedidoDet',[], restIdOrdenPedidoDetalle, errorCB);
}

function restIdOrdenPedidoDetalle(tx, results){
    for(var i=0; i < results.rows.length; i++) 
    {
        UltimoProductoPedido = results.rows.item(i).idPedidoDetalle;
    }
    ObtenerUltimoProducto();
}

function ObtenerUltimoProducto(){
    db.transaction(queryDBObtenerUltimoProducto, errorOI);
}

function queryDBObtenerUltimoProducto(tx){
    tx.executeSql('SELECT * from OrdenPedidoDet WHERE id =' + UltimoProductoPedido,[], ActOrdenPedidoDetalle, errorCB);
}

function ActOrdenPedidoDetalle(tx, results){
    for(var i=0; i < results.rows.length; i++) 
    {
        SubTotalOrden = results.rows.item(i).SubTotal;
        ValorIVAOrden = results.rows.item(i).ValorIVA;
        TotalOrden = results.rows.item(i).Total;
    }
    ActualizarPedido();
}

function ActualizarPedido(){
    db.transaction(queryDBActualizarPedido, errorOI);
}

function queryDBActualizarPedido(tx){
    tx.executeSql('SELECT * from OrdenPedido WHERE id =' + idDelPedido,[], ActOrdenPedido, errorCB);
}

function ActOrdenPedido(tx, results){
    for(var i=0; i < results.rows.length; i++) 
    {
        SubTotalOrden = SubTotalOrden + results.rows.item(i).SubTotal;
        ValorIVAOrden = ValorIVAOrden + results.rows.item(i).ValorIva;
        TotalOrden = TotalOrden + results.rows.item(i).Total;
        tx.executeSql('UPDATE OrdenPedido SET SubTotal =' + SubTotalOrden+', ValorIva='+ ValorIVAOrden +', Total='+ TotalOrden +'  WHERE id='+ idDelPedido +';');
    }
    document.location = "Detalle_Pedido.html?idDelPedido=" + idDelPedido + "&idDelCliente=" + idDelCliente;
}

//tx.executeSql('INSERT INTO OrdenPedidoDet (TipoDoc , Consecutivo , NumItem , CodProducto, UnidEmpaque, CantUnidadEmpaque, CantUnidadBase, ValorUnidad, SubTotal , PorDescuento , ValorDescuento , PorIVA , ValorIVA , Total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', ['CC', idPedido, '\'\'', results.rows.item(i).Codigo, $('input:radio[name=radio-choice-h-2]:checked').val(), $('#DetallePedidocantidad').val(),  results.rows.item(i).ExistenciaUMBase, results.rows.item(i).Precio1, $("#DetallePedidoprecio").val(), results.rows.item(i).DctoPromo, $("#DetallePedidoDctoP").val(), results.rows.item(i).IVA, $("#DetallePedidoIVA").val() , parseFloat($('#DetallePedidocantidad').val() * $('#DetallePedidoTotal').val())], null, errorCB);            

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