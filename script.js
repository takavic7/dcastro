document.addEventListener('DOMContentLoaded', () => {
    const fechaSpan = document.getElementById('fecha');
    if (fechaSpan) {
        const hoy = new Date();
        // Formato clásico: DD/MM/AAAA
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        fechaSpan.textContent = hoy.toLocaleDateString('es-ES', opciones);
    }
});