var idDelCliente = 0;

function ObtenerDatosCliente(){
    idDelCliente = getVarUrl("idDelCliente");
    mostrarDatosCliente();
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