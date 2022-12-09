/*
  🌧️ Open Weather Map API
 */

const API_KEY = '575e784b06ea0eba5b54268200921dc0'
const BASE_URL = 'https://api.openweathermap.org/data/2.5' // avsluta med /?

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 1000;


// renderWarning = msg => {}


const getCurrentWeather = async city => {

    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
        
    FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

    if (!response.ok) { 
        // return await response.json()
        throw new Error(response.status, response.statusText, response.message);
    }        
        
        return data = await response.json()
        
};
 
 