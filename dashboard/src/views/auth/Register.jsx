import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {useRef, useState} from "react";
import Swal from "sweetalert2";

const Register = () => {


    const checkBoxRef = useRef(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setUserData({...userData, [name]: value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!checkBoxRef.current.checked) {
           return  Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You need to accept the terms and conditions",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        console.log("User Data:", userData);
        console.log("Policy Is Accepted" , checkBoxRef.current.checked);
        // Here you would send data to your backend or Firebase
    };


    return (
        <div className="min-w-screen min-h-screen bg-slate-500 flex flex-col items-center justify-center">
            <div className="lg:w-1/3 sm:w-1/2 h-3/4 bg-slate-400 border-4 rounded-md border-slate-600
            items-center flex flex-col gap-5 p-2">
                <p className="text-2xl font-bold text-slate-200">Register Now</p>
                <form>
                    <div className="flex flex-col gap-3 items-center justify-center">

                        {/*region user name*/}
                        <input type="text" placeholder="Username" className="rounded-md border-2
                        border-slate-600 p-2 m-2 w-full focus:border-4 focus:border-amber-300
                        focus:scale-110"
                               name="name"
                               value={userData.name}
                               onChange={inputChangeHandler}/>
                        {/*endregion */}

                        {/*region email*/}
                        <input type="email" placeholder="Email" className="rounded-md border-2
                        border-slate-600 p-2 m-2 w-full focus:border-4 focus:border-amber-300
                        focus:scale-110"
                        name="email"
                        value={userData.email}
                        onChange={inputChangeHandler}/>
                        {/*endregion*/}

                        {/*region password*/}
                        <input type="password" placeholder="Password" className="rounded-md border-2
                        border-slate-600 p-2 m-2 w-full focus:border-4 focus:border-amber-300
                        focus:scale-110"
                        name="password"
                        value={userData.password}
                        onChange={inputChangeHandler}/>
                        {/*endregion*/}

                        {/*region policy */}
                        <div className="flex flex-row gap-3 items-center justify-center w-full">
                            <input type="checkbox" className="rounded-md border-2 border-slate-600
                            p-2 m-2"
                            ref={checkBoxRef}/>
                            <label className="text-slate-200 w-full">I agree to the terms and conditions</label>
                        </div>
                        {/*endregion*/}

                        {/*region save data*/}
                        <button type="submit"
                                className="bg-slate-600 text-slate-200 cursor-pointer w-full p-2
                                rounded-md m-2"
                        onClick={submitHandler}
                        >Register
                        </button>
                        {/*endregion*/}

                        {/*region already have an account*/}
                        <div className="flex items-center w-full">
                            <p className="font-mono font-bold text-slate-200">already have an account?
                                <Link to="/login" className="text-slate-900 font-mono font-bold">{" "}Login</Link>
                            </p>
                        </div>
                        {/*endregion*/}

                        {/*region google or facebook*/}
                        <div className="flex flex-row items-center w-full">
                            <div className="flex items-center w-[45%] h-[2px] bg-slate-500 ml-2"></div>
                            <p className="text-slate-500 font-mono p-2">Or</p>
                            <div className="flex items-center w-[45%] h-[2px] bg-slate-500 ml-2"></div>
                        </div>


                        <div className="flex flex-row justify-center items-center w-full gap-5">
                            <FcGoogle className="text-slate-900 cursor-pointer" size="30"></FcGoogle>
                            <FaFacebook className="text-slate-900 cursor-pointer" size="30"></FaFacebook>
                        </div>
                        {/*endregion*/}


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;

