import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import SignUpImage from "../../assets/SignUp.png";
import { Button } from "@mui/material";
//import CircleAccess from 'circle-access'

const CircleAccessReturn = () => {
	const [searchParams] = useSearchParams();
    const navigate = useNavigate("");

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
    if(currentParams.userID != null) {
        // TBD we have to verify email
        // Make network call to auth service in Go with provider request paramertes and verify email
        debugger
        navigate("/overview")
    }
  }, [searchParams]);


	return (
		<>
        <div>
          Circle Access Return Url
        </div>
        </>
	);
};

export default CircleAccessReturn;
