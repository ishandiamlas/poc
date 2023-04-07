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
	Autocomplete,
} from "@mui/material";

const top100Films = [
	{ label: "User 1", year: 1994 },
	{ label: "User 2", year: 1972 },
	{ label: "User 3", year: 1974 },
	{ label: "User 4", year: 2008 },
	{ label: "User 5", year: 1993 },
	{ label: "User 6", year: 1994 },
];

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
		deployment: "",
		development: "",
		hypothesis: "",
		totalWeeks: "",
		impact: "",
		todo1: "",
		todo2: "",
		todo3: "",
		todo4: "",
		inProgress1: "",
		inProgress2: "",
		inProgress3: "",
		inProgress4: "",
		highPerformer: "",
		mostSoughtAfter: "",
		tripleGenerated: "",
		okr1: "",
		okr2: "",
		okr3: "",
		okr4: "",
		okr5: "",
		okr6: "",
		devDeliveryLifeCycle: "",
		eventText: "",
		nameOfLead: "",
		currentSprint: "",
		sprintGoal: "",
		sprintTasks: "",
	});

	const [count, setCount] = React.useState(1);

	return (
		<div
			style={{
				background: "linear-gradient(45deg, #096ee1 0%, #6fd388 100%)",
				marginTop: "0px",
			}}
		>
			{/* <h1>Product Form. Step {count} of 4</h1> */}
			<Box sx={{}}>
				{/* {count === 1 && <h3>Submit your AI product for Data Visualisation</h3>} */}
				{count === 1 && (
					<FormControl
						sx={{
							width: "60%",
							padding: "50px",
							boxShadow: "0 0 6px lightgray",
							background: "#fefefe",
							marginTop: "100px",
							borderRadius: "10px",
						}}
					>
						<h2>Submit your AI product for Data Visualisation</h2>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: "10px",
							}}
						>
							{/* <FormLabel> */}
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Product"
								fullWidth
								size="small"
								variant="outlined"
								value={state.product}
								onChange={(e) =>
									setState({ ...state, product: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Product Name"
								variant="outlined"
								value={state.productName}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, productName: e.target.value })
								}
							/>
							<p>Stage</p>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Ideation"
								variant="outlined"
								value={state.ideation}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, ideation: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Explanation"
								variant="outlined"
								value={state.explanation}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, explanation: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Development"
								variant="outlined"
								value={state.development}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, development: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Deploypment"
								variant="outlined"
								value={state.deployment}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, deployment: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Total Weeks"
								variant="outlined"
								value={state.totalWeeks}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, totalWeeks: e.target.value })
								}
							/>
							<Autocomplete
								disablePortal
								id="combo-box-demo"
								options={top100Films}
								sx={{ margin: "15px" }}
								fullWidth
								size="small"
								renderInput={(params) => (
									<TextField {...params} label="User" fullWidth size="small" />
								)}
								onInputChange={(event, newInputValue) => {
									console.log(newInputValue, event);
								}}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Problem Description"
								multiline="true"
								rows={5}
								variant="outlined"
								value={state.problemDescription}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, problemDescription: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="MVP Hypothesis"
								variant="outlined"
								multiline
								rows={4}
								value={state.hypothesis}
								fullWidth
								size="small"
								onChange={(e) =>
									setState({ ...state, hypothesis: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Impact"
								variant="outlined"
								multiline
								rows={4}
								value={state.impact}
								fullWidth
								size="small"
								onChange={(e) => setState({ ...state, impact: e.target.value })}
							/>
							<Input type="file" />
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Current Sprint"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.currentSprint}
								onChange={(e) =>
									setState({ ...state, currentSprint: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Sprint Goal"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.sprintGoal}
								onChange={(e) =>
									setState({ ...state, sprintGoal: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Sprint Tasks"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.sprintTasks}
								onChange={(e) =>
									setState({ ...state, sprintTasks: e.target.value })
								}
							/>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "20px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									setCount((prevCount) => prevCount + 1);
								}}
							>
								Next
							</Button>
						</Box>
					</FormControl>
				)}

				{count === 2 && (
					<FormControl
						sx={{
							width: "60%",
							padding: "50px",
							boxShadow: "0 0 6px lightgray",
							background: "#fefefe",
							marginTop: "100px",
							borderRadius: "10px",
						}}
					>
						<h2>Submit your AI product for Data Visualisation</h2>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: "10px",
							}}
						>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="To Do 1"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.todo1}
								onChange={(e) => setState({ ...state, todo1: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="To Do 2"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.todo2}
								onChange={(e) => setState({ ...state, todo2: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="To Do 3"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.todo3}
								onChange={(e) => setState({ ...state, todo3: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="To Do 4"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.todo4}
								onChange={(e) => setState({ ...state, todo4: e.target.value })}
							/>
							<span>
								<p>Sprint Tasks</p>
							</span>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="In Progress 1"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.inProgress1}
								onChange={(e) =>
									setState({ ...state, inProgress1: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="In Progress 2"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.inProgress2}
								onChange={(e) =>
									setState({ ...state, inProgress2: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="In Progress 3"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.inProgress3}
								onChange={(e) =>
									setState({ ...state, inProgress3: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="In Progress 4"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.inProgress4}
								onChange={(e) =>
									setState({ ...state, inProgress4: e.target.value })
								}
							/>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "20px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									console.log({ count });
									setCount((prevCount) => prevCount - 1);
								}}
							>
								Back
							</Button>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "20px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									setCount((prevCount) => prevCount + 1);
								}}
							>
								Next
							</Button>
						</Box>
					</FormControl>
				)}

				{count === 3 && (
					<FormControl
						sx={{
							width: "60%",
							padding: "50px",
							boxShadow: "0 0 6px lightgray",
							background: "#fefefe",
							marginTop: "100px",
							borderRadius: "10px",
						}}
					>
						<h2>Submit your AI product for Data Visualisation</h2>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: "10px",
							}}
						>
							{/* <FormLabel> */}
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Become a Higher Performer"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.highPerformer}
								onChange={(e) =>
									setState({ ...state, highPerformer: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Most Sought After"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.mostSoughtAfter}
								onChange={(e) =>
									setState({ ...state, mostSoughtAfter: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Triple Generated"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.tripleGenerated}
								onChange={(e) =>
									setState({ ...state, tripleGenerated: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 1"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr1}
								onChange={(e) => setState({ ...state, okr1: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 2"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr2}
								onChange={(e) => setState({ ...state, okr2: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 3"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr3}
								onChange={(e) => setState({ ...state, okr3: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 4"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr4}
								onChange={(e) => setState({ ...state, okr4: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 5"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr5}
								onChange={(e) => setState({ ...state, okr5: e.target.value })}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="OKR 6"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.okr6}
								onChange={(e) => setState({ ...state, okr6: e.target.value })}
							/>
							<span>
								<p>Sprint Tasks</p>
							</span>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									setCount((prevCount) => prevCount - 1);
								}}
							>
								Back
							</Button>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									setCount((prevCount) => prevCount + 1);
								}}
							>
								Next
							</Button>
						</Box>
					</FormControl>
				)}

				{count === 4 && (
					<FormControl
						sx={{
							width: "60%",
							padding: "50px",
							boxShadow: "0 0 6px lightgray",
							background: "#fefefe",
							marginTop: "100px",
							borderRadius: "10px",
						}}
					>
						<h2>Submit your AI product for Data Visualisation</h2>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								margin: "0 auto",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: "10px",
							}}
						>
							{/* <FormLabel> */}
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Dev Delivery Life Cycle"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.devDeliveryLifeCycle}
								onChange={(e) =>
									setState({ ...state, devDeliveryLifeCycle: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Event text"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.eventText}
								onChange={(e) =>
									setState({ ...state, eventText: e.target.value })
								}
							/>
							<TextField
								sx={{ margin: "15px" }}
								id="outlined-basic"
								label="Name of Lead"
								fullWidth
								size="small"
								variant="outlined"
								multiline
								rows={4}
								value={state.nameOfLead}
								onChange={(e) =>
									setState({ ...state, nameOfLead: e.target.value })
								}
							/>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<Button
								variant="contained"
								color="success"
								sx={{
									marginTop: "10px",
									borderRadius: "20px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									setCount((prevCount) => prevCount - 1);
								}}
							>
								Back
							</Button>
							<Button
								variant="contained"
								color="primary"
								sx={{
									marginTop: "10px",
									borderRadius: "20px",
									borderRadius: "5px",
									padding: "15px 30px",
								}}
								onClick={() => {
									console.log("Submitting");
								}}
							>
								Submit
							</Button>
						</Box>
					</FormControl>
				)}
			</Box>
			<Box sx={{ marginTop: "30px", height: "100px" }}></Box>
		</div>
	);
};

export default ProductForm;
