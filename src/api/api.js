const API_KEY="042851326402aa1f49eb615ba366069c";
const API_URL="https://api.openweathermap.org/data/2.5/weather";
// https://api.openweathermap.org/data/2.5/weather?q=Nagpur&units=metric&appid=042851326402aa1f49eb615ba366069c
 
export const getWeatherDetailByCity=async(city)=>{
    try{
        const response=await fetch(
            `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
        );

        const data=await response.json();
        return data;
    }
    catch(error){
        console.log('weather api error',error.message);
        
        return null;

    }
}

