export { CityInfos, getDefaultInfos, getEmptyInfos }

class CityInfos {
    lat: number 
    lon: number
    timezone : string
    name: string
    countryCode: string 
    temp: number
    weather: string

    constructor(object: { 
        lat: number, 
        lon: number, 
        timezone : string,
        name: string,
        countryCode: string,
        temp: number,
        weather: string
    }) {
        this.lat = object.lat
        this.lon = object.lon
        this.timezone = object.timezone
        this.name = object.name
        this.countryCode = object.countryCode
        this.temp = object.temp
        this.weather = object.weather
    }

}

function getDefaultInfos(): CityInfos {
    return new CityInfos({
        lat: 0, 
        lon: 0, 
        timezone : 'Europe/London',
        name: 'London',
        countryCode: 'GB',
        temp: 0,
        weather: 'Rain'
    })
}

function getEmptyInfos(): CityInfos {
    return new CityInfos({
        lat: 0, 
        lon: 0, 
        timezone : 'Europe/London',
        name: 'London',
        countryCode: 'GB',
        temp: 0,
        weather: 'Rain'
    })
}