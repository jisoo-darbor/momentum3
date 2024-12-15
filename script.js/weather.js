const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = '1bb51f3c48cb33871afdb03c8e454c73';
function successCallback(pos) {
  console.log(pos);
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });

}
function errorCallback() {
  console.error(`Error occurred.`);
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



