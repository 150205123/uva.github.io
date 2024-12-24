        const guardarBtn = document.getElementById("guardar-btn");
        const calcularBtn = document.getElementById("calcular-btn");
        const terminadoBtn = document.getElementById("terminado-btn");
        const imprimirBtn = document.getElementById("imprimir-btn");
        const ingresoTable = document.getElementById("ingreso-table").getElementsByTagName("tbody")[0];
        const metaTitulo = document.getElementById("meta-titulo");
        const fechaTitulo = document.getElementById("fecha-titulo");
        const searchInput = document.getElementById("search-input");

        guardarBtn.addEventListener("click", () => {
            const mes = document.getElementById("mes").value;
            const meta = document.getElementById("meta").value;
            const fechaInicio = document.getElementById("fecha-inicio").value;
            const fechaFin = document.getElementById("fecha-fin").value;
            const fechaUva = document.getElementById("fecha-uva").value;
            const variedad = document.getElementById("variedad").value;
            const lote = document.getElementById("lote").value;
            const ticket = document.getElementById("ticket").value;
            const condicion = document.getElementById("condicion").value;
            const pesoEntrada = document.getElementById("peso-entrada").value;
            const proveedor = document.getElementById("proveedor").value;
            const placa = document.getElementById("placa").value;
            const pesoBruto = document.getElementById("peso-bruto").value;
            const pesoTara = document.getElementById("peso-tara").value;
            const campo = document.getElementById("campo").value;
            const observacion = document.getElementById("observacion").value;
            const estado = document.getElementById("estado").value;
            const empresa = document.getElementById("empresa").value;
            const grado = document.getElementById("grado").value;
            const alcohol = document.getElementById("alcohol").value;
            const stockTanque = document.getElementById("stock-tanque").value;
            const condicionFinal = document.getElementById("condicion-final").value;
            const tipoUva = document.getElementById("tipo-uva").value;

            if (meta === "" || mes === "" || fechaInicio === "" || fechaFin === "" || fechaUva === "") {
                alert("Por favor, complete todos los datos requeridos.");
                return;
            }

            metaTitulo.textContent = `Meta de ${mes}: ${meta} kg`;
            fechaTitulo.textContent = `Del ${fechaInicio} al ${fechaFin}`;
            const newRow = ingresoTable .insertRow();
            newRow.innerHTML = ` 
                <td>${fechaUva}</td>
                <td>${variedad}</td>
                <td>${lote}</td>
                <td>${ticket}</td>
                <td>${pesoEntrada}</td>
                <td>${condicion}</td>
                <td>${proveedor}</td>
                <td>${placa}</td>
                <td>${pesoBruto}</td>
                <td>${pesoTara}</td>
                <td>${campo}</td>
                <td>${observacion}</td>
                <td>${estado}</td>
                <td>${empresa}</td>
                <td>${grado}</td>
                <td>${alcohol}</td>
                <td>${stockTanque}</td>
                <td>${condicionFinal}</td>
                <td>${tipoUva}</td>
                <td>
                    <button class="edit-btn" onclick="editarFila(this)">Editar</button>
                    <button class="delete-btn" onclick="eliminarFila(this)">Eliminar</button>
                </td>
            `;
            // Limpiar solo los campos que no son "Mes", "Meta", "Desde", "Hasta"
            document.getElementById("fecha-uva").value = '';
            document.getElementById("variedad").value = '';
            document.getElementById("lote").value = '';
            document.getElementById("ticket").value = '';
            document.getElementById("peso-entrada").value = '';
            document.getElementById("proveedor").value = '';
            document.getElementById("placa").value = '';
            document.getElementById("peso-bruto").value = '';
            document.getElementById("peso-tara").value = '';
            document.getElementById("campo").value = '';
            document.getElementById("observacion").value = '';
            document.getElementById("estado").value = '';
            document.getElementById("grado").value = '';
            document.getElementById("alcohol").value = '';
            document.getElementById("stock-tanque").value = '';
            document.getElementById("condicion-final").value = '';
            document.getElementById("empresa").value = 'VIÑA VIEJA';
        });

        function eliminarFila(button) {
            const row = button.parentNode.parentNode; // Obtiene la fila del botón
            ingresoTable.deleteRow(row.rowIndex - 1); // Elimina la fila del tbody
        }

        function editarFila(button) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName("td");

            // Llenar los campos de entrada con los valores de la fila seleccionada
            document.getElementById("fecha-uva").value = cells[0].textContent;
            document.getElementById("variedad").value = cells[1].textContent;
            document.getElementById("lote").value = cells[2].textContent;
            document.getElementById("ticket").value = cells[3].textContent;
            document.getElementById("peso-entrada").value = cells[4].textContent;
            document.getElementById("condicion").value = cells[5].textContent;
            document.getElementById("proveedor").value = cells[6].textContent;
            document.getElementById("placa").value = cells[7].textContent;
            document.getElementById("peso-bruto").value = cells[8].textContent;
            document.getElementById("peso-tara").value = cells[9].textContent;
            document.getElementById("campo").value = cells[10].textContent;
            document.getElementById("observacion").value = cells[11].textContent;
            document.getElementById("estado").value = cells[12].textContent;
            document.getElementById("empresa").value = cells[13].textContent;
            document.getElementById("grado").value = cells[14].textContent;
            document.getElementById("alcohol").value = cells[15].textContent;
            document.getElementById("stock-tanque").value = cells[16].textContent;
            document.getElementById("condicion-final").value = cells[17].textContent;
            document.getElementById("tipo-uva").value = cells[18].textContent;
            // Eliminar la fila después de la edición
            row.remove();
        }

        imprimirBtn.addEventListener("click", () => {
            const printWindow = window.open('', '_blank');
            let tableContent = '<table border="1"><thead><tr><th>Fecha</th><th>Variedad</th><th>Lote</th><th>Ticket</th><th>Peso Entrada</th><th>Condición</th><th>Proveedor</th><th>Placa</th><th>Peso Bruto</th><th>Peso Tara</th><th>Campo</th><th>Observación</th><th>Estado</th><th>Empresa</th><th>Grado Alcoholico</th><th>AV</th><th>Stock del Tanque</th><th>Condición Final</th><th>Tipo de Uva</th></tr></thead><tbody>';
            for (let i = 0; i < ingresoTable.rows.length; i++) {
                let row = ingresoTable.rows[i];
                tableContent += '<tr>';
                for (let j = 0; j < row.cells.length - 1; j++) {
                    tableContent += `<td>${row.cells[j].textContent}</td>`;
                }
                tableContent += '</tr>';
            }
            tableContent += '</tbody></table>';
            printWindow.document.write(tableContent);
            printWindow.document.close();
            printWindow.print();
        });

        terminadoBtn.addEventListener("click", () => {
            const datos = [];
            for (let i = 0; i < ingresoTable.rows.length; i++) {
                const row = ingresoTable.rows[i];
                const rowData = [];
                for (let j = 0; j < row.cells.length - 1; j++) {
                    rowData.push(row.cells[j].textContent);
                }
                datos.push(rowData);
            }
            localStorage.setItem('datosUva', JSON.stringify(datos));
            alert('Datos guardados exitosamente');
        });

        window.addEventListener("load", () => {
            const datosGuardados = localStorage.getItem('datosUva');   
            if (datosGuardados) {
                const datos = JSON.parse(datosGuardados);
                for (let i = 0; i < datos.length; i++) {
                    const newRow = ingresoTable.insertRow();
                    const rowData = datos[i];
                    newRow.innerHTML = ` 
                        <td>${rowData[0]}</td>
                        <td>${rowData[1]}</td>
                        <td>${rowData[2]}</td>
                        <td>${rowData[3]}</td>
                        <td>${rowData[4]}</td>
                        <td>${rowData[5]}</td>
                        <td>${rowData[6]}</td>
                        <td>${rowData[7]}</td>
                        <td>${rowData[8]}</td>
                        <td>${rowData[9]}</td>
                        <td>${rowData[10]}</td>
                        <td>${rowData[11]}</td>
                        <td>${rowData[12]}</td>
                        <td>${rowData[13]}</td>
                        <td>${rowData[14]}</td>
                        <td>${rowData[15]}</td>
                        <td>${rowData[16]}</td>
                        <td>${rowData[17]}</td>
                        <td>${rowData[18]}</td>
                        <td>
                            <button class="edit-btn" onclick="editarFila(this)">Editar</button>
                            <button class="delete-btn" onclick="eliminarFila(this)">Eliminar</button>
                        </td>
                    `;
                }
            }
        });

        // Función para calcular la diferencia y verificar la meta
        calcularBtn.addEventListener("click", () => {
            const meta = parseFloat(document.getElementById("meta").value);
            let totalPesoTara = 0;

            // Sumar todos los pesos tara de la tabla
            const rows = ingresoTable.getElementsByTagName("tr");
            for (let row of rows) {
                const pesoTara = parseFloat(row.cells[9].textContent);
                if (!isNaN(pesoTara)) {
                    totalPesoTara += pesoTara;
                }
            }

            // Comparar el total de peso tara con la meta
            const diferencia = meta - totalPesoTara;

            if (diferencia > 0) {
                alert(`La meta no se ha cumplido, falta ${diferencia.toFixed(2)} kg.`);
            } else if (diferencia === 0) {
                alert("¡La meta se ha cumplido perfectamente!");
            } else {
                alert(`¡La meta se ha cumplido! Se excedió en ${Math.abs(diferencia).toFixed(2)} kg.`);
            }
        });

        // Función para filtrar la tabla según el tipo de uva
        searchInput.addEventListener("input", () => {
            const filter = searchInput.value .toLowerCase();
            const rows = ingresoTable.getElementsByTagName("tr");

            for (let row of rows) {
                const tipoUva = row.cells[18].textContent.toLowerCase();
                if (tipoUva.includes(filter)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        });
        const excelBtn = document.getElementById("pdf-btn");
        excelBtn.textContent = "Generar Excel";
        excelBtn.addEventListener("click", () => {
            const wb = XLSX.utils.book_new();
            const wsData = [];
            wsData.push(["Fecha", "Variedad", "Lote", "Ticket", "Peso Entrada", "Condición", "Proveedor", "Placa", "Peso Bruto", "Peso Tara", "Campo", "Observación", "Estado", "Empresa", "Grado Alcoholico", "AV", "Stock del Tanque", "Condición Final","Tipo de Uva"]);
            
            // Recopilar datos de la tabla
            for (let i = 0; i < ingresoTable.rows.length; i++) {
                const row = ingresoTable.rows[i];
                const rowData = [];
                for (let j = 0; j < row.cells.length - 1; j++) {
                    rowData.push(row.cells[j].textContent);
                }
                wsData.push(rowData);
            }

            const ws = XLSX.utils.aoa_to_sheet(wsData);
            XLSX.utils.book_append_sheet(wb, ws, "Ingreso de Uva");
            XLSX.writeFile(wb, "Ingreso_Uva.xlsx");
        });

        // Función para cuando el usuario abandona la pestaña
    window.addEventListener('blur', function() {
        // Cambiar el título de la pestaña
        document.title = '¡No te vayas por favor! 🥺😢';

        // Cambiar el favicon (puedes cambiar a una imagen que diga algo como "No te vayas")
        var favicon = document.getElementById('favicon');
        favicon.href = 'favicon-sad.ico';  // Reemplaza con el favicon que quieras mostrar

        // Si no tienes un favicon especial, puedes usar una pequeña imagen que transmita el mensaje.
    });

    // Función para cuando el usuario regresa a la pestaña
    window.addEventListener('focus', function() {
        // Cambiar el título de la pestaña
        document.title = '¡Ohhh, qué bueno que volviste! 😍';

        // Restaurar el favicon original
        var favicon = document.getElementById('favicon');
        favicon.href = 'favicon.ico';  // Reemplaza con el favicon original
    });
