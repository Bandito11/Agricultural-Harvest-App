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
    beginOrProduction: number[];
    noProduction: number[];
    interface: string;
    type: string;
}

export interface ITips {
    zodiac: string;
    phase: string;
    message: string;
}
