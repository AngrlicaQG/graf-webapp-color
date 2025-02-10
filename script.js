// Obtener los elementos
const rInput = document.getElementById('r');
const gInput = document.getElementById('g');
const bInput = document.getElementById('b');
const colorBox = document.getElementById('colorBox');
const rgbValue = document.getElementById('rgbValue');
const colorPicker = document.getElementById('colorPicker');

// Función para actualizar el color y los valores RGB
function updateColor() {
    // Obtener los valores de RGB ingresados por el usuario
    const r = parseInt(rInput.value) || 0;
    const g = parseInt(gInput.value) || 0;
    const b = parseInt(bInput.value) || 0;

    // Asegurarse de que los valores estén dentro del rango válido (0-255)
    const validR = Math.max(0, Math.min(255, r));
    const validG = Math.max(0, Math.min(255, g));
    const validB = Math.max(0, Math.min(255, b));

    // Actualizar el color del cuadro
    colorBox.style.backgroundColor = `rgb(${validR}, ${validG}, ${validB})`;

    // Mostrar los valores RGB
    rgbValue.textContent = `RGB: (${validR}, ${validG}, ${validB})`;

    // Actualizar el color del color picker
    colorPicker.value = rgbToHex(validR, validG, validB);
}

// Función para convertir RGB a Hex
function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
}

// Escuchar eventos en los campos de entrada RGB
rInput.addEventListener('input', updateColor);
gInput.addEventListener('input', updateColor);
bInput.addEventListener('input', updateColor);

// Escuchar el cambio en el color picker
colorPicker.addEventListener('input', (e) => {
    // Obtener el valor hexadecimal del color picker
    const hexColor = e.target.value;

    // Convertir el valor hexadecimal a RGB
    const rgb = hexToRgb(hexColor);

    // Actualizar los valores en los campos RGB
    rInput.value = rgb.r;
    gInput.value = rgb.g;
    bInput.value = rgb.b;

    // Actualizar el cuadro de color y la visualización de RGB
    updateColor();
});

// Función para convertir Hex a RGB
function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

// Llamar a la función de actualización al cargar la página
updateColor();
