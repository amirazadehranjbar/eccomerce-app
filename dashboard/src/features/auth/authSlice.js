import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api.js";

//region initial state
const initialState = {
    successMessage: "",
    errorMessage: "",
    loading: false,
    userInfo:"",
}
//endregion

//region create async thunk for admin login
export const Admin_Login = createAsyncThunk(
    'auth/admin_login',
    async (info)=>{
        console.log(info);
        try {
            const {data} = await api.post("/admin/login", info, {withCredentials: true});
            console.log(data);
        }catch(error){
            console.log(error);
            return error.response.data;
        }


    }
);
//endregion

//region create auth slice
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        clearMessages: (state) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers: () => {
        // Add reducers for additional action types here, and handle loading state as needed
    },
});
//endregion

//region Action creators are generated for each case reducer function
export const {
    setSuccessMessage,
    setErrorMessage,
    setLoading,
    setUserInfo,
    clearMessages
} = AuthSlice.actions;
export default AuthSlice.reducer;
//endregion