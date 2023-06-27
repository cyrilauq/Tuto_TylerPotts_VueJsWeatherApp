<script setup lang="ts">
    import { ref } from 'vue'
    import axios from "axios"
    import moment from 'moment'

    // TODO: give a custom object to weather

    import { CityInfos, getEmptyInfos, getDefaultInfos } from '@/modules/CityInfos'

    const url_base = 'https://openweathermap.org/data/3.0/'
    const api_key = "54eba87b601fa33f3fc31c339939a1b8"
    const query = ref('')
    const RESULT_COUNT_LIMIT = 1
    const weather = ref({})
    var currentDate = moment().format('dddd DD MMMM YYYY')
    const cityInfos = ref(getDefaultInfos())

    async function fetchWeather(e: KeyboardEvent) {
        if(e.key === "Enter") {        
            cityInfos.value = new CityInfos(await getCoordinates(query.value))
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfos.value.lat}&lon=${cityInfos.value.lon}&units=metric&appid=${api_key}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`[${response.status}] : ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    weather.value = data
                    cityInfos.value.temp = data.main.temp
                    cityInfos.value.weather = data.weather[0].main
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    function setResults(result: Promise<any>) {
        weather.value = result
    }

    async function getCoordinates(city: string)
    : Promise<CityInfos> {
        return await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query.value}&count=${RESULT_COUNT_LIMIT}`)
                .then(response => {
                    if(!response.ok) {
                        throw new Error(`[${response.status}] : ${response.statusText}`)
                    }
                    return response.json()
                })
                .then(data => {
                    var result = new CityInfos(getEmptyInfos())
                    let results = data.results
                    if(results.length > 0) {
                        let first = results[0];
                        result = new CityInfos({ 
                            lat: parseFloat(first.latitude), 
                            lon: parseFloat(first.longitude), 
                            timezone: first.timezone,
                            name: first.name,
                            countryCode: first.country_code,
                            temp: 0,
                            weather: ''
                        })
                    }
                    return result
                })
    }
</script>

<template>
    <div id="app" :class="{ 'warm': (typeof cityInfos.weather != undefined && cityInfos.temp > 16) }">
        <main>
            <div class="search-box">
                <input 
                    type="text"
                    class="search-bar"
                    v-model="query"
                    @keypress="fetchWeather"
                    placeholder="Search..."
                />
            </div>
            <div class="weather-wrap">
                <div class="location-box">
                    <div class="location">
                        {{ cityInfos.name }}, {{ cityInfos.countryCode }}
                    </div>
                    <div class="date">
                        {{ currentDate }}
                    </div>
                    <div class="weather-box">
                        <div class="temp">
                            {{ Math.round(cityInfos.temp) }}°C
                        </div>
                        <div class="weather">
                            {{ cityInfos.weather }}
                        </div>
                    </div>
                </div>
            </div>
        </main>  
    </div>  
</template>

<style scoped>
    #app {
        background-image: url('./assets/cold-bg.jpg');
        background-position: bottom;
        transition: .4s;
    }
    #app.warm {
        background-image: url('./assets/warm-bg.jpg');
        background-position: bottom;
        transition: .4s;
    }
    main {
        padding: 25px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, .25), rgba(0, 0, 0, .75));
    }
    .search-box {
        width: 100%;
        margin-bottom: 30px;
    }
    .search-box .search-bar {
        display: block;
        width: 100%;
        padding: 15px;

        color: #313131;
        font-size: 20px;

        appearance: none;
        border: none;
        outline: none;
        background: none;

        box-shadow: 0px 0px 8px rgba(0, 0, 0, .25);
        background-color: rgba(255, 255, 255, .5);
        border-radius: 0px 16px 0px 16px;
        transition: .4s;
    }

    .search-box .search-bar:focus {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, .25);
        background-color: rgba(255, 255, 255, .75);
        border-radius: 16px 0px 16px 0px;
    }

    .location-box .location {
        color: #FFF;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        text-shadow: 1px 3px rgba(0, 0, 0, .25);
    }

    .location-box .date {
        color: #FFF;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        font-style: italic;
    }
    .weather-box {
        text-align: center;
    }

    .weather-box .temp {
        display: inline-block;
        padding: 10px 25px;
        color: #FFF;
        font-size: 102px;
        font-weight: 900;

        text-shadow: 3px 6px rgba(0, 0, 0, .25);
        background-color: rgba(255, 255, 255, .25);
        border-radius: 16px;
        margin: 30px 0px;

        box-shadow: 3px 6px rgba(0, 0, 0, .25);
    }

    .weather-box .weather {
        color: #FFF;
        font-size: 48px;
        font-weight: 700;
        font-style: italic;
        text-shadow: 3px 6px rgba(0, 0, 0, .25);
    }
</style>
