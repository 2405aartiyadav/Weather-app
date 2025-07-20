import rain from "../assets/images/rain.png";
import clear from "../assets/images/clear.png";
import clouds from "../assets/images/clouds.png";
import drizzle from "../assets/images/drizzle.png";
import mist from "../assets/images/mist.png";
import snow from "../assets/images/snow.png";
import humidity from "../assets/images/humidity.png";
import wind from "../assets/images/wind.png";
 const getWeatherByImage =  (condition) => {
  switch (condition.toLowerCase()) {
    case "clear":
      return clear;
    case "clouds":
      return clouds;
      case "drizzle":
      return drizzle;
      case "rain":
      return rain;
      case "snow":
      return snow;
      case "mist":
      return mist;
      default:
        return clear;
  }
};
export default getWeatherByImage;