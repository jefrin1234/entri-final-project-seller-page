import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export const AuthSeller = ({ children }) => {

    const navigate = useNavigate();
   
    

    const loggedIn = useSelector((state) => state.user.loggedIn);

    useEffect(() => {
        if (!loggedIn) {
            navigate('/');
        }
    }, [loggedIn, navigate]); 




    return loggedIn ? children : null;
};
