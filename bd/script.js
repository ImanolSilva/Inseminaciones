// Código JavaScript que realiza la solicitud AJAX
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        // Maneja la respuesta JSON aquí
        var jsonData = JSON.parse(this.responseText);
        console.log(jsonData); // Muestra los datos en la consola para verificar
    }
};
    xhttp.open("GET", "../bd/get_data.php", true);
    xhttp.send();

    // Función para mostrar los datos en la tabla HTML
    function mostrarDatos(data) {
        var table = document.getElementById("datos");
        var headerRow = table.insertRow(0);

        // Crea encabezados de columna
        for (var key in data[0]) {
            if (data[0].hasOwnProperty(key)) {
                var th = document.createElement("th");
                th.innerHTML = key;
                headerRow.appendChild(th);
            }
        }

        // Llena la tabla con los datos
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(i + 1);
            for (var key in data[i]) {
                if (data[i].hasOwnProperty(key)) {
                    var cell = row.insertCell();
                    cell.innerHTML = data[i][key];
                }
            }
        }
    }

