var db = window.openDatabase("DBPedidosTAT", "1.0", "Pedidos App", 5 * 1024); // Abre la base de datos

function main () {//Cuando carga el body carga esta función
	document.addEventListener("deviceready", aplicacionIniciada, false);	
}

function aplicacionIniciada()
{	
   db.transaction(CreaTablas, errorCB);
}

function CreaTablas(tx){
	tx.executeSql('DROP TABLE IF EXISTS Ruta');
	tx.executeSql('DROP TABLE IF EXISTS Clientes');
	tx.executeSql('DROP TABLE IF EXISTS Productos');

	/* Tabla Rutas */
	tx.executeSql('CREATE TABLE IF NOT EXISTS Ruta(id_ruta INTEGER PRIMARY KEY autoincrement, CCAsesor VARCHAR(10), diaRuta INTEGER, ordenRuta INTEGER, CCNit_Cliente INTEGER, Visitado INTEGER);');
	
	tx.executeSql('INSERT INTO Ruta (id_ruta, CCAsesor, diaRuta, ordenRuta, CCNit_Cliente, Visitado) values (1, 1, 6, 1, 604001209, 0)');
    tx.executeSql('INSERT INTO Ruta (id_ruta, CCAsesor, diaRuta, ordenRuta, CCNit_Cliente, Visitado) values (2, 1, 6, 2, 604001301, 0)');

	/* Tabla Clientes */
	tx.executeSql('CREATE TABLE IF NOT EXISTS Clientes(id_cliente INTEGER PRIMARY KEY, CCNit INTEGER, TipoJuridico VARCHAR(30), Regimen VARCHAR(20), RazonSocial VARCHAR(150), NombreComercial VARCHAR(150), Direccion VARCHAR(150), Ciudad VARCHAR(50), Zona VARCHAR(50), Barrio VARCHAR(50), Telefono1 VARCHAR(50), Telefono2 VARCHAR(50), Celular VARCHAR(50), Email VARCHAR(70), Latitud DOUBLE, Longitud DOUBLE, NombreListaP VARCHAR(30), Descuento DOUBLE, Retefuente DOUBLE, ReteIVA DOUBLE, ReteICA DOUBLE, ReteCREE DOUBLE, FormaPago VARCHAR(20), Cupo INTEGER, Plazo INTEGER, V1 bit, V2 bit, V3 bit, V4 bit, V5 bit, V6 bit, V7 bit, url VARCHAR(200));');

	tx.executeSql('INSERT INTO Clientes (id_cliente, CCNit, TipoJuridico, Regimen, RazonSocial, NombreComercial, Direccion, Ciudad, Zona, Barrio, Telefono1, Telefono2, Celular, Email, Latitud, Longitud, NombreListaP, Descuento, Retefuente, ReteIVA, ReteICA, ReteCREE, FormaPago, Cupo, Plazo, V1, V2, V3, V4, V5, V6, V7, url) values (1615, 604001209, \'Persona natural\', \'Común\', \'RESTAURANTE CHOU YANG\', \'RESTAURANTE CHOU YANG\', \'CRA. 26A # 30 - 36\', \'Bucaramanga\', \'Cañaveral\', \'Cañaveral\', \'6390666\', \'\', \'3142245667\', \'demo@mail.com\', 0, 0, \'Tendero\', 5, 3.5, 8.0, 1.50, 0.12, \'Credito\', 20000000, 30, 1, 1, 1, 1, 1, 1, 1, \'img/clientes/Giam_Chou-Zen.jpg\');');
    tx.executeSql('INSERT INTO Clientes (id_cliente, CCNit, TipoJuridico, Regimen, RazonSocial, NombreComercial, Direccion, Ciudad, Zona, Barrio, Telefono1, Telefono2, Celular, Email, Latitud, Longitud, NombreListaP, Descuento, Retefuente, ReteIVA, ReteICA, ReteCREE, FormaPago, Cupo, Plazo, V1, V2, V3, V4, V5, V6, V7, url) values (1614, 604001301, \'Persona juridica\', \'simplificado\', \'Mercatodo\', \'Mercatodo\', \'CRA. 3 A # 40 - 18\', \'Bucaramanga\', \'La Joya\', \'La Joya\', \'6704475\', \'\', \'3168930243\', \'demo@mail.com\', 0, 0, \'Tendero\', 2, 1.4, 3.6, 1.3, 0.13, \'\', 0, 0, 1, 1, 1, 1, 1, 1, 1, \'img/clientes/tendero2.JPG\');');
    tx.executeSql('INSERT INTO Clientes (id_cliente, CCNit, TipoJuridico, Regimen, RazonSocial, NombreComercial, Direccion, Ciudad, Zona, Barrio, Telefono1, Telefono2, Celular, Email, Latitud, Longitud, NombreListaP, Descuento, Retefuente, ReteIVA, ReteICA, ReteCREE, FormaPago, Cupo, Plazo, V1, V2, V3, V4, V5, V6, V7, url) values (1613, 604001302, \'Persona natural\', \'Común\', \'Don Luis\', \'Luis Serrano\', \'Cll. 25 # 18 - 18\', \'Bucaramanga\', \'San Francisco\', \'San Francisco\', \'6704475\', \'\', \'3056738291\', \'pimp@pimp.com\', 0, 0, \'Tendero\', 10, 2.3, 1.5, 0.13, 3.5, \'Credito\', 500000, 45, 1, 1, 1, 1, 1, 0, 0, \'img/clientes/tendero.jpg\');');
	
    /* Tabla Productos */
	tx.executeSql('CREATE TABLE IF NOT EXISTS Productos(id INTEGER PRIMARY KEY autoincrement, Codigo VARCHAR(20), Descripcion VARCHAR(100), Marca VARCHAR(50), Codbarras INTEGER, Referencia VARCHAR(20), IVA INTEGER, DctoPromo INTEGER, DctoVence VARCHAR(20), Precio1 INTEGER, Precio2 INTEGER, Precio3 INTEGER, Precio4 INTEGER, Precio5 INTEGER, Precio6 INTEGER(70), Precio7 INTEGER, Precio8 INTEGER, Precio9 INTEGER, Precio10 INTEGER, UM1 VARCHAR(45), UM1Factor VARCHAR(45), UM2 VARCHAR(45), UM2Factor VARCHAR(45), UM3 VARCHAR(45), UM3Factor VARCHAR(45), UM4 VARCHAR(45), UM4Factor VARCHAR(45), UM5 VARCHAR(45), UM5Factor VARCHAR(45), ExistenciaUMBase VARCHAR(45), PuntoMinimo VARCHAR(45), Imagen1 VARCHAR(45), Imagen2 VARCHAR(45), Imagen3 VARCHAR(45), Imagen4 VARCHAR(45), Imagen5 VARCHAR(45));');
	
	tx.executeSql('INSERT INTO Productos (Codigo, Descripcion, Marca, Codbarras, Referencia, IVA, DctoPromo, DctoVence, Precio1, Precio2, Precio3, Precio4, Precio5, Precio6, Precio7, Precio8, Precio9, Precio10, UM1, UM1Factor, UM2, UM2Factor, UM3, UM3Factor, UM4, UM4Factor, UM5, UM5Factor, ExistenciaUMBase, PuntoMinimo, Imagen1, Imagen2, Imagen3, Imagen4, Imagen5) values (\'0101\', \'Aceite Oleoflor X 20 LT\', \'Oliva\', 790019201, \'XXRT2342\',  16, 5, \'12/11/2013\', 1200, 1000, 900, 0, 0, 0, 0, 0, 0, 0, \'UNIDAD\', \'1\', \'Display\', \'12\', \'Caja\', \'120\', \'\', \'0\', \'\', \'0\',  \'10000\', \'0\', \'img/Productos/AceiteOleoflor.jpg\', \'\', \'\', \'\', \'\');');
    tx.executeSql('INSERT INTO Productos (Codigo, Descripcion, Marca, Codbarras, Referencia, IVA, DctoPromo, DctoVence, Precio1, Precio2, Precio3, Precio4, Precio5, Precio6, Precio7, Precio8, Precio9, Precio10, UM1, UM1Factor, UM2, UM2Factor, UM3, UM3Factor, UM4, UM4Factor, UM5, UM5Factor, ExistenciaUMBase, PuntoMinimo, Imagen1, Imagen2, Imagen3, Imagen4, Imagen5) values (\'0102\', \'Frijol Rojo X 2Lb\', \'Exito\', 781719212, \'XXACYU23\',  16, 0, \'\', 3600, 3300, 3000, 0, 0, 0, 0, 0, 0, 0, \'UNIDAD\', \'1\', \'Display\', \'15\', \'Caja\', \'150\', \'\', \'0\', \'\', \'0\',  \'5000\', \'0\', \'img/Productos/frijol-exito.jpg\', \'\', \'\', \'\', \'\');');
    tx.executeSql('INSERT INTO Productos (Codigo, Descripcion, Marca, Codbarras, Referencia, IVA, DctoPromo, DctoVence, Precio1, Precio2, Precio3, Precio4, Precio5, Precio6, Precio7, Precio8, Precio9, Precio10, UM1, UM1Factor, UM2, UM2Factor, UM3, UM3Factor, UM4, UM4Factor, UM5, UM5Factor, ExistenciaUMBase, PuntoMinimo, Imagen1, Imagen2, Imagen3, Imagen4, Imagen5) values (\'0103\', \'Desodorante Rexona X 50gr\', \'Rexona\', 871891912, \'ZZERHJ56\',  16, 0, \'\', 2000, 1900, 1800, 0, 0, 0, 0, 0, 0, 0, \'UNIDAD\', \'1\', \'Display\', \'15\', \'Caja\', \'150\', \'\', \'0\', \'\', \'0\',  \'0\', \'0\', \'img/Productos/desodorante.jpg\', \'\', \'\', \'\', \'\');');

	/* Tabla OrdenPedido */
	tx.executeSql('CREATE TABLE IF NOT EXISTS OrdenPedido(id INTEGER PRIMARY KEY autoincrement, TipoDoc VARCHAR(20), Fecha VARCHAR(15), NitCC VARCHAR(20), SubTotal DOUBLE, PorDescuento DOUBLE, ValorIva DOUBLE, PorReteFuente DOUBLE, PorReteIva DOUBLE, PorReteIca DOUBLE, Total DOUBLE, FormaPago VARCHAR(20), Plazo INTEGER, CCAsesor DOUBLE);');

	/* Tabla OrdenPedidosDet */
	tx.executeSql('CREATE TABLE IF NOT EXISTS OrdenPedidoDet (id INTEGER PRIMARY KEY autoincrement, TipoDoc VARCHAR(20), Consecutivo INTEGER, NumItem INTEGER, CodProducto VARCHAR(30), UnidEmpaque VARCHAR(20), CantUnidadEmpaque INTEGER, CantUnidadBase INTEGER, ValorUnidad DOUBLE, SubTotal DOUBLE, PorDescuento DOUBLE, ValorDescuento DOUBLE, PorIVA DOUBLE, ValorIVA DOUBLE, Total DOUBLE);'); 
}

