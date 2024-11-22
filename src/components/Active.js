import React from "react";
import {HUB_ACTIVE} from "../data";
import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";

function Active() {

    const [text, setText] = useState("Pairing...");
    const [textColor, setTextColor] = useState("text-primary-color opacity-35");
    const [showTwoButtons, setShowTwoButtons] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setText("Registered");
            setTextColor("text-primary-color");
            setShowTwoButtons(true);
        }, 5000);

        // Clean up timer khi component unmount
        return () => clearTimeout(timer);
    }, []);


    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/login');
    };

    const handleAddDevice = () => {
        window.location.reload();
    };


    return (
        <div className="container-active flex justify-center items-center">
            <div className="w-[670px] p-10 pt-0 bg-white shadow-md">
                <div className="flex border-t-[0.5px] border-[#AEADAD]">
                    <div className="guide-registraion w-[370px]">
                        <h2 className="text-[24px] text-primary-color font-semibold mt-10 mb-5">Active your hub</h2>
                        <div >
                            <ul>
                                {HUB_ACTIVE.map((item) => (
                                    <li className="text-[14px]">
                                        <p>{item.id.toString().concat(". ", item.context)}</p>
                                        {/*<p>{`${item.id}. ${item.context}`}</p>*/}
                                    </li>
                                ))}
                            </ul>
                            {!showTwoButtons ? (
                                <div></div>
                            ): (
                                <div className="two-btn flex">
                                    <button
                                        onClick={handleHome}
                                        className="home-btn font-semibold text-lg my-4 py-1.5 px-11 mr-6 border-2 border-primary-color bg-white text-primary-color rounded-xl">
                                        Home
                                    </button>
                                    <button
                                        onClick={handleAddDevice}
                                        className="add-device-btn text-lg my-4 py-1.5 px-6 border-2 border-second-color bg-second-color text-white rounded-xl">
                                        Add device
                                    </button>
                                </div>
                            )}


                        </div>
                    </div>
                    <div className="spinner-registration w-[281px] h-[363px] flex items-center justify-center">
                        {/*<svg class="animate-spin" fill="none" height="80" viewBox="0 0 20 20" width="80" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        d="M10 3C6.13401 3 3 6.13401 3 10C3 10.2761 2.77614 10.5 2.5 10.5C2.22386 10.5 2 10.2761 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5C9.5 17.2239 9.72386 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z"*/}
                        {/*        fill="#FF6231"/>*/}
                        {/*</svg>*/}
                        <svg class="circle-out"
                            height="200" width="200">
                            <circle cx="100" cy="100" r="80" stroke="#FF6231" stroke-width="4" fill="none" />
                            <svg class="circle-in"
                                height="200" width="200 ">
                                <circle cx="100" cy="100" r="60" stroke="#222021" stroke-width="4" fill="none" />
                            </svg>
                        </svg>
                        <p
                            className={`absolute text-[16px] text-center  ${textColor}`}>
                            {text}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Active;