import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { createStyles, makeStyles } from "@mui/styles";

const top100Films = [
	{ label: "Operations", value: "operations" },
	{ label: "Maintainence", value: "maintainence" },
	{ label: "Environmental", value: "environmental" },
	{ label: "Supply Chain Management", value: "supplychainmanagement" },
	{ label: "IT", value: "it" },
	{ label: "Finance", value: "finance" },
	{ label: "Marketing", value: "marketing" },
	{ label: "Security", value: "security" },
	{ label: "AI Digital Factory", value: "aidigitalfactory" },
];

// const useStyles = makeStyles(({
// 	option: {
// 		"&:hover": {
// 			backgroundColor: "cyan !important",
// 		},
// 	},
// }));

// const useStyles = makeStyles(() =>
// 	createStyles({
// 		option: {
// 			"&:hover": {
// 				backgroundColor: "cyan !important",
// 			},
// 		},
// 	})
// );

const ProfileDetails = () => {
	const [state, setState] = React.useState({
		firstName: "",
		lastName: "",
		role: "",
		department: "",
		email: "",
		// password: "",
		// cpassword: "",
	});
	const navigate = useNavigate();

	const submitRequest = (data) => {
		axios
			.post(`http://192.168.29.88:8080/v1/api/sign-up`, data)
			.then((res) => {
				console.log(res);
				navigate("/overview");
			})
			.catch((e) => console.log(e));
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				background: "linear-gradient(25deg, #676b6f 0%, #ffffff 100%)",
			}}
		>
			<h1>Provide your details</h1>
			<p>
				The details provided in this section will be used to create access to
				the project portal.
			</p>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				sx={{
					width: "60%",
					margin: "10px auto",
					backgroundColor: "white",
					borderRadius: "10px",
					boxShadow: "0 0 8px gray",
					padding: "100px",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						margin: "0 auto",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<TextField
						sx={{ width: "50%", margin: "5px" }}
						id="outlined-basic"
						label="First Name"
						variant="outlined"
						value={state.firstName}
						required="true"
						onChange={(e) => setState({ ...state, firstName: e.target.value })}
					/>
					<TextField
						sx={{ width: "50%", margin: "5px" }}
						id="outlined-basic"
						label="Last Name"
						variant="outlined"
						value={state.lastName}
						required="true"
						onChange={(e) => setState({ ...state, lastName: e.target.value })}
					/>
				</Box>
				<TextField
					sx={{ width: "100%", margin: "5px" }}
					id="outlined-basic"
					label="Your Role"
					variant="outlined"
					value={state.role}
					onChange={(e) => setState({ ...state, role: e.target.value })}
				/>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={top100Films}
					sx={{ width: "100%", margin: "5px" }}
					// renderOption={(props, option) => {
					// 	const { title, color } = option;
					// 	return (
					// 		<span {...props} style={{ backgroundColor: color }}>
					// 			{title}
					// 		</span>
					// 	);
					// }}
					onChange={(e, v) => {
						console.log(v.value);
						setState({ ...state, department: v.value });
					}}
					renderInput={(params) => <TextField {...params} label="Department" />}
					onInputChange={(event, newInputValue) => {
						// console.log(newInputValue, event);
					}}
				/>
				<TextField
					sx={{ width: "100%", margin: "5px" }}
					id="outlined-basic"
					label="Your Email"
					variant="outlined"
					value={state.email}
					autoComplete="off"
					onChange={(e) => setState({ ...state, email: e.target.value })}
				/>
				{/* <TextField
					sx={{ width: "100%", margin: "5px" }}
					id="outlined-basic"
					label="Password"
					type="password"
					variant="outlined"
					value={state.password}
					onChange={(e) => setState({ ...state, password: e.target.value })}
				/>
				<TextField
					sx={{ width: "100%", margin: "5px" }}
					id="outlined-basic"
					label="Confirm Password"
					type="password"
					variant="outlined"
					value={state.cpassword}
					onChange={(e) => setState({ ...state, cpassword: e.target.value })}
				/> */}
				<Button
					variant="contained"
					color="success"
					sx={{ marginTop: "10px", borderRadius: "20px" }}
					onClick={() => {
						console.log({ state });
						submitRequest(state);
						setState({
							firstName: "",
							lastName: "",
							role: "",
							dept: "",
							email: "",
						});
					}}
				>
					Continue to Payment
				</Button>
			</Box>
			<Box sx={{ height: "100px" }}></Box>
		</div>
	);
};

export default ProfileDetails;
