const marcasModelos = {
    toyota: ["Camry", "Corolla"],
    chevrolet: ["Spark"],
    ford: ["Fiesta"],
    honda: ["Civic"],
    volkswagen: ["Jetta"]
};

// Obtener los elementos del formulario
const form = document.querySelector("form");
const modeloSelect = document.getElementById("modelo");

// Agregar event listeners para cuando cambie la marca
const marcaSelect = document.getElementById("marca");
marcaSelect.addEventListener("change", () => {
    const modelos = marcasModelos[marcaSelect.value];
    while (modeloSelect.options.length > 1) {
        modeloSelect.remove(1);
    }
    for (const modelo of modelos) {
        const option = document.createElement("option");
        option.value = modelo;
        option.text = modelo;
        modeloSelect.add(option);
    }
});
function cargarModelos() {
    const marcaSeleccionada = document.getElementById('marca').value;
    const modeloSelect = document.getElementById('modelo');
    modeloSelect.innerHTML = '<option value="">Selecciona un modelo</option>';
    
    if (marcaSeleccionada === '1') {
        const modelos = ['Modelo 1', 'Modelo 2'];
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.text = modelo;
            modeloSelect.add(option);
        });
    } else if (marcaSeleccionada === '2') {
        const modelos = ['Modelo 3', 'Modelo 4'];
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.text = modelo;
            modeloSelect.add(option);
        });
    } else if (marcaSeleccionada === '3') {
        const modelos = ['Modelo 5', 'Modelo 6'];
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.text = modelo;
            modeloSelect.add(option);
        });
    } else if (marcaSeleccionada === '4') {
        const modelos = ['Modelo 7', 'Modelo 8'];
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.text = modelo;
            modeloSelect.add(option);
        });
    } else if (marcaSeleccionada === '5') {
        const modelos = ['Modelo 9', 'Modelo 10'];
    modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo;
        option.text = modelo;
        modeloSelect.add(option);
    });
}
}

function guardarVendedor(event) {
event.preventDefault();
const rut = document.getElementById('rut').value;
const nombre = document.getElementById('nombre').value;
const patente = document.getElementById('patente').value;
const marca = document.getElementById('marca').value;
const modelo = document.getElementById('modelo').value;
const color = document.getElementById('color').value;

// Validación de información
if (!rut || !nombre || !patente || !marca || !modelo || !color) {
    alert('Por favor, completa todos los campos.');
    return;
}

// Guardar información en Local Storage
const vendedor = {
    rut,
    nombre,
    patente,
    marca,
    modelo,
    color
};

const vendedoresGuardados = JSON.parse(localStorage.getItem('vendedores')) || [];
vendedoresGuardados.push(vendedor);
localStorage.setItem('vendedores', JSON.stringify(vendedoresGuardados));

// Redirigir a la página de lista de vendedores
window.location.href = 'lista-vendedores.html';
}