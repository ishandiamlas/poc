import React from "react";
import { FormLabel } from "@mui/material";
import { Box } from "@mui/material";
import {
	FormGroup,
	InputLabel,
	Input,
	FormHelperText,
	FormControl,
	TextField,
	Button,
} from "@mui/material";

const ProductForm = () => {
	const [state, setState] = React.useState({
		product: "",
		ideation: "",
		explanation: "",
		stage: "",
		role: "",
		dept: "",
		email: "",
		password: "",
		cpassword: "",
	});

	const [count, setCount] = React.useState(1);

	return (
		<div>
			<h1>Product Form. Step {count} of 4</h1>
			<Box>
				{/* <FormHelperText id="my-helper-text">
					We'll never share your email.
				</FormHelperText> */}
				{count === 1 && (
					<FormControl>
						{/* <InputLabel htmlFor="my-input">Email address</InputLabel>
					<Input id="my-input" aria-describedby="my-helper-text" /> */}
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<FormLabel>
								<TextField
									sx={{ margin: "5px" }}
									id="outlined-basic"
									label="First Name"
									variant="outlined"
									value={state.product}
									onChange={(e) =>
										setState({ ...state, product: e.target.value })
									}
								/>
							</FormLabel>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Last Name"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, lastName: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Stage"
								variant="outlined"
								value={state.lastName}
								onChange={(e) => setState({ ...state, stage: e.target.value })}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Ideation"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, ideation: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Explanation"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, explanation: e.target.value })
								}
							/>
						</Box>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							// onClick={() => {
							// 	console.log({ state });
							// 	setState({
							// 		firstName: "",
							// 		lastName: "",
							// 		role: "",
							// 		dept: "",
							// 		email: "",
							// 		password: "",
							// 		cpassword: "",
							// 	});
							// }}
						>
							Continue to Payment
						</Button>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							onClick={() => {
								console.log({ count });
								// setCount(count - 1);
								setCount((prevCount) => prevCount + 1);
							}}
						>
							Next
						</Button>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							onClick={() => {
								console.log({ count });
								setCount(count - 1);
							}}
							disabled={count === 1}
						>
							Back
						</Button>
					</FormControl>
				)}

				{count === 2 ? (
					<FormControl>
						{/* <InputLabel htmlFor="my-input">Email address</InputLabel>
					<Input id="my-input" aria-describedby="my-helper-text" /> */}
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<FormLabel>
								<TextField
									sx={{ margin: "5px" }}
									id="outlined-basic"
									label="First Name"
									variant="outlined"
									value={state.product}
									onChange={(e) =>
										setState({ ...state, product: e.target.value })
									}
								/>
							</FormLabel>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Last Name"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, lastName: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Stage"
								variant="outlined"
								value={state.lastName}
								onChange={(e) => setState({ ...state, stage: e.target.value })}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Ideation"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, ideation: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "5px" }}
								id="outlined-basic"
								label="Explanation"
								variant="outlined"
								value={state.lastName}
								onChange={(e) =>
									setState({ ...state, explanation: e.target.value })
								}
							/>
						</Box>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							// onClick={() => {
							// 	console.log({ state });
							// 	setState({
							// 		firstName: "",
							// 		lastName: "",
							// 		role: "",
							// 		dept: "",
							// 		email: "",
							// 		password: "",
							// 		cpassword: "",
							// 	});
							// }}
						>
							Continue to Payment
						</Button>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							onClick={() => {
								console.log({ count });
								setCount(count - 1);
							}}
						>
							Next
						</Button>
						<Button
							variant="contained"
							color="success"
							sx={{ marginTop: "10px", borderRadius: "20px" }}
							onClick={() => {
								console.log({ count });
								setCount(count + 1);
							}}
						>
							Back
						</Button>
					</FormControl>
				) : null}
			</Box>
		</div>
	);
};

export default ProductForm;
