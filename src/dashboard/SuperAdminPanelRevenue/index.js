import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";

const labels = ["January", "February", "March", "April", "May", "June"];

const Revenue = (props) => {
	const [open, setOpen] = React.useState(false);
	// const [state, setState] = React.useState({})
	const ref = React.useRef();

	const data = {
		labels: labels,
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [0, 10, 5, 2, 20, 30, 45],
			},
		],
	};

	const data2 = {
		labels: labels,
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "blue",
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: "My Second dataset",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "green",
				data: [0, 20, 35, 12, 20, 3, 15],
			},
		],
	};

	return (
		<div style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
			{/* <h1>Revenue</h1> */}
			<div style={{ width: "50%", backgroundColor: "aqua" }}>
				<h2>Left Part</h2>
				<div style={{ padding: "20px", backgroundColor: "yellow" }}>
					<div style={{ display: "flex", padding: "20px" }}>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "pink" }}
						>
							<h3>Box 1</h3>
							<Button onClick={(e) => setOpen(!open)}>
								View {open ? "Less" : "More"}
							</Button>
							{open && (
								<div style={{ width: "auto" }}>
									<Line ref={ref} datasetIdKey="id" data={data} />
								</div>
							)}
						</div>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "red" }}
						>
							<h3>Box 2</h3>
							{open && <Line ref={ref} datasetIdKey="id" data={data} />}
						</div>
					</div>
				</div>
				<div style={{ padding: "20px", backgroundColor: "gray" }}>
					<div style={{ display: "flex", padding: "20px" }}>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "pink" }}
						>
							<h3>Box 3</h3>
							<Line ref={ref} datasetIdKey="id" data={data2} />
						</div>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "red" }}
						>
							<h3>Box 4</h3>
						</div>
					</div>
				</div>
			</div>
			<div style={{ width: "50%", backgroundColor: "fuchsia" }}>
				<h2>Right Part</h2>
				<div style={{ padding: "20px", backgroundColor: "yellow" }}>
					<div style={{ display: "flex", padding: "20px" }}>
						<div
							style={{
								margin: "20px auto",
								width: "80%",
								backgroundColor: "pink",
							}}
						>
							<h3>Box 1</h3>
							<Button onClick={(e) => setOpen(!open)}>
								View {open ? "Less" : "More"}
							</Button>
							{open && (
								<div style={{ width: "auto" }}>
									<Line ref={ref} datasetIdKey="id" data={data} />
								</div>
							)}
						</div>
					</div>
				</div>
				<div style={{ padding: "20px", backgroundColor: "gray" }}>
					<div style={{ display: "flex", padding: "20px" }}>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "pink" }}
						>
							<h3>Box 3</h3>
							<Line ref={ref} datasetIdKey="id" data={data2} />
						</div>
						<div
							style={{ margin: "20px", width: "50%", backgroundColor: "red" }}
						>
							<h3>Box 4</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Revenue;
