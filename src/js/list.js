const vendedoresGuardados = JSON.parse(localStorage.getItem('vendedores')) || [];
// const filas = document.querySelectorAll('table tr');
const tbody = document.querySelector('tbody');
let contador = 1;
const MAX_COLUMNAS = 10;

vendedoresGuardados.forEach(vendedor => {
    const tr = document.createElement('tr');

    const nombreTd = document.createElement('td');
    nombreTd.textContent = vendedor.nombre;
    tr.appendChild(nombreTd);

    const rutTd = document.createElement('td');
    rutTd.textContent = vendedor.rut;
    tr.appendChild(rutTd);

    const patenteTd = document.createElement('td');
    patenteTd.textContent = vendedor.patente;
    tr.appendChild(patenteTd);

    const marcaTd = document.createElement('td');
    marcaTd.textContent = `Marca ${vendedor.marca}`;
    tr.appendChild(marcaTd);

    const modeloTd = document.createElement('td');
    modeloTd.textContent = vendedor.modelo;
    tr.appendChild(modeloTd);

    const colorTd = document.createElement('td');
    colorTd.textContent = vendedor.color;
    tr.appendChild(colorTd);

    tbody.appendChild(tr);
    // Incrementa el contador y oculta la fila si se alcanza el máximo de columnas
    contador++;
    if (contador > MAX_COLUMNAS) {
        fila.style.display = "none";
    }
});

