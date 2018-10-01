    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
                /* sacar datos en xml
                dataType:"xml"
                */
            });
            jqxhr.done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios = data["results"];
                    for (usuario of listaUsuarios) {
                        var nombre = usuario["name"]["first"];
                        var apellido = usuario["name"]["last"];
                        var email = usuario["email"];
                        var localidad = usuario["location"]["city"];
                        var estado = usuario["location"]["state"];
                        var cp = usuario["location"]["postcode"];
                        var calle = usuario["location"]["street"];
                        var imagen = usuario["picture"]["large"];

                        /* variables para XML
                        var listaPersonas=$(datos).find("results");
                        for(var personas of listaPersonas){
                        var nombre=$(persona).find("first").text();
                        var apellido=$(persona).find("last").text();
                        var
                        ...
                        ...
                        */
                        texto="<div class='fila'>";
                            texto+="<figure>";
                                texto += "<img src='" + imagen + "'>";
                            texto+="</figure>";
                            texto+="<div class='texto'>";
                                texto += "<p>"+nombre + " " + apellido + "</p>";
                                texto += "<p>"+email + "</p>";
                                texto += "<p>"+calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                            texto += "</div>";
                        texto+="</div>";
                        $("#contenido").append(texto);
                    }
                })

        });
       $("#contenido").on("click",function () {
           $(".fila").on("click", function (e) {
               $(this).css({
                   "display": "none"
               });/* haciendo click borro*/
               $("#contenido").add(texto2);/* el mismo click crea una celda nueva*/
           });
            var  jqxhr2 = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results:1}
            });
            jqxhr2.done(function (data2) {
                var usuariosNuevo = data2["results"];
                for (usuario2 of usuariosNuevo) {
                    var nombre = usuario2["name"]["first"];
                    var apellido = usuario2["name"]["last"];
                    var email = usuario2["email"];
                    var localidad = usuario2["location"]["city"];
                    var estado = usuario2["location"]["state"];
                    var cp = usuario2["location"]["postcode"];
                    var calle = usuario2["location"]["street"];
                    var imagen = usuario2["picture"]["large"];
                    texto2="<div class='fila'>";
                    texto2+="<figure>";
                    texto2+= "<img src='" + imagen + "'>";
                    texto2+="</figure>";
                    texto2+="<div class='texto'>";
                    texto2+= "<p>"+nombre + " " + apellido + "</p>";
                    texto2+= "<p>"+email + "</p>";
                    texto2+= "<p>"+calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                    texto2+= "</div>";
                    texto+="</div>";
                    $("#contenido").append(texto2);
                }
            })
                .fail(function (jxhr, textStatus) {
                    console.log(textStatus);
                })
            });
    });