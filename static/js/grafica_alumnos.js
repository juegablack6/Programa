document.addEventListener("DOMContentLoaded", () => {
    console.log("DATA_GRAFICA:", DATA_GRAFICA);

    const canvas = document.getElementById("graficaAlumno");
    if (!canvas) {
        console.error("❌ No se encontró el canvas");
        return;
    }

    new Chart(canvas, {
        type: 'doughnut', // ← PASTEL
        data: {
            labels: [
                'Entregadas',
                'Vencidas',
                'Por entregar'
            ],
            datasets: [{
                data: [
                    DATA_GRAFICA.entregadas,
                    DATA_GRAFICA.vencidas,
                    DATA_GRAFICA.proximas
                ],
                backgroundColor: [
                    '#4CAF50',
                    '#F44336',
                    '#FFC107'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
