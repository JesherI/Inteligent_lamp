document.addEventListener("DOMContentLoaded", function() {
    const UrlBase = "https://api.openweathermap.org/data/2.5/forecast";
    const Apikey = "aac8b143cbfe5c2d58514792803e2326";

    const fetchApi = url => fetch(url).then(response => response.json());

    async function getForecast(lat, lon, apikey) {
        const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const forecastData = await fetchApi(url);
        console.log(forecastData);
        const forecastList = forecastData.list;

        const nextDaysForecast = forecastList.filter(item => {
            const forecastDate = new Date(item.dt * 1000);
            const currentDate = new Date();
            return forecastDate.getDate() !== currentDate.getDate(); 
        });

        nextDaysForecast.forEach((item, index) => {
            const temperature = (item.main.temp - 273.15).toFixed(2);
            document.querySelector(`#dia${index + 1} h2`).textContent = `${temperature}°C`;
        });
    }

    navigator.geolocation.getCurrentPosition(
        positon => {
            const lat = positon.coords.latitude;
            const lon = positon.coords.longitude;
            console.log(lat, lon);
            getForecast(lat, lon, Apikey);
        }
    );
});

