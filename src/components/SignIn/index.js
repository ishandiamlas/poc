import React, { useState } from "react";
import SignInImage from "../../assets/SignIn.png";
import "./index.css";
import { Button, TextField } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import CircleAccess from "../CircleAccess";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const auth = getAuth();

	const signUp = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log({ userCredential });
				navigate("/overview");
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

	return (
		<div className="signup__outer__wrapper">
			<div className="signup__inner__wrapper">
				<div className="signup__form__wrapper">
					<h1>Welcome</h1>
					{/* <div className="signup_email">
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
					</div> */}
					{/* <div className="signup_buttons">
						<Button variant="contained" onClick={() => signUp()}>
							Login
						</Button>
						<Button variant="outlined" onClick={() => navigate("/signup")}>
							Sign Up
						</Button>
					</div> */}
					<div style={{ margin: "20px auto" }}>
						<CircleAccess />
					</div>
				</div>
				<div
					className="signup__image__wrapper"
					style={{ backgroundImage: `url(${SignInImage})` }}
				>
					{/* <img src={SignUpImage} /> */}
				</div>
			</div>
		</div>
	);
};

export default SignUp;
