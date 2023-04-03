import React, { useEffect, useState } from "react";
import SignUpImage from "../../assets/SignUp.png";
import { Button} from "@mui/material";

const CircleAccess = () => {
	const [circleButton, setCircleButton] = useState("")

	useEffect(() => {
		let res = window.Circle.getLoginButton();
		setCircleButton(res);
	})



	const circleButtonClicked = () => {
		callJsLoginBtn();
	}

	const callJsLoginBtn = async () => {
		try {
			const jsLogin = await window.Circle.tryToLoginWithCircle(
				"https://circleauth.gocircle.ai/login/appNixWTvaUWuatSWAMqtB5kJWDMtFVeHmvc"
			);
		} catch (e) {
			alert("error found when trying to login with Circle");
		}
	}

	return (
		

            <Button variant="outlined" className="circleaccess-button circleaccess-button-light" onClick={() => circleButtonClicked()}>
                <span className="circleaccess-icon-wrapper">
                    <img className="circleaccess-icon" alt="" style={{width: "22px"}} src="https://console.gocircle.ai/dashboard/img/circle_logo.png"/>
                </span>
                <span className="circleaccess-text circleaccess-text-long">Login with Circle </span>
                <span className="circleaccess-text circleaccess-text-short">Login with Circle</span>
            </Button>
	
 );
    };
    

export default CircleAccess;
