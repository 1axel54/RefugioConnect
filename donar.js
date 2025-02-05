document.addEventListener('DOMContentLoaded', () => {
    const montoOptions = document.querySelectorAll('.monto-option');
    const montoPersonalizado = document.getElementById('montoPersonalizado');
    const formDonacion = document.getElementById('formDonacion');
    const mensajeExito = document.getElementById('mensajeExito');

    // Selección de monto
    montoOptions.forEach(option => {
        option.addEventListener('click', () => {
            montoOptions.forEach(btn => btn.classList.remove('seleccionado'));
            option.classList.add('seleccionado');
            montoPersonalizado.value = '';
        });
    });

    // Validar monto personalizado
    montoPersonalizado.addEventListener('input', () => {
        montoOptions.forEach(btn => btn.classList.remove('seleccionado'));
    });

    // Envío del formulario
    formDonacion.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const montoSeleccionado = document.querySelector('.monto-option.seleccionado');
        const monto = montoSeleccionado ? 
                     montoSeleccionado.dataset.monto : 
                     montoPersonalizado.value;

        if (!monto || monto <= 0) {
            alert('Por favor selecciona o ingresa un monto válido');
            return;
        }

        // Mostrar carga
        formDonacion.classList.add('enviando');
        
        // Simular envío
        setTimeout(() => {
            formDonacion.reset();
            formDonacion.classList.remove('enviando');
            mensajeExito.style.display = 'block';
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            
            // Resetear después de 5 segundos
            setTimeout(() => {
                mensajeExito.style.display = 'none';
            }, 5000);
        }, 2000);
    });

    // Animación de la barra de progreso
    const progreso = document.querySelector('.barra-progreso');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progreso.style.width = '65%';
            }
        });
    });
    observer.observe(progreso);
});