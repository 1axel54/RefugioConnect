document.addEventListener('DOMContentLoaded', async () => {
    try {
        const refugios = await firebaseApp.getData('refugios');
        const container = document.getElementById('refugios-container');
        
        refugios.forEach(refugio => {
            container.innerHTML += `
                <div class="refugio-card">
                    <img src="${refugio.imagen}" alt="${refugio.nombre}">
                    <div class="p-4">
                        <h3 class="text-xl font-bold">${refugio.nombre}</h3>
                        <p class="text-gray-600 mt-2">📍 ${refugio.ubicacion}</p>
                        <div class="mt-4">
                            <p class="font-semibold text-blue-600">Necesitan:</p>
                            <ul class="list-disc list-inside">
                                ${refugio.necesidades.map(n => `<li>${n}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error cargando refugios:', error);
    }
});