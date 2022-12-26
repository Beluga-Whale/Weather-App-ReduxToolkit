import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {};

const FormInput = (props: Props) => {
    return (
        <div className="flex items-center justify-center mt-2 ">
            <input className="rounded mr-2" type="text" />
            <button>
                <AiOutlineSearch className="hover:text-white" size={20} />
            </button>
        </div>
    );
};

export default FormInput;
