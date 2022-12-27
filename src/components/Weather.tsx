import { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';

interface WeatherProps {
    weather: any;
}

const Weather = ({ weather }: WeatherProps) => {
    console.log(weather);

    if (weather.weather !== undefined && weather.weather[0] !== undefined) {
        return (
            <div className="flex flex-col items-center text-white">
                <h1 className="text-4xl font-thin">{weather.name}</h1>
                <img
                    className="w-1/2 h-1/2"
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                />
                <p className="text-7xl ">
                    {weather.main.temp.toFixed(0)}&#176;
                </p>
                <div className="flex my-4">
                    <p className="text-lg mr-4">
                        Max:
                        <span> {weather.main.temp_max.toFixed(0)}&#176;</span>
                    </p>
                    <p className="text-lg ">
                        Low:
                        <span> {weather.main.temp_min.toFixed(0)}&#176;</span>
                    </p>
                </div>

                <div className="h-auto w-full rounded mx-auto bg-opacity-20 backdrop-blur-lg bg-slate-700  md:rounded-md p-4">
                    <h1 className="capitalize text-center font-semibold text-2xl">
                        {weather.weather[0].description}
                    </h1>
                    <section className="flex mt-2 justify-between">
                        <div className="text-center">
                            <p>{weather.main.feels_like.toFixed(0)}&#176;</p>
                            <p>Feels Like</p>
                        </div>
                        <div className="text-center">
                            <p>{weather.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="text-center">
                            <p>{weather.wind.speed} MPH</p>
                            <p>Winds</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Weather;
