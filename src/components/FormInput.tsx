import React, { Dispatch, FormEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { fetchWeatherByCity } from '../feature/weather/weatherSlice';
import { useAppDispatch } from '../hooks/hooks';

type WeatherProps = {
    setCity: Dispatch<React.SetStateAction<string>>;
    city: string;
    setShow: Dispatch<React.SetStateAction<boolean>>;
};

const FormInput = ({ setCity, city, setShow }: WeatherProps) => {
    const dispatch = useAppDispatch();

    const inputCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeatherByCity(city));
        setShow(true);
        setCity('');
    };

    return (
        <form
            onSubmit={e => inputCity(e)}
            className="flex items-center justify-center mt-2 "
        >
            <input
                className="rounded mr-2"
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
            />

            <button>
                <AiOutlineSearch className="hover:text-white" size={20} />
            </button>
        </form>
    );
};

export default FormInput;
