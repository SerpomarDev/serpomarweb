
fetch(`https://esenttiapp-production.up.railway.app/api/totalbyContenedor/${id}`)
.then(response => {
  if (!response.ok) {
    throw new Error('Error al obtener los datos de la API');
  }
  return response.json();
})
.then(data => {
  const totalByConElement = document.getElementById('totalContenedor');

  const formattedAmount = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(data);

  totalByConElement.textContent = `${formattedAmount}`;
})
.catch(error => {
  console.error('Error:', error);
});
