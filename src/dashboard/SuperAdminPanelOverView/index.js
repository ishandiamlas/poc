import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, email, image, department, fat, carbs, protein) {
	return { id, name, email, image, department, fat, carbs, protein };
}

const rows = [
	createData(
		12345,
		"Frozen yoghurt",
		"test@do.us",
		"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1678101412~exp=1678102012~hmac=8a7312576966f5e90d086ca16af9297e72d755a999dee900b955b89a5584c8cf",
		"Safety",
		6.0,
		24,
		4.0
	),
	createData(
		12345,
		"Ice cream sandwich",
		"test@do.us",
		"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1678101412~exp=1678102012~hmac=8a7312576966f5e90d086ca16af9297e72d755a999dee900b955b89a5584c8cf",
		"Engineering",
		9.0,
		37,
		4.3
	),
	createData(
		12345,
		"Eclair",
		"test@do.us",
		"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1678101412~exp=1678102012~hmac=8a7312576966f5e90d086ca16af9297e72d755a999dee900b955b89a5584c8cf",
		"Finance",
		16.0,
		24,
		6.0
	),
	createData(
		12345,
		"Cupcake",
		"test@do.us",
		"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1678101412~exp=1678102012~hmac=8a7312576966f5e90d086ca16af9297e72d755a999dee900b955b89a5584c8cf",
		"Marketing",
		3.7,
		67,
		4.3
	),
	createData(
		12345,
		"Gingerbread",
		"test@do.us",
		"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1678101412~exp=1678102012~hmac=8a7312576966f5e90d086ca16af9297e72d755a999dee900b955b89a5584c8cf",
		"HR",
		16.0,
		49,
		3.9
	),
];

const OverView = (props) => {
	return (
		<div style={{ backgroundColor: "#F5F5F5" }}>
			{/* <h1>OverView</h1> */}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell align="left">Status</TableCell>
							<TableCell align="left">Department</TableCell>
							<TableCell align="left">Last Login</TableCell>
							<TableCell align="left">Roles</TableCell>
							<TableCell align="left">Login Location</TableCell>
							<TableCell align="left">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell align="left">{row.id}</TableCell>
								<TableCell scope="column">
									<div style={{ display: "flex", alignItems: "center" }}>
										<img
											src={row.image}
											style={{
												width: "30px",
												height: "30px",
												borderRadius: "50%",
											}}
										/>
										<span
											style={{
												display: "flex",
												flexDirection: "column",
												// margin: "2px",
											}}
										>
											<p style={{ margin: "2px 2px 2px auto" }}>{row.email}</p>
											<p style={{ margin: "2px 2px 2px auto" }}>{row.name}</p>
										</span>
									</div>
								</TableCell>
								<TableCell align="left">{row.department}</TableCell>
								<TableCell align="left">{row.fat}</TableCell>
								<TableCell align="left">{row.carbs}</TableCell>
								<TableCell align="left">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default OverView;
