export interface ICoordinates {
    latitude: number;
    longitude: number;
}

export interface IApiResponse<T> {
    success: boolean;
    error;
    data: T;
    dateStamp: Date;
}

export interface ITime {
    hours: number;
    minutes: number;
    seconds: number;
    fulltime: string;
    milliseconds: number;
}

export interface ICalendar {
    weekday: number;
    day: number;
    month: number;
    year: number;
}

export interface ICrop {
    name: string;
    icon: string;
    color: string;
    abundance: number[];
    production: number[];
    noProduction: number[];
    interface: string;
    type: string;
}

export interface ITips {
    zodiac: string;
    phase: string;
    message: string;
}

export interface ICalendar {
    weekDay?: number;
    day: number;
    month: number;
    year: number;
}

export interface ICurrentWeather {
    time: string;
    summary: string;
    icon: string;
    nearestStormDistance: number; // nearest storm is miles. 0 may mean it's on the vicinity
    // tslint:disable-next-line:max-line-length
    nearestStormBearing: number; // direction in degrees. 0 degrees is true north and progressing clockwise. If nearestStormDistance is zero this will be NULL
    precipIntensity: number; // inches of liquid water per hour. Is a conditional probability
    precipProbability: number; // % probability of precipitation occurring. 0 to 1.
    temperature: number; //  &deg;F
    apparentTemperature: number; // "feels like" &deg;F
    dewPoint: number; // &deg;F
    humidity: number; // relative humidity. 0 to 1.
    pressure: number; // millibars
    windSpeed: number; // mph
    windGust: number; // mph
    windBearing: number; // degrees, with true north at 0° and progressing clockwise
    cloudCover: number; // % percentage of sky occluded by clouds. 0 to 1
    uvIndex: number;
    visibility: number; // miles
    ozone: number; // Dobson units
    sunriseTime: string;
    sunsetTime: string;
    moonPhase: number;
}

export interface IForecast {
    time: number;
    summary: string;
    icon: string;
    sunriseTime: string;
    sunsetTime: string;
    moonPhase: number;
    precipIntensity: number; // inches of liquid water per hour. Is a conditional probability
    precipIntensityMax: number;
    precipIntensityMaxTime: string; // inches of liquid water per hour
    precipProbability: number; // % probability of precipitation occurring. 0 to 1.
    precipType: string; // if zero it will be undefined.
    temperatureHigh: number;
    temperatureHighTime: string;
    temperatureLow: number;
    temperatureLowTime: string;
    apparentTemperatureHigh: number; // feels like
    apparentTemperatureHighTime: string;
    apparentTemperatureLow: number; // feels like
    apparentTemperatureLowTime: string;
    dewPoint: number; // F
    humidity: number; // relative humidity. 0 to 1.
    pressure: number; // millibars
    windSpeed: number; // mph
    windGust: number; // mph
    windGustTime: string;
    windBearing: number; // degrees, with true north at 0° and progressing clockwise
    cloudCover: number; // percentage of sky occluded by clouds. 0 to 1
    uvIndex: number;
    uvIndexTime: string;
    visibility: number; // miles
    ozone: number; // Dobson units
    temperatureMin: number;
    temperatureMinTime: string;
    temperatureMax: number;
    temperatureMaxTime: string;
    apparentTemperatureMin: number; // feels like
    apparentTemperatureMinTime: string;
    apparentTemperatureMax: number; // feels like
    apparentTemperatureMaxTime: string;
}