var precioTotal = 0;
var precioTotalM = 0;

function ObtenerRuta (tx) {
	db.transaction(queryDBRuta, errorOI);
}

function queryDBRuta(tx) {
    tx.executeSql('SELECT * FROM Ruta', [], VectorRuta, errorCB);
}

function VectorRuta(tx, results){
    $('.clear').click(function()
    {
        $("#Lista_Clientes_Ruta").empty();
    });
    for(var i=0; i < results.rows.length; i++) 
    {
        $("#Lista_Clientes_Ruta").append('<a onClick="mostrarCliente(' + results.rows.item(i).CCNit_Cliente +')" >' + 
          	'<h4 class="list-group-item-heading">' + results.rows.item(i).CCAsesor + '</h4>' +
		   	'<p class="list-group-item-text">' + results.rows.item(i).CCNit_Cliente +'</p>' +
	    	'<span>' + results.rows.item(i).diaRuta + '</span>' +
           	'</a>'
        );
    }
}
/*------------------------------------------------------------------------- Listar los Clientes--------------------------------------------------------------------------*/
function ObtenerCliente (tx) {
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
    	$("#Lista_Clientes").append('<li data-theme="d">' + '<a href="#cliente" data-transition="slide" class="list-group-item clear" onClick="mostrarCliente(' + results.rows.item(i).CCNit +')" >' + 
    		'<img src="'+ results.rows.item(i).url + '" class="productlist" >' +
    		'<p><font size="2"><strong>' + results.rows.item(i).NombreComercial + '</strong></font></p>' + 
    		'<p style="color:#2489ce;">' + results.rows.item(i).RazonSocial + '&nbsp &nbsp <b style="color:#000000;">' + results.rows.item(i).CCNit + '</b></p>' + 
    		'<p style="color:#2489ce;">' + results.rows.item(i).Direccion + ' &nbsp ' + results.rows.item(i).Barrio + '</p>' +	    	
           	'</a> </li>'
        );
    }
}

