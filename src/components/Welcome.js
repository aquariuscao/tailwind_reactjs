import React from 'react';
import {useNavigate} from "react-router-dom";
import logoImage from '../assets/logo.svg'

function Welcome() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');

    };

        return (
        <div className="h-screen w-screen flex bg-cover bg-center bg-[url('./assets/ON_Distortion.jpg')]"
        >
            <div className="container-welcome flex-col content-center justify-items-center">
                <div className="text-left">
                    <img className="w-[154px] pb-20" src={logoImage} alt="logo"></img>
                    <h1 className="font-helvetica text-[90px] text-white leading-tight">Welcome to <br/> Advanced Flow  </h1>
                    <p className="text-2xl text-white mt-10 mb-4">Please log in to continue</p>
                    <button
                        onClick={handleLogin}
                        className="text-lg px-9 py-1 text-white rounded-lg border-white border-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        Log in
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Welcome;