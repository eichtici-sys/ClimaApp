import useClima from "../hooks/useClima";
import Celcius from "../assets/animated/celsius.svg";
import FogNight from "../assets/animated/fog-night.svg";
import FogDay from "../assets/animated/fog-day.svg";
import ClearDay from "../assets/animated/clear-day.svg";
import ClearNight from "../assets/animated/clear-night.svg";
import Clouds1 from "../assets/animated/partly-cloudy-night.svg";
import Clouds2 from "../assets/animated/cloudy.svg";
import Clouds3 from "../assets/animated/overcast-night.svg";
import Clouds4 from "../assets/animated/partly-cloudy-day.svg";
import Clouds5 from "../assets/animated/overcast-day.svg";
import Rain1 from "../assets/animated/partly-cloudy-night-rain.svg";
import Rain2 from "../assets/animated/rain.svg";
import Rain3 from "../assets/animated/overcast-night-rain.svg";
import Rain4 from "../assets/animated/extreme-night-rain.svg";
import Rain5 from "../assets/animated/sleet.svg";
import Rain6 from "../assets/animated/partly-cloudy-day-rain.svg";
import Rain7 from "../assets/animated/overcast-day-rain.svg";
import Rain8 from "../assets/animated/extreme-day-rain.svg";
import Rain9 from "../assets/animated/extreme-sleet.svg";
import Rain10 from "../assets/animated/extreme-rain.svg";
import Mist from "../assets/animated/mist.svg";
import Smoke1 from "../assets/animated/partly-cloudy-night-smoke.svg";
import Smoke2 from "../assets/animated/partly-cloudy-day-smoke.svg";
import Haze from "../assets/animated/haze.svg";
import Dust1 from "../assets/animated/dust-night.svg";
import Dust2 from "../assets/animated/dust-day.svg";
import Squall from "../assets/animated/wind.svg";
import Tornado from "../assets/animated/tornado.svg";
import Thunderstorm from "../assets/animated/thunderstorm.svg";
import Drizzle from "../assets/animated/drizzle.svg";
import Snow from "../assets/animated/snow.svg";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main: temperatura, weather: clima } = resultado;
  const kelvin = 273.15;

  const obtenerIcono = (clima) => {
    const { description, main, icon } = clima[0];
    let icono;
    switch (main) {
      case "Clear":
        if (icon.includes("n")) {
          icono = ClearNight;
          return icono;
        } else {
          icono = ClearDay;
          return icono;
        }
        break;
      case "Clouds":
        if (icon.includes("n")) {
          if (
            description == "few clouds" ||
            description == "scattered clouds"
          ) {
            icono = Clouds1;
            return icono;
          } else if (description == "broken clouds") {
            icono = Clouds2;
            return icono;
          } else if (description == "overcast clouds") {
            icono = Clouds3;
            return icono;
          }
        } else {
          if (
            description == "few clouds" ||
            description == "scattered clouds"
          ) {
            icono = Clouds4;
            return icono;
          } else if (description == "broken clouds") {
            icono = Clouds2;
            return icono;
          } else if (description == "overcast clouds") {
            icono = Clouds5;
            return icono;
          }
        }
        break;
      case "Rain":
        if (icon.includes("n")) {
          if (description == "light rain" || description == "moderate rain") {
            icono = Rain1;
            return icono;
          } else if (description == "heavy intensity rain") {
            icono = Rain2;
            return icono;
          } else if (description == "very heavy rain") {
            icono = Rain3;
            return icono;
          } else if (description == "extreme rain") {
            icono = Rain4;
            return icono;
          } else if (description == "freezing rain") {
            icono = Rain5;
            return icono;
          } else {
            icono = Rain10;
            return icono;
          }
        } else {
          if (description == "light rain" || description == "moderate rain") {
            icono = Rain6;
            return icono;
          } else if (description == "heavy intensity rain") {
            icono = Rain2;
            return icono;
          } else if (description == "very heavy rain") {
            icono = Rain7;
            return icono;
          } else if (description == "extreme rain") {
            icono = Rain8;
            return icono;
          } else if (description == "freezing rain") {
            icono = Rain9;
            return icono;
          } else {
            icono = Rain10;
            return icono;
          }
        }
        break;
      case "Mist":
        icono = Mist;
        return icono;
        break;
      case "Smoke":
        if (icon.includes("n")) {
          icono = Smoke1;
          return icono;
        } else {
          icono = Smoke2;
          return icono;
        }
      case "Haze":
        icono = Haze;
        return icono;
        break;
      case "Dust":
        if (icon.includes("n")) {
          icono = Dust1;
          return icono;
        } else {
          icono = Dust2;
          return icono;
        }
        break;
      case "Fog":
        if (icon.includes("n")) {
          icono = FogNight;
          return icono;
        } else {
          icono = FogDay;
          return icono;
        }
      case "Sand":
        if (icon.includes("n")) {
          icono = Dust1;
          return icono;
        } else {
          icono = Dust2;
          return icono;
        }
        break;
      case "Ash":
        icono = Haze;
        return icono;
        break;
      case "Squall":
        icono = Squall;
        return icono;
        break;
      case "Tornado":
        icono = Tornado;
        return icono;
      case "Thunderstorm":
        icono = Thunderstorm;
        return icono;
        
        break;
      case "Drizzle":
        icono = Drizzle;
        return icono;
        break;
      case "Snow":
        icono = Snow;
        return icono;
    }
  };
  const icono = obtenerIcono(clima);

  return (
    <div className="contenedor result">
      <h4>Ciudad de {name}</h4>
      <div className="flex">
        <img src={icono} alt="imagen" className="tiempoImg" />
        <div className="info">
          <p className="temperatura">{parseInt(temperatura.temp - kelvin)} </p>
          <img src={Celcius} alt="logo celsius" />
        </div>
      </div>
      <div className="info">
        <div className="flex items">
          <p className="infop">
            Temp. Mín: <span>{parseInt(temperatura.temp_min - kelvin)}</span>{" "}
          </p>
          <img src={Celcius} alt="logo celsius" className="celinfo" />
        </div>
        <div className="flex items">
          <p className="infop">
            Temp. Máx.: <span>{parseInt(temperatura.temp_max - kelvin)}</span>{" "}
          </p>
          <img src={Celcius} alt="logo celsius" className="celinfo" />
        </div>
      </div>
    </div>
  );
};

export default Resultado;