var idDelCliente = 0;
function mostrarCliente(id){
    idDelCliente = id;
    db.transaction(function (tx){

        tx.executeSql('SELECT * FROM Clientes WHERE CCNit =' + id, [], function (tx, results){
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

function mostrarDatosCliente(){
    var id = idDelCliente;
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
                $("#ClienteDetalle_RSocial").append(results.rows.item(i).RazonSocial);
                $("#ClienteDetalle_Dir").append(results.rows.item(i).Direccion);
                $("#ClienteDetalle_Ciudad").append(results.rows.item(i).Ciudad);
                $("#ClienteDetalle_Zona").append(results.rows.item(i).Zona);
                $("#ClienteDetalle_Barrio").append(results.rows.item(i).Barrio);
                $("#ClienteDetalle_Tel1").append(results.rows.item(i).Telefono1);
                $("#ClienteDetalle_Cel").append(results.rows.item(i).Celular);
                $("#ClienteDetalle_Mail").append(results.rows.item(i).Email);
                $("#ClienteDetalle_Tabla").append('<tr><th>Días Visita</th><td>' + results.rows.item(i).V1 + '&nbsp' + results.rows.item(i).V2 + '&nbsp' + results.rows.item(i).V3
                    + '&nbsp' + results.rows.item(i).V4 + '&nbsp' + results.rows.item(i).V5 + '&nbsp' + results.rows.item(i).V6 + '&nbsp' + results.rows.item(i).V7 + 
                    '</td></tr><tr><th>Lista de Precios</th><td>' + results.rows.item(i).NombreListaP + '</td></tr><tr><th>Descuento</th><td>' + results.rows.item(i).Descuento + 
                    '%</td></tr><tr><th>Forma Pago</th><td>' + results.rows.item(i).FormaPago + '</td></tr><tr><th>Cupo</th><td>$' + results.rows.item(i).Cupo + 
                    '</td></tr><tr><th>Plazo Días</th><td>' + results.rows.item(i).Plazo + ' días</td></tr><tr><th>Nit</th><td>' + results.rows.item(i).CCNit + 
                    '</td></tr><tr><th>Tipo Juridico</th><td>' + results.rows.item(i).TipoJuridico + '</td></tr><tr><th>Regimen</th><td>' + results.rows.item(i).Regimen + 
                    '</td></tr><tr><th>Retefuente</th><td>' + results.rows.item(i).Retefuente + '%</td></tr><tr><th>ReteIVA</th><td>' + results.rows.item(i).ReteIVA +
                    '%</td></tr><tr><th>ReteICA</th><td>' + results.rows.item(i).ReteICA + '%</td></tr><tr><th>Retecre</th><td>' + results.rows.item(i).ReteCREE + 
                    '%</td></tr>'                   
                    );
            }
        }, errorCB);
        }
    );
}
/*------------------------------------------------------------------------- Fin Listar los Clientes------------------------------------------------------------------------*/

