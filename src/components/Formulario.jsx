import { useEffect, useState } from "react";
import useClima from "../hooks/useClima";

function Formulario() {
  const [alerta, setAlerta] = useState("");
  const [paises, setPaises] = useState([]);
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`).then((data) => data.json()).then((val)=> setPaises(val));
  }, []);  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta('')
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value="" style={{max-width: 300px;}}>-- Seleccione un país --</option>
            {
              paises.map((item)=>
              (
                <option key={item.cca2} value={item.cca2}>{item.translations.spa.common}</option>
              )
              )
            }

          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
}

export default Formulario;
