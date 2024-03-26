document.addEventListener("DOMContentLoaded", async function () {
    const fechaActual = new Date();

    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();

    const nombresMeses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const fechaFormateada = `${dia} de ${nombresMeses[mes]} de ${año}`;

    document.getElementById("fecha").textContent = fechaFormateada;

    const nombresDias = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

    const diaSemanaActual = fechaActual.getDay();

    const proximosDias = document.querySelector('.proximos-dias');

    proximosDias.innerHTML = '';

    const hoy = document.createElement('div');
    hoy.id = 'dia0';
    hoy.innerHTML = `
        <h3>HOY</h3>
        <h2 id="temperaturaHoy"></h2>
    `;
    proximosDias.appendChild(hoy);

    for (let i = 1; i < 5; i++) {
        const indiceDia = (diaSemanaActual + i) % 7;

        const nuevoDia = document.createElement('div');
        nuevoDia.id = `dia${i}`;
        nuevoDia.innerHTML = `
            <h3>${nombresDias[indiceDia]}</h3>
            <h2></h2>
        `;

        proximosDias.appendChild(nuevoDia);
    }

    const latLon = await obtenerLatLon();
    const temperaturaHoy = await obtenerTemperaturaHoy(latLon.lat, latLon.lon);
    document.getElementById("temperaturaHoy").textContent = ` ${temperaturaHoy}°C`;
});

async function obtenerLatLon() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                resolve({ lat, lon });
            },
            error => {
                reject(error);
            }
        );
    });
}

async function obtenerTemperaturaHoy(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aac8b143cbfe5c2d58514792803e2326`;
    const response = await fetch(url);
    const data = await response.json();
    return Math.round(data.main.temp - 273.15);
}