/*------------------------------------------------------------------------- Listar los Productos --------------------------------------------------------------------------*/

function ObtenerProductos (tx) {
	db.transaction(queryDBProductos, errorOI);
}

function queryDBProductos(tx) {
    tx.executeSql('SELECT * FROM Productos', [], VectorProductos, errorCB);
}

function VectorProductos(tx, results){
    $("#Lista_Productos").empty();
    /*$('.clear').click(function()
    {
        
        $("#Lista_Productos").load();
        return false;
    });*/
    for(var i=0; i < results.rows.length; i++) 
    {
        $("#Lista_Productos").append('<li data-theme="d">' + '<a href="#detalleproducto" data-transition="slide" class="list-group-item clear" onClick="mostrarProducto(\'' + results.rows.item(i).Codigo +'\')" >' + 
            '<img src="'+ results.rows.item(i).Imagen1 + '" class="productlist" >' +
            '<p><font size="2"><strong>' + results.rows.item(i).Descripcion + '</strong></font></p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).Marca  + '</p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).Precio1 + ' &nbsp ' + results.rows.item(i).IVA + '% &nbsp <span style="color:#FF0000;" >' + ((results.rows.item(i).DctoPromo == 0)? "" : results.rows.item(i).DctoPromo + '%') + results.rows.item(i).DctoVence + ' </i></p>' +           
            '</a> </li>'
        );
    }
}

