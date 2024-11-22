import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import logoImage from "../assets/logo_black.svg";
import arrowRight from "../assets/arrow-right.svg"
import {HUB_ITEMS} from "../data";


function Login() {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const [items, setItems] = useState(HUB_ITEMS);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa mục này?");
        if (confirmDelete) {
            setItems((items) => {
                const updatedItems = items.filter(item => item.id !== id);
                return updatedItems;
            });
        }
    };

    const navigate = useNavigate();

    const handleRegis = () => {
        navigate('/registration');

    };

    return (
        <div className="bg-background-color">
            <div>
                <img className="logo_black w-[110px] mx-16 py-6" src={logoImage} alt="logo"></img>
            </div>

           <div>
               <div className="container-login text-primary-color flex justify-center items-center">
                   <h1 className="font-helvetica text-6xl mb-32">Choose Hub to <br/> create your flow </h1>
                   <div>
                       <div className="hub-list scroll-smooth my-4 bg-white p-6 rounded-lg shadow-md">
                           <ul className="max-h-96 w-[652px] overflow-y-auto rounded-lg p-2 space-y-2">
                               {items.map((item) => (
                                   // <div key={item.id} className="p-4 bg-gray-100 rounded-md hover:bg-gray-200">
                                   <li key={item.id} className="hub-item w-full p-4 border-b-[0.1px] border-[#AEADAD] ">
                                       {item.status === "Active" ? (
                                           <div className="flex w-full gap-4 items-center">
                                               <input type="radio" name="hub" onChange={handleRadioChange}
                                                      className="custom-radio w-5 h-5 mb-8 rounded-full"/>
                                               <div className="space-y-2">
                                                   <p className="hub-name text-lg font-semibold cursor-allowed">{item.name}</p>
                                                   <p className="hub-status font-semibold text-second-color">{item.status}</p>
                                               </div>
                                           </div>
                                       ) : item.status === "Restarting" ? (
                                               <div className="flex gap-4 items-center">
                                                   <div
                                                       className="circle-restarting mb-8 w-5 h-5 border-2 border-gray-300 border-t-second-color border-transparen rounded-full animate-spin"></div>
                                                   <div className="space-y-2">
                                                       <p className="hub-name text-lg font-semibold">{item.name}</p>
                                                       <p className="hub-status font-semibold text-primary-color">{`${item.status}` + "..."}</p>
                                                   </div>
                                               </div>
                                           ) :
                                           <div className="flex gap-4 items-center">
                                               <div
                                                   className="circle-disabled mb-8 w-5 h-5 border-2 border-gray-300 border-transparen rounded-full"></div>
                                               <div className="space-y-2">
                                                   <p className="hub-name text-lg font-semibold opacity-50">{item.name}</p>
                                                   <p className="hub-status font-semibold opacity-50">{item.status}</p>

                                               </div>
                                               <div className="ml-auto">
                                                   <button onClick={() => handleDelete(item.id)}
                                                           className="items-end p-2">
                                                       <i className="fa-duotone fa-regular fa-x"></i>
                                                   </button>
                                               </div>
                                           </div>
                                       }


                                   </li>
                               ))}
                           </ul>

                           <div className="confirm-hub-btn flex justify-center items-center align-items">
                               <button disabled={selectedOption === null}
                                       className={`${
                                           selectedOption ? 'text-lg my-4 py-1.5 px-11 border-2 border-second-color bg-second-color text-white rounded-xl  font-semibold' : 'font-semibold text-lg my-4 py-1.5 px-11 border-2 border-primary-color bg-white text-primary-color rounded-xl not-allow hover:bg-black hover:text-white cursor-not-allowed'}`}>Next
                               </button>
                           </div>


                       </div>
                       <div className="container-register flex justify-between my-12">
                           <p className="register-text text-[35px] font-semibold">
                               or Register a new Hub
                           </p>

                           <button
                               onClick={handleRegis}
                               className="register-btn flex items-center justify-center font-semibold text-[18px]">
                               Register
                               <img className="ml-2" src={arrowRight} alt="arrow-right"/>
                           </button>
                       </div>
                   </div>

               </div>

           </div>
        </div>
    );
}

export default Login;