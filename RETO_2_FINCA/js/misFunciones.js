function traerInformacion(){
    $.ajax({
        url:'https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm',
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items){

    let myTable = "<table>";
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].address+"</td>";
        myTable += "<td>"+items[i].exension+"</td>";
        myTable += "<td>"+items[i].category_id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

// ----------------------------------Funcion Clientes ----------------------------------------------//


function traerInformacionCliente(){
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items)
        }
    });
}

function pintarRespuestaCliente(items){

    let myTable = "<table>";
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].email+"</td>";
        myTable += "<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoclientes").append(myTable);
}

function guardarInformacionCliente(){
    let myData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclientes").empty();
            $("#idcliente").val("");
            $("#namecliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacionCliente(){
    let myData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclientes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha Actualizado")
        }
    });
}

function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclientes").empty();
            traerInformacionCliente();
            alert("Se ha Eliminado.")
        }
    });
}

// ----------------------------------Funcion Mensajes ----------------------------------------------//

function traerInformacionMensaje(){
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items)
        }
    });
}

function pintarRespuestaMensaje(items){

    let myTable = "<table>";
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadomensaje").append(myTable);
}

function guardarInformacionMensaje(){
    let myData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomensaje").empty();
            $("#idmensaje").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacionMensaje(){
    let myData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomensaje").empty();
            $("#idmensaje").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha Actualizado")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge71d9d144c08fc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomensaje").empty();
            traerInformacionMensaje();
            alert("Se ha Eliminado.")
        }
    });
}