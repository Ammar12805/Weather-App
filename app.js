let API_KEY = "adbc1ad6a1324856f861b438bde59082";
let input = document.getElementById('inp')
let showWeather = document.getElementById('showWhether')
let main = document.getElementById('main')
let cont = document.getElementById('cont')

let search = async () => {
   let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`
  showWeather.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`

   main.style.height = '30vh'
main.style.transition = '3s'
main.style.marginTop = '0px'

cont.style.transition='2s'
   let fetchData = await fetch(API_URL);
   let response = await fetchData.json();

   console.log(response);
   return  showData (response)

};

let showData = (data)=>{

   if(data.cod == '404'){
      showWeather.innerHTML =`<h1>${data.message}</h1>`;
   }
   else if(data.cod == '400'){
      showWeather.innerHTML = `<h1>${data.message}</h1>`
   }
   else{

      showWeather.innerHTML = `
      <img src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
      <h1>${data.name}</h1>
      <h1>Teamperature : ${data.main.temp}</h1>
      <h1>Feel like : ${data.main.feels_like}</h1>        
      <h1>Wind Speed : ${data.wind.speed}</h1>        
      
      `
      }
};