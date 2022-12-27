import FormInput from './components/FormInput';
import { useState } from 'react';
import Weather from './components/Weather';
import { useAppSelector } from './hooks/hooks';

function App() {
    const [city, setCity] = useState<string>('');
    const [show, setShow] = useState(false);
    const weather = useAppSelector(state => state.weather.data);
    return (
        <div className="flex items-center h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500 bg-no-repeat bg-cover ">
            <div className="h-auto w-full mx-auto bg-opacity-20 backdrop-blur-lg bg-slate-300 md:w-[700px] md:rounded-md p-4">
                {show ? (
                    <Weather weather={weather} />
                ) : (
                    <section>
                        <h1 className="text-2xl text-center">
                            WEATHER <span className="font-black">FORECAST</span>
                        </h1>
                        <p className="text-center text-white">
                            Enter below place you want to know the weather.
                        </p>
                        <FormInput
                            setCity={setCity}
                            city={city}
                            setShow={setShow}
                        />
                    </section>
                )}
            </div>
        </div>
    );
}

export default App;
