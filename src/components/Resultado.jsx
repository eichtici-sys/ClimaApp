import useClima from "../hooks/useClima";
import Celcius from "../assets/animated/celsius.svg";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main: temperatura, weather: clima } = resultado;
  const kelvin = 273.15;

  const obtenerIcono = (clima) => {
    const { description, main, icon } = clima[0];    

    switch (main) {
      case "Clear":
        if (icon.includes("n")) {
          return "clear-night.svg";
        } else {
          return "clear-day.svg";
        }
        break;
      case "Clouds":
        if (icon.includes("n")) {
          if (
            description == "few clouds" ||
            description == "scattered clouds"
          ) {
            return "partly-cloudy-night.svg";
          } else if (description == "broken clouds") {
            return "cloudy.svg";
          } else if (description == "overcast clouds") {
            return "overcast-night.svg";
          }
        } else {
          if (
            description == "few clouds" ||
            description == "scattered clouds"
          ) {
            return "partly-cloudy-day.svg";
          } else if (description == "broken clouds") {
            return "cloudy.svg";
          } else if (description == "overcast clouds") {
            return "overcast-day.svg";
          }
        }
        break;
      case "Rain":
        if (icon.includes("n")) {
          if (description == "light rain" || description == "moderate rain") {
            return "partly-cloudy-night-rain.svg";
          } else if (description == "heavy intensity rain") {
            return "rain.svg";
          } else if (description == "very heavy rain") {
            return "overcast-night-rain.svg";
          } else if (description == "extreme rain") {
            return "extreme-night-rain.svg";
          } else if (description == "freezing rain") {
            return "sleet.svg";
          } else {
            return "extreme-rain.svg";
          }
        } else {
          if (description == "light rain" || description == "moderate rain") {
            return "partly-cloudy-day-rain.svg";
          } else if (description == "heavy intensity rain") {
            return "rain.svg";
          } else if (description == "very heavy rain") {
            return "overcast-day-rain.svg";
          } else if (description == "extreme rain") {
            return "extreme-day-rain.svg";
          } else if (description == "freezing rain") {
            return "extreme-sleet.svg";
          } else {
            return "extreme-rain.svg";
          }
        }
        break;
      case "Mist":
        return "mist.svg";
        break;
      case "Smoke":
        if (icon.includes("n")) {
          return "partly-cloudy-night-smoke.svg";
        } else {
          return "partly-cloudy-day-smoke.svg";
        }
      case "Haze":
        return "haze.svg";
        break;
      case "Dust":
        if (icon.includes("n")) {
          return "dust-night.svg";
        } else {
          return "dust-day.svg";
        }
        break;
      case "Fog":
        if (icon.includes("n")) {
          return "fog-night.svg";
        } else {
          return "fog-day.svg";
        }
      case "Sand":
        if (icon.includes("n")) {
          return "dust-night.svg";
        } else {
          return "dust-day.svg";
        }
        break;
      case "Ash":
        return "haze.svg";
        break
      case "Squall":
        return "wind.svg"
        break;
      case "Tornado":
      return "tornado.svg"
      case "Thunderstorm":
        return "thunderstorm.svg"
        break;
      case "Drizzle":
        return "drizzle.svg"
        break
      case "Snow":
        return "snow.svg"
    }
  };
  const icono = obtenerIcono(clima);

  console.log(icono);

  return (
    <div className="contenedor result">
      <h4>Ciudad de {name}</h4>
      <div className="flex">
        <img
          src={`/src/assets/animated/${icono}`}
          alt="imagen"
          className="tiempoImg"
        />
        <div className="info">
          <p className="temperatura">{parseInt(temperatura.temp - kelvin)} </p>
          <img src={`/src/assets/animated/celsius.svg`} alt="logo celsius" />
        </div>
      </div>
      <div className="info">
        <div className="flex items">
          <p className="infop">
            Temp. Mín: <span>{parseInt(temperatura.temp_min - kelvin)}</span>{" "}
          </p>
          <img
            src={`/src/assets/animated/celsius.svg`}
            alt="logo celsius"
            className="celinfo"
          />
        </div>
        <div className="flex items">
          <p className="infop">
            Temp. Máx.: <span>{parseInt(temperatura.temp_max - kelvin)}</span>{" "}
          </p>
          <img
            src={`/src/assets/animated/celsius.svg`}
            alt="logo celsius"
            className="celinfo"
          />
        </div>
      </div>
    </div>
  );
};

export default Resultado;
