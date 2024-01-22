import { createContext, useContext, useState,useEffect } from "react";
import { api } from '../service/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [filtro, setFilto] = useState("");

    async function signIn({email, password}) {
        try {
            const response = await api.post("/session", { email, password });
            const { user, token } = response.data;
            localStorage.setItem("@tetsumovies:user", JSON.stringify(user));
            localStorage.setItem("@tetsumovies:token", token);

            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({user, token});

        } catch(error) {

            if (error.response) {
                alert(error.response.data.message);
            }else {
                alert("Unable to enter.");
            }
        }
        
    }

    function signOut(){
        localStorage.removeItem("@tetsumovies:token");
        localStorage.removeItem("@tetsumovies:user");
        setData({});
    }

    async function updateProfile({user, avatarFile}) {

        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);
            const response = await api.patch("/users/avatar", fileUploadForm);
            user.avatar = response.data.avatar;
        }

        try {
            await api.put("/users", user);
            localStorage.setItem("@tetsumovies:user", JSON.stringify(user));
            setData({user, token: data.token});
            alert("Profile updated successfully!");
        }catch(error) {
            if (error.response){
                alert(error.response.data.message);
            }else {
                alert("Unable to update profile")
            }
        }
    }

    useEffect(() =>{
        const token = localStorage.getItem("@tetsumovies:token");
        const user = localStorage.getItem("@tetsumovies:user");

        if(token && user) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[]);

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, filtro, signOut, updateProfile, setFilto }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }