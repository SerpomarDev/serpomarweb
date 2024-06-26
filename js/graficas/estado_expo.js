const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['PENDENTE LIQUIDAR', 'PENDIENTE INGRESO A PUERTO', 'PENDIENTE RETIRO VACIO'],
        datasets: [{
            label: 'Valores',
            data: [], // Los datos se actualizarán dinámicamente
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--bs-primary'), // Ejemplo de uso de una variable CSS
            borderColor: getComputedStyle(document.documentElement).getPropertyValue('--bs-primary-dark'), // Ejemplo de uso de una variable CSS
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

fetch('https://esenttiapp-production.up.railway.app/api/estadoexpo')
    .then(response => response.json())
    .then(data => {
        const pendienteLiquidar = data.find(item => item.estado === 'PENDENTE LIQUIDAR').conteo;
        const pendienteIngreso = data.find(item => item.estado === 'PENDIENTE INGRESO A PUERTO').conteo;
        const pendienteRetiro = data.find(item => item.estado === 'PENDIENTE RETIRO VACIO').conteo;

        myChart2.data.datasets[0].data = [pendienteLiquidar, pendienteIngreso, pendienteRetiro];
        myChart2.update();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
