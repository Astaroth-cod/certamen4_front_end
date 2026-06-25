
function TarjetaCafe({ cantidad }) {
  
  const precio = 2500; 
  const cantidadNumerica = parseInt(cantidad) || 0; 
  const total = precio * cantidadNumerica;

  return (
    <div style={{
      border: '1px solid #cc6060',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      margin: '0 auto',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(128, 30, 30, 0.1)'
    }}>
      <h2>Capuchino  Bulbasour</h2>
      
   
      <img 
        src="https://www.serebii.net/cafemix/pokemon/001.png" 
        alt="Bulbasour coffe" 
        style={{ width: '100%', borderRadius: '4px', marginBottom: '15px' }}
      />
      
      <p><strong>Precio:</strong> ${precio.toLocaleString('es-CL')}</p>
      <p><strong>Cantidad solicitada:</strong> {cantidadNumerica}</p>
      <hr />
      <h3>Total a pagar: ${total.toLocaleString('es-CL')}</h3>
    </div>
  );
}

export default TarjetaCafe;
