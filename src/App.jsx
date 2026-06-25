import { useState } from 'react';
import Encabezado from './encabezado';
import TarjetaCafe from './tarjetaCafe';

function App() {
 
  const [cantidad, setCantidad] = useState(1);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
     
      <Encabezado />

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <label htmlFor="cantidad-cafe" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Cantidad de cafés:
        </label>
        <input
          id="cantidad-cafe"
          type="number"
          min="0"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          style={{ padding: '5px', width: '60px', textAlign: 'center' }}
        />
      </div>

      
      <TarjetaCafe cantidad={cantidad} />
    </div>
  );
}

export default App;
