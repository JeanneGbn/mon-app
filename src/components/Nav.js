import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/users/userSlice";

export const Nav = () => {
   
   const hasToken = useSelector((state) => state.user.token);
   const userName = useSelector((state) => state.user.userInfo.userName);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleUserLogout = (e) => {
     e.preventDefault();
     localStorage.removeItem("token");
     dispatch(reset());
     navigate("/");
   } 

if(!hasToken){
   return (  
      <Link to="/login" className="main-nav-item">
      
      Sign In
      </Link>
  );
}
else{ 
      return <div>
      <Link to="/profile" className="main-nav-item"> 
        {userName}
      </Link>
      <Link to="/" onClick={handleUserLogout} className="main-nav-item">
        Sign Out
      </Link>
    </div>
    }  
}


