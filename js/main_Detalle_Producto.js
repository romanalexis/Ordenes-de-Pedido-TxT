var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos
var idDelProducto = 0;

function ObtenerDatosProducto(){
    idDelProducto = getVarUrl("idDelProducto");
    mostrarDatosProducto();
}

function mostrarDatosProducto(){
    var id = idDelProducto;
    db.transaction(queryDBProducto, errorOI);
}

function queryDBProducto(tx){
    tx.executeSql('SELECT * FROM Productos WHERE id = ' + idDelProducto, [], VectorProducto, errorCB);
}

function VectorProducto(tx, results)
{
    for(var i=0; i < results.rows.length; i++) 
        {
            $("#DetalleProdcutoMarca").empty();
            $("#DetalleProdcutoCodigo").empty();
            $("#DetalleProdcutoCodBarras").empty();
            $("#DetalleProdcutoReferencia").empty();
            $("#DetalleProdcutoIVA").empty();
            $("#DetalleProdcutoDctoPromo").empty();
            $("#DetalleProdcutoDctoExp").empty();
            $("#DetalleProductoPVP").empty();
            $("#DetalleProductoTendero").empty();
            $("#DetalleProductoDistri").empty();
            $("#DetalleUM1").empty();
            $("#DetalleUM1Factor").empty();
            $("#DetalleExistencia1").empty();
            $("#DetallePrecio1").empty();
            $("#DetalleUM2").empty();
            $("#DetalleUM2Factor").empty();
            $("#DetalleExistencia2").empty();
            $("#DetallePrecio2").empty();
            $("#DetalleUM3").empty();
            $("#DetalleUM3Factor").empty();
            $("#DetalleExistencia3").empty();
            $("#DetallePrecio3").empty();
            $("#Producto_Name").empty();
            $("#imagen_Producto").empty();

            $("#Producto_Name").append(results.rows.item(i).Descripcion);
            
            $("#imagen_Producto").append('<img src="' + results.rows.item(i).Imagen1 + '" id="tendero"alt="Intelesys Logo">');
            

            $("#DetalleProdcutoMarca").append(results.rows.item(i).Marca);
            $("#DetalleProdcutoCodigo").append(results.rows.item(i).Codigo);
            $("#DetalleProdcutoCodBarras").append(results.rows.item(i).Codbarras);
            $("#DetalleProdcutoReferencia").append(results.rows.item(i).Referencia);
            $("#DetalleProdcutoIVA").append(results.rows.item(i).IVA + '%');
            $("#DetalleProdcutoDctoPromo").append((results.rows.item(i).DctoPromo == 0)? "" : results.rows.item(i).DctoPromo + '%');
            $("#DetalleProdcutoDctoExp").append(results.rows.item(i).DctoVence);
            $("#DetalleProductoPVP").append('$' + results.rows.item(i).Precio1);
            $("#DetalleProductoTendero").append('$' + results.rows.item(i).Precio2);
            $("#DetalleProductoDistri").append('$' + results.rows.item(i).Precio3);
            $("#DetalleUM1").append(results.rows.item(i).UM1);
            $("#DetalleUM1Factor").append(results.rows.item(i).UM1Factor);
            $("#DetalleExistencia1").append(results.rows.item(i).ExistenciaUMBase);
            $("#DetallePrecio1").append('$' + results.rows.item(i).Precio1);
            $("#DetalleUM2").append(results.rows.item(i).UM2);
            $("#DetalleUM2Factor").append(results.rows.item(i).UM2Factor);
            $("#DetalleExistencia2").append(Math.round(parseFloat(results.rows.item(i).ExistenciaUMBase) / parseFloat(results.rows.item(i).UM2Factor)));
            $("#DetallePrecio2").append('$' + results.rows.item(i).Precio2);
            $("#DetalleUM3").append(results.rows.item(i).UM3);
            $("#DetalleUM3Factor").append(results.rows.item(i).UM3Factor);
            $("#DetalleExistencia3").append(Math.round(parseFloat(results.rows.item(i).ExistenciaUMBase) / parseFloat(results.rows.item(i).UM3Factor)));  
            $("#DetallePrecio3").append('$' + results.rows.item(i).Precio3);
        }
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

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}