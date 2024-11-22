import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import logoImage from "../assets/logo_black.svg";
import arrowLeft from "../assets/arrow-left.svg"
import {HUB_ITEMS} from "../data";
import Active from "./Active";

function Registration(){

    const [name,setName]=useState('');
    const [serialNumber,setSerialNumber]=useState('');
    const [isfillInput,setisfillInput]= useState(false);
    const [error,setError]=useState({ name: '', serialNumber: '' });
    const [isRegistered, setIsRegistered] = useState(false);
    const [clickButton, setClickButton] = useState(false);

    const handleClickButton = () => {
        setClickButton(true);
    }


    const checkIfExists = (name, serialNumber) => {
        const errors = { name: '', serialNumber: '' };

        // Kiểm tra xem tên người dùng đã tồn tại chưa
        if (HUB_ITEMS.some(hub => hub.name === name)) {
            errors.name = 'Hub name was already entered';
        }

        if (HUB_ITEMS.some(hub => hub.serialnum === serialNumber)) {
            errors.serialNumber = 'Serial number was already entered';
        }

        return errors;
    };

    // Hàm xử lý khi người dùng nhập tên người dùng
    const handleNameChange = (e) => {
        setName(e.target.value);
        setError({ name: '', serialNumber: '' });
    };

    // Hàm xử lý khi người dùng nhập email
    const handleSerialNumberChange = (e) => {
        setSerialNumber(e.target.value);
        setError({ name: '', serialNumber: '' });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra nếu tên hoặc email đã tồn tại
        const errors = checkIfExists(name, serialNumber);

        if (errors.name || errors.serialNumber) {
            // Nếu có lỗi, set thông báo lỗi cho các input tương ứng
            setError(errors);
            return;
        }
        setIsRegistered(true);
    };


        useEffect(() => {
        if (name.trim() !== '' && serialNumber.trim() !== '') {
            setisfillInput(true); // Kích hoạt nút Submit nếu cả hai trường có giá trị
        } else {
            setisfillInput(false); // Vô hiệu hóa nút Submit nếu có ít nhất một trường rỗng
        }
    }, [name, serialNumber]); // Chạy lại khi name hoặc email thay đổi

    const navigate = useNavigate();

    const handleBackLogin = () => {
        navigate('/login');

    };

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <div>
                <img className="logo_black w-[110px] mx-10 py-6" src={logoImage} alt="logo"></img>
            </div>
            <div>
                <button
                    onClick={handleBackLogin}
                    className="mx-10 register-btn flex items-center justify-center font-semibold text-[18px]">
                    <img className="pr-2" src={arrowLeft} alt="arrow-left"/>
                    Back
                </button>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[670px] p-10 bg-white shadow-md">
                    <h1 className="text-[35px] text-primary-color font-semibold mb-12">Smarthub registration</h1>
                    <form  onSubmit={handleSubmit}
                            className="form-registration">
                        <div className="form-name mb-8 flex">
                            <label className=" w-1/4 text-[18px] pb-5 text-primary-color font-semibold "> Hub name<sup>*</sup> </label>
                            <div className="w-3/4" >
                                <input type="text" placeholder="Enter Hub name" onChange={handleNameChange}  value={name}
                                    className={`${
                                    error.name ? 'hub-name font-semibold w-full p-2 border-2 border-[#C32431] focus:outline-none focus:border-primary-color' 
                                        : 'hub-name w-full p-2 font-semibold border-2 border-[#AEADAD] focus:outline-none focus:border-primary-color'}`} />
                                <div className="mt-2">{error.name &&
                                    <p className="text-[#C32431] font-semibold">{error.name}</p>}</div>
                            </div>
                        </div>


                        <div className="form-serialnumber mb-8 flex">
                            <label className="w-1/4 text-[18px] pb-5 text-primary-color font-semibold ">Serial Number<sup>*</sup> </label>
                            <div className="w-3/4" >
                                <input type="text" placeholder="Enter Hub name" onChange={handleSerialNumberChange}  value={serialNumber}
                                       className={`${
                                           error.serialNumber ? 'hub-name font-semibold w-full p-2 border-2 border-[#C32431] focus:outline-none focus:border-primary-color'
                                               : 'hub-name w-full p-2 font-semibold border-2 border-[#AEADAD] focus:outline-none focus:border-primary-color'}`} />
                                <div className="mt-2">{error.serialNumber &&
                                    <p className="text-[#C32431] font-semibold">{error.serialNumber}</p>}</div>
                            </div>
                        </div>

                        <button
                                onClick={handleClickButton}
                                disabled={(isRegistered && clickButton && isfillInput) || !isfillInput}
                                className={`${
                                    (isRegistered && clickButton && isfillInput) || !isfillInput ? 'registration-btn ml-36 text-lg my-4 py-1.5 px-8  opacity-15 bg-primary-color text-white rounded-xl' 
                                        : 'registration-btn ml-36 bg-[#222021] text-lg my-4 py-1.5 px-8 bg-second-color text-white rounded-xl'}`}>
                            Register
                        </button>


                    </form>

                </div>

            </div>

            {isRegistered && (
                <div>
                    <Active />
                    {/* Sau khi thông báo thành công xuất hiện, disable nút Submit */}
                </div>
            )}
        </div>
    );
}
export default Registration;