const apikey="2529e336ef0680a07dd2492cf270c615";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const cityyy=document.querySelector(".search input");
        const search=document.querySelector(".search button");
        const WeatherIcon=document.querySelector(".rain");
        
        var FirstCity="New York"
        async function checkFirst(city){
            const responsee= await fetch(apiUrl +city+ `&appid=${apikey}`);
            var dataa=await responsee.json();
            document.querySelector("#temperature").innerHTML=Math.round(dataa.main.temp)+"°C";
            document.querySelector("#cityy").innerHTML=dataa.name;
            document.querySelector("#humidity").innerHTML=dataa.main.humidity+"% ";
            document.querySelector("#windspeed").innerHTML=dataa.wind.speed+"km/h ";
        }
        async function checkWeather(city){
            const response= await fetch(apiUrl +city+ `&appid=${apikey}`);
            console.log(city);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
            } 
            else{
                var data=await response.json();
                
                document.querySelector("#temperature").innerHTML=Math.round(data.main.temp)+"°C";
                document.querySelector("#cityy").innerHTML=data.name;
                document.querySelector("#humidity").innerHTML=data.main.humidity+"% ";
                document.querySelector("#windspeed").innerHTML=data.wind.speed+"km/h ";

                if(data.weather[0].main=="Clear"){
                    WeatherIcon.src="images/clear.png";
                }
                else if(data.weather[0].main=="Clouds"){
                    WeatherIcon.src="images/clouds.png";
                }
                else if(data.weather[0].main=="Drizzle"){
                    WeatherIcon.src="images/drizzle.png";
                }
                else if(data.weather[0].main=="Mist"){
                    WeatherIcon.src="images/mist.png";
                }
                else if(data.weather[0].main=="Rain"){
                    WeatherIcon.src="images/rain.png";
                }
                else {
                    WeatherIcon.src="images/snow.png";
                }
                document.querySelector(".error").style.display="none";
            }
        }
        checkFirst(FirstCity);
        search.addEventListener("click",()=>{
            checkWeather(cityyy.value);
        });
           
        