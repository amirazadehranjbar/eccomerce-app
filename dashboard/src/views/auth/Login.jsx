import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {useState} from "react";


const Login = () => {

    const [userData , setUserData] = useState({
        email: "",
        password: ""
    });

    const onChangeInputHandler = (e) => {

        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {

        e.preventDefault();
        console.log(userData);
    }

    return (
        <div className="min-w-screen min-h-screen bg-slate-500 flex flex-col items-center justify-center">
            <div className="lg:w-1/3 sm:w-1/2 h-3/4 bg-slate-400 border-4 rounded-md border-slate-600
            items-center flex flex-col gap-5 p-2">
                <p className="text-2xl font-bold text-slate-200">Login</p>
                <form>
                    <div className="flex flex-col gap-3 items-center justify-center">

                        {/*region email*/}
                        <input type="email" placeholder="Email" className="rounded-md border-2
                        border-slate-600 p-2 m-2 w-full focus:border-4 focus:border-amber-300
                        focus:scale-110"
                        name="email"
                        onChange={onChangeInputHandler}/>
                        {/*endregion*/}

                        {/*region password*/}
                        <input type="password" placeholder="Password" className="rounded-md border-2
                        border-slate-600 p-2 m-2 w-full focus:border-4 focus:border-amber-300
                        focus:scale-110"
                        name="password"
                        onChange={onChangeInputHandler}/>
                        {/*endregion*/}

                        {/*region save data*/}
                        <button type="submit"
                                className="bg-slate-600 text-slate-200 cursor-pointer w-full p-2
                                rounded-md m-2" onClick={onSubmitHandler}>Login
                        </button>
                        {/*endregion*/}

                        {/*region navigate to register page*/}
                        <div className="flex items-center w-full">
                            <p className="font-mono font-bold text-slate-200">already dont have any account?
                                <Link to="/register" className="text-slate-900 font-mono font-bold">
                                    {" "}Register</Link>
                            </p>
                        </div>
                        {/*endregion*/}

                        {/*region Or*/}
                        <div className="flex flex-row items-center w-full">
                            <div className="flex items-center w-[45%] h-[2px] bg-slate-500 ml-2"></div>
                            <p className="text-slate-500 font-mono p-2">Or</p>
                            <div className="flex items-center w-[45%] h-[2px] bg-slate-500 ml-2"></div>
                        </div>
                        {/*endregion*/}

                        {/*region social media login*/}
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

export default Login;