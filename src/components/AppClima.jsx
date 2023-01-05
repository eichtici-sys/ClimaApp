import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from './Loading'
import useClima from "../hooks/useClima";

function AppClima() {
  const {resultado, cargando, noResultado} = useClima()
  return (
    <>
      <main className="dos-columnas">
        <Formulario/>
        {
          cargando ? <Loading/> :
          resultado?.name ? <Resultado/> :
          noResultado ? <p>{noResultado}</p>
          : <div className="pad"><p>Inicia la búsqueda del clima de tu ciudad</p></div>
        }
        
      </main>
    </>
  );
}

export default AppClima;
