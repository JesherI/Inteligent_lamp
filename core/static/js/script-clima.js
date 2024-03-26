document.addEventListener("DOMContentLoaded", function () {
    const UrlBase = "https://api.openweathermap.org/data/2.5/forecast";
    const Apikey = "aac8b143cbfe5c2d58514792803e2326";

    const fetchApi = url => fetch(url).then(response => response.json());

    async function getForecast(lat, lon, apikey) {
        const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const forecastData = await fetchApi(url);
        const forecastList = forecastData.list.slice(0, 5); 

        forecastList.forEach((item, index) => {
            const temperature = Math.round(item.main.temp - 273.15); 
            const element = document.querySelector(`#dia${index + 1} h2`);
            if (element) {
                element.textContent = `${temperature}°C`;
            } else {
            }
        });
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getForecast(lat, lon, Apikey);

            fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${Apikey}`)
                .then(response => response.json())
                .then(data => {
                    const location = data[0].name;
                    document.getElementById("ubicacion").textContent = `${location}`;
                })
                .catch(error => {
                });
        },
        error => {
        }
    );
});