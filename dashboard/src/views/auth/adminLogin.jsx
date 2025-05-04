import {useState} from "react";
import {useDispatch} from "react-redux";
import {Admin_Login} from "../../features/auth/authSlice.js";

const AdminLogin = () =>  {

    const dispatch = useDispatch();

    const [userData , setUserData] = useState({
        email: "",
        password: ""
    });

    const onChangeInputHandler = (e) => {

        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {

        e.preventDefault();
        dispatch(Admin_Login(userData));
        //console.log(userData);
    }

    return (
        <div className="min-w-screen min-h-screen bg-slate-500 flex flex-col items-center justify-center">
            <div className="lg:w-1/3 sm:w-1/2 h-3/4 bg-slate-400 border-4 rounded-md border-slate-600
            items-center flex flex-col gap-5 p-2">
                <img src="/images/logo.png" className="rounded-md shadow-2xl" alt="image"/>
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

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;