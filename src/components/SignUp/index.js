import React, { useEffect, useState } from "react";
import SignUpImage from "../../assets/SignUp.png";
import "./index.css";
import { Button, TextField } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import CircleAccess from "../CircleAccess";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [circleButton, setCircleButton] = useState("");
	const navigate = useNavigate();

	const auth = getAuth();

	// const circleButton = async  () => {

	// 	console.log(res)
	// 	let res = await window.Circle.getLoginButton();
	// 	t
	// 	return res
	// }

	useEffect(() => {
		let res = window.Circle.getLoginButton();
		setCircleButton(res);
	});

	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log({ userCredential });
				navigate("/signin");
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
		console.log({ email, password });
		setEmail("");
		setPassword("");
	};

	function circleButtonClicked() {
		callJsLoginBtn();
	}

	async function callJsLoginBtn() {
		try {
			const jsLogin = await window.Circle.tryToLoginWithCircle(
				"https://circleauth.gocircle.ai/login/appNixWTvaUWuatSWAMqtB5kJWDMtFVeHmvc"
			);
		} catch (e) {
			alert("error found when trying to login with Circle");
		}
	}

	return (
		<div className="signup__outer__wrapper">
			<div className="signup__inner__wrapper">
				<div className="signup__form__wrapper">
					<h1>Welcome</h1>
					<div className="signup_email">
						<TextField
							name="email"
							placeholder="E-mail Address"
							value={email}
							variant="outlined"
							size="small"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="signup_password">
						<TextField
							name="password"
							value={password}
							type="password"
							placeholder="Password"
							variant="outlined"
							size="small"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="signup_buttons">
						<Button variant="contained" onClick={() => signUp()}>
							Sign Up
						</Button>
						<Button variant="outlined" onClick={() => navigate("/signin")}>
							Login
						</Button>
					</div>
					<div style={{ margin: "20px auto" }}>
						<CircleAccess />
					</div>
				</div>
				<div
					className="signup__image__wrapper"
					style={{ backgroundImage: `url(${SignUpImage})` }}
				></div>
			</div>
		</div>
	);
};

export default SignUp;
