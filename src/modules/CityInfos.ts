export { CityInfos }

class CityInfos {
    lat: number 
    lon: number
    timezone : string
    name: string
    countryCode: string 
    temp: number

    constructor(object: { 
        lat: number, 
        lon: number, 
        timezone : string,
        name: string,
        countryCode: string,
        temp: number
    }) {
        this.lat = object.lat
        this.lon = object.lon
        this.timezone = object.timezone
        this.name = object.name
        this.countryCode = object.countryCode
        this.temp = object.temp
    }

}