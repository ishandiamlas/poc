import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
import OverView from "../SuperAdminPanelOverView";

const labels = ["January", "February", "March", "April", "May", "June"];

const Revenue = (props) => {
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const [open3, setOpen3] = React.useState(false);
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
		<div>
			<div style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
				<div style={{ width: "50%", backgroundColor: "#E6E6E6" }}>
					<div style={{ padding: "20px" }}>
						<div style={{ display: "flex", padding: "20px" }}>
							<div
								style={{
									margin: "20px",
									width: "50%",
									borderRadius: "5px",
									background: "white",
									boxShadow: "0 0 5px lightgray",
								}}
							>
								<h3>$ 32,211</h3>
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
								style={{
									margin: "20px",
									width: "50%",
									borderRadius: "5px",
									background: "white",
									boxShadow: "0 0 5px lightgray",
								}}
							>
								<h3>$ 112,211</h3>
								{open && <Line ref={ref} datasetIdKey="id" data={data} />}
							</div>
						</div>
					</div>
					<div style={{ padding: "20px" }}>
						<div style={{ display: "flex", padding: "20px" }}>
							<div
								style={{
									margin: "20px",
									width: "50%",
									backgroundColor: "white",
									borderRadius: "5px",
									boxShadow: "0 0 5px lightgray",
								}}
							>
								<h3>$ 82,419</h3>
								<Button onClick={(e) => setOpen2(!open2)}>
									View {open2 ? "Less" : "More"}
								</Button>
								{open2 && (
									<div style={{ width: "auto" }}>
										<Line ref={ref} datasetIdKey="id" data={data} />
									</div>
								)}
								{/* <Line ref={ref} datasetIdKey="id" data={data2} /> */}
							</div>
							<div
								style={{
									margin: "20px",
									width: "50%",
									backgroundColor: "white",
									boxShadow: "0 0 5px lightgray",
									borderRadius: "5px",
								}}
							>
								<h3>$ 87,321</h3>
							</div>
						</div>
					</div>
				</div>
				<div style={{ width: "50%", backgroundColor: "#E6E6E6" }}>
					<div style={{ padding: "20px" }}>
						<div style={{ display: "flex", padding: "20px" }}>
							<div
								style={{
									margin: "20px auto",
									width: "80%",
									borderRadius: "5px",
									boxShadow: "0 0 5px lightgray",
									backgroundColor: "white",
								}}
							>
								<h3>$ 123,718</h3>
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
					<div style={{ padding: "20px" }}>
						<div style={{ display: "flex", padding: "20px" }}>
							<div
								style={{
									margin: "20px",
									width: "50%",
									borderRadius: "4px",
									background: "white",
									boxShadow: "0 0 4px lightgray",
								}}
							>
								<h3>$ 69,658</h3>
								<Button onClick={(e) => setOpen3(!open3)}>
									View {open3 ? "Less" : "More"}
								</Button>
								{open3 && (
									<div style={{ width: "auto" }}>
										<Line ref={ref} datasetIdKey="id" data={data} />
									</div>
								)}
								{/* <Line ref={ref} datasetIdKey="id" data={data2} /> */}
							</div>
							<div
								style={{
									margin: "20px",
									width: "50%",
									backgroundColor: "white",
									borderRadius: "5px",
									boxShadow: "0 0 5px lightgray",
								}}
							>
								<h3>$ 239,216</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<OverView />
		</div>
	);
};

export default Revenue;