var CodigoDeProducto = 0
function mostrarProducto(variable){
    CodigoDeProducto = variable;
    db.transaction(queryBDProductoUnico, errorOI);
}

function queryBDProductoUnico(tx){
    tx.executeSql('SELECT * FROM Productos WHERE Codigo = \'' + CodigoDeProducto + '\'', [], MostrarDetalleProducto, errorCB);
}


function MostrarDetalleProducto(tx, results){
    $('.clear').click(function()
        {
            //$("#Detalle_Producto").empty();
        });
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
            $("#Nombre_Producto").empty();
            $("#ProductImagen").empty();

            $("#Nombre_Producto").append(results.rows.item(i).Descripcion);
            
            $("#ProductImagen").append('<img src="' + results.rows.item(i).Imagen1 + '" id="tendero"alt="Intelesys Logo">');
            

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

/*------------------------------------------- Fin Productos ------------------------------------------------------------*/

function errorOI(err) {
    alert("Error: Código: " + err.message);
}

function errorCB(err) {
   alert("Error processing SQL: Código: " + err.message);
}
 /*-------------------------------------------------- Filtro Promo --------------------------------------------------------*/
function buscarPromo(){
    db.transaction(queryBDProductosDescuento, errorOI);    
}

function queryBDProductosDescuento(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE DctoPromo > 0 AND DctoVence > julianday(' + fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear() + ')', [], VectorProductos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------------------------- Filtro Existencias --------------------------------------------------------*/
function buscarExist(){
    db.transaction(queryBDProductosExistencia, errorOI);    
}

function queryBDProductosExistencia(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE ExistenciaUMBase > 0 ', [], VectorProductos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------------------------- Filtro Sin Existencias --------------------------------------------------------*/
function buscarSinExist(){
    db.transaction(queryBDProductosSinExistencia, errorOI);    
}

function queryBDProductosSinExistencia(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE ExistenciaUMBase = 0 ', [], VectorProductos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/

 /*-------------------------------------------------- Filtro Promo --------------------------------------------------------*/
function buscarPromoPedido(){
    db.transaction(queryBDProductosDescuentoPedido, errorOI);    
}

function queryBDProductosDescuentoPedido(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE DctoPromo > 0 AND DctoVence > julianday(' + fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear() + ')', [], VectorProductosPedidos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------------------------- Filtro Existencias --------------------------------------------------------*/
function buscarExistPedido(){
    db.transaction(queryBDProductosExistenciaPedido, errorOI);    
}

function queryBDProductosExistenciaPedido(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE ExistenciaUMBase > 0 ', [], VectorProductosPedidos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------------------------- Filtro Sin Existencias --------------------------------------------------------*/
function buscarSinExistPedido(){
    db.transaction(queryBDProductosSinExistenciaPedido, errorOI);    
}

function queryBDProductosSinExistenciaPedido(tx){
    fecha = new Date();
    tx.executeSql('SELECT * FROM Productos WHERE ExistenciaUMBase = 0 ', [], VectorProductosPedidos, errorCB);
}

/*------------------------------------------------------------------------------------------------------------------------*/

/* ----------------------------------------- Clientes para Pedidos ------------------------------------------------------*/
function ObtenerClientePedidos (tx) {
    db.transaction(queryDBClientePedidos, errorOI);
}

function queryDBClientePedidos(tx) {
    tx.executeSql('SELECT * FROM Clientes', [], VectorClientePedidos, errorCB);
}

function VectorClientePedidos(tx, results){
    $('.clear').click(function()
    {
        $("#Lista_ClientesPedidos").empty();
    });
    for(var i=0; i < results.rows.length; i++) 
    {
        $("#Lista_ClientesPedidos").append('<li data-theme="d">' + '<a href="#ListaProductosPedidos" data-transition="slide" class="list-group-item clear" onClick="ObtenerProductosPedidos(\'' + results.rows.item(i).id_cliente + '\')" >' + 
            '<img src="'+ results.rows.item(i).url + '" class="productlist" >' +
            '<p><font size="2"><strong>' + results.rows.item(i).NombreComercial + '</strong></font></p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).RazonSocial + '&nbsp &nbsp <b style="color:#000000;">' + results.rows.item(i).CCNit + '</b></p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).Direccion + ' &nbsp ' + results.rows.item(i).Barrio + '</p>' +          
            '</a> </li>'
        );
    }
}

/*------------------------------------------ -----------------------------------------------------------------------------*/

//onClick="(' + results.rows.item(i).CCNit +')"
var idDelClientePedido = 0;
function ObtenerProductosPedidos (idcli) {
    idDelClientePedido = idcli;
    db.transaction(queryDBProductosPedidosCliete, errorOI);
}

function queryDBProductosPedidosCliete(tx){
    tx.executeSql('SELECT * FROM Clientes WHERE id_cliente = ' + idDelClientePedido, [], queryDBProductosPedidos, errorCB);
}

function queryDBProductosPedidos(tx, results) {
    if(results.rows.length > 0)
    {
        fecha = new Date();
        fechaString = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
        tx.executeSql('INSERT INTO OrdenPedido (TipoDoc, Fecha, NitCC, SubTotal, PorDescuento, ValorIva, PorReteFuente, PorReteIva, PorReteIca, Total, FormaPago, Plazo, CCAsesor) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', ['CC', fechaString, results.rows.item(0).CCNit, 0, results.rows.item(0).Descuento, 0, results.rows.item(0).Retefuente, results.rows.item(0).ReteIVA, results.rows.item(0).ReteICA, 0, results.rows.item(0).FormaPago , results.rows.item(0).Plazo, 1], null, errorCB);
        tx.executeSql('SELECT * FROM Productos', [], VectorProductosPedidos, errorCB);
    }
        
}

function VectorProductosPedidos(tx, results){
    $("#Lista_ProductosPedidos").empty();
    
    for(var i=0; i < results.rows.length; i++) 
    {
        $("#Lista_ProductosPedidos").append('<li data-theme="d">' + '<a href="#DetalleProductoPedido" data-transition="slide" class="list-group-item clear" onClick="mostrarProductoPedido(\'' + results.rows.item(i).Codigo +'\')" >' + 
            '<img src="'+ results.rows.item(i).Imagen1 + '" class="productlist" >' +
            '<p><font size="2"><strong>' + results.rows.item(i).Descripcion + '</strong></font></p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).Marca  + '</p>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).Precio1 + ' &nbsp ' + results.rows.item(i).IVA + '% &nbsp <span style="color:#FF0000;" >' + ((results.rows.item(i).DctoPromo == 0)? "" : results.rows.item(i).DctoPromo + '%') + results.rows.item(i).DctoVence + ' </i></p>' +           
            '</a> </li>'
        );
    }
    tx.executeSql('SELECT MAX(id) as idPedido FROM OrdenPedido', [], guardarIdPedidos, errorCB);
}

idPedido = 0;
function guardarIdPedidos(tx, results){
    if(results.rows.length > 0)
        idPedido = results.rows.item(0).idPedido;
}


var CodigoDeProductoPedido = 0

function mostrarProductoPedido(variable){
    CodigoDeProductoPedido = variable;
    db.transaction(queryBDProductoUnicoPedido, errorOI);
}

function queryBDProductoUnicoPedido(tx){
    tx.executeSql('SELECT * FROM Productos, Clientes WHERE Productos.Codigo = \'' + CodigoDeProductoPedido + '\' AND Clientes.id_cliente = ' + idDelClientePedido, [], MostrarDetalleProductoPedido, errorCB);
}


function MostrarDetalleProductoPedido(tx, results){
    var descClient = 0;
    $('.clearPedido').click(function()
    {
        $("#DetallePedidocantidad").val(1);
    });
    for(var i=0; i < results.rows.length; i++) 
        {
            $("#detalleProdDescripcion").empty();
            $("#DetallePedidoimagen").empty();
            $("#UnidadMedida1").empty();
            $("#UnidadMedida2").empty();
            $("#UnidadMedida3").empty();
            $("#UM1Pedido").empty();
            $("#UM2Pedido").empty();
            $("#UM3Pedido").empty();
            
            
            $("#DetallePedidocantidad").empty();
            
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
            $("#nitfact").empty();

            $("#Dirfact").val(idPedido);
            $("#clientefact").val(results.rows.item(i).NombreComercial);
            $("#nitfact").val(results.rows.item(i).CCNit);


            $("#detalleProdDescripcion").append(results.rows.item(i).Descripcion);
            $("#DetallePedidoimagen").append('<p><img class="detallePro" src="'+ results.rows.item(i).Imagen1 + '" float="right"/></p>');

            $("#UM1Pedido").append(' '+ results.rows.item(i).UM1 + ' ');
            $("#UM2Pedido").append(results.rows.item(i).UM2);
            $("#UM3Pedido").append(results.rows.item(i).UM3);
            $("#UnidadMedida1").val(results.rows.item(i).UM1);
            $("#UnidadMedida2").val(results.rows.item(i).UM2);
            $("#UnidadMedida3").val(results.rows.item(i).UM3);

            $("#DetallePedidoprecioUnidad").val(results.rows.item(i).Precio1);
            SubCantidad = parseFloat(results.rows.item(i).Precio1 * $("#DetallePedidocantidad").val());
            $("#DetallePedidoprecio").val(results.rows.item(i).Precio1 * $("#DetallePedidocantidad").val());

            PedidoBase = parseFloat(SubCantidad - parseFloat(SubCantidad * results.rows.item(i).IVA)/100);
            $("#DetallePedidoBase").val($("#DetallePedidoprecio").val() - ($("#DetallePedidoprecio").val() * results.rows.item(i).IVA)/100 );

            $("#DetallePedidoDctoCliente").append(results.rows.item(i).Descuento + '%');
            PedidoDctoC =  parseFloat(PedidoBase * results.rows.item(i).Descuento)/100;
            $("#DetallePedidoDctoC").val(($("#DetallePedidoBase").val()*results.rows.item(i).Descuento)/100);

            $("#DetallePedidoDctoPromo").append(results.rows.item(i).DctoPromo + '%');
            PedidoDctoP = parseFloat((PedidoBase - PedidoDctoC)*results.rows.item(i).DctoPromo)/100;
            $("#DetallePedidoDctoP").val((($("#DetallePedidoBase").val()-$("#DetallePedidoDctoC").val())* results.rows.item(i).DctoPromo)/100);
            
            PedidoSubIva = parseFloat(PedidoBase - PedidoDctoC - PedidoDctoP) ;
            $("#DetallePedidoSubIVA").val(($("#DetallePedidoBase").val()-$("#DetallePedidoDctoC").val())-$("#DetallePedidoDctoP").val());
            
            $("#DetallePedidoCuantoIVA").append(results.rows.item(i).IVA + '%')
            PedidoIva = parseFloat(PedidoSubIva * results.rows.item(i).IVA)/100;         
            $("#DetallePedidoIVA").val($("#DetallePedidoSubIVA").val() * results.rows.item(i).IVA/100);
            PedidoTotal = PedidoSubIva + PedidoIva;
            $("#DetallePedidoTotal").val(parseFloat($("#DetallePedidoSubIVA").val()) + parseFloat($("#DetallePedidoIVA").val()));    


            tx.executeSql('INSERT INTO OrdenPedidoDet (TipoDoc , Consecutivo , NumItem , CodProducto, UnidEmpaque, CantUnidadEmpaque, CantUnidadBase, ValorUnidad, SubTotal , PorDescuento , ValorDescuento , PorIVA , ValorIVA , Total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', ['CC', idPedido, '\'\'', results.rows.item(i).Codigo, $('input:radio[name=radio-choice-h-2]:checked').val(), $('#DetallePedidocantidad').val(),  results.rows.item(i).ExistenciaUMBase, results.rows.item(i).Precio1, $("#DetallePedidoprecio").val(), results.rows.item(i).DctoPromo, $("#DetallePedidoDctoP").val(), results.rows.item(i).IVA, $("#DetallePedidoIVA").val() , parseFloat($('#DetallePedidocantidad').val() * $('#DetallePedidoTotal').val())], null, errorCB);            
        }
}
 
precioTotalSafe = 0;
function crearlistaFactura () {
    $('.clearPedido').click(function()
    {
        $("#listaProductosFactura").empty();
        precioTotal = 0;
    });
    precioTotal = precioTotal + parseFloat($('#DetallePedidocantidad').val() * $('#DetallePedidoTotal').val());
    $("#PrecioTotal").empty();
    $("#PrecioTotal").append(precioTotal);
    $("#listaProductosFactura").append('<tr> <th>' + $('#detalleProdDescripcion')[0].textContent + '</th> <td>' + $('#DetallePedidocantidad').val() + ' x ' + $('input:radio[name=radio-choice-h-2]:checked').val() + '</th> <td>' + parseFloat($('#DetallePedidocantidad').val() * $('#DetallePedidoTotal').val()) + '<td> </tr>');
    db.transaction(function (tx){

        tx.executeSql('UPDATE OrdenPedido SET Total =\''+ precioTotal +'\' WHERE id = ' + idPedido);
        }
    );
}



function ObtenerListaPedidos(){
    db.transaction(queryDBPedidos, errorOI);
}

function queryDBPedidos(tx) {
    tx.executeSql('SELECT * FROM OrdenPedido, Clientes WHERE OrdenPedido.NitCC == Clientes.CCNit', [], VectorPedidos, errorCB);
}

function VectorPedidos(tx, results){
    $("#Lista_Pedidos").empty();

    for(var i=0; i < results.rows.length; i++) 
    {
        $("#Lista_Pedidos").append('<li data-theme ="d"><a href="#DetallePedido" data-transition="slide" class="list-group-item" onClick="ObtenerPedido(\''+ results.rows.item(i).CCNit +'\',\''+ results.rows.item(i).id + '\',\'' +  results.rows.item(i).NombreComercial +'\')">' + 
            '<h6>N°' + results.rows.item(i).id + '</h6>' + 
            '<p style="color:#2489ce;">' + results.rows.item(i).NombreComercial + '&nbsp &nbsp <span style="color:#000000;" > ' + results.rows.item(i).Total + '</span></p>' + 
            '</a>' + '</li>'
        );
    }
}
//OrdenPedido(id , TipoDoc, Consecutivo, Fecha, NitCC, SubTotal , PorDescuento , ValorIva , PorReteFuente , PorReteIva , PorReteIca , Total , FormaPago , Plazo , CCAsesor 

//OrdenPedidoDet (id , TipoDoc , Consecutivo , NumItem , CodProducto, UnidEmpaque, CantUnidadEmpaque, CantUnidadBase, ValorUnidad, SubTotal , PorDescuento , ValorDescuento , PorIVA , ValorIVA , Total  
var ClienteParaRecuperarPedido = 0;
var ConsecutivoParaPedidoRecupera = 0;
var NombreParaPedidoRecuperado = 0;
function ObtenerPedido (ClientNit, ConseOrd, NomPedido) {
    ClienteParaRecuperarPedido = ClientNit;
    ConsecutivoParaPedidoRecupera = ConseOrd;
    NombreParaPedidoRecuperado = NomPedido;
    db.transaction(queryDBPedidoRecuperado, errorOI);
}

function queryDBPedidoRecuperado (tx) {
    tx.executeSql('SELECT * FROM OrdenPedidoDet, Productos WHERE OrdenPedidoDet.CodProducto = Productos.Codigo AND OrdenPedidoDet.Consecutivo = \'' + ConsecutivoParaPedidoRecupera + '\'', [], MostrarDetallePedidoRecuperado, errorCB ); 
}


function MostrarDetallePedidoRecuperado (tx, results) {
    precioTotalRecuperado = 0;
    $("#listaProductosFacturaMPedido").empty();

    for(var i=0; i < results.rows.length; i++) 
        {
            precioTotalRecuperado = precioTotalRecuperado + Math.round(parseFloat(results.rows.item(i).Total));
            $("#DirfactPedido").empty();
            $("#clientefactPedido").empty();
            $("#nitfactPedido").empty();
            $("#PrecioTotalMPedidos").empty();
            
            $("#PrecioTotalMPedidos").append(precioTotalRecuperado);
            $("#DirfactPedido").val(ConsecutivoParaPedidoRecupera);
            $("#clientefactPedido").val(NombreParaPedidoRecuperado);
            $("#nitfactPedido").val(ClienteParaRecuperarPedido);

            $("#listaProductosFacturaMPedido").append('<tr> <th>' + results.rows.item(i).Descripcion + '</th> <td>' + results.rows.item(i).CantUnidadEmpaque + ' x ' + results.rows.item(i).UnidEmpaque + '</th> <td> $' + Math.round(results.rows.item(i).Total) + '<td> </tr>');     
        }
}