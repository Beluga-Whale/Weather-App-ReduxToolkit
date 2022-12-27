import FormInput from './components/FormInput';
import React, { useState, useEffect } from 'react';
import { useAppSelector } from './hooks/hooks';

function App() {
    const [city, setCity] = useState<string>('');

    const weather = useAppSelector(state => state.weather.data);
    console.log(weather);

    return (
        <div className="flex items-center h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500 bg-no-repeat bg-cover ">
            <div className="h-auto w-full mx-auto bg-opacity-20 backdrop-blur-lg bg-slate-100 md:w-[600px] md:rounded-md py-4">
                <div>
                    <h1 className="text-2xl text-center">
                        WEATHER <span className="font-black">FORECAST</span>
                    </h1>
                    <p className="text-center text-white">
                        Enter below place you want to know the weather.
                    </p>
                    <FormInput setCity={setCity} city={city} />
                </div>
            </div>
        </div>
    );
}

export default App;
