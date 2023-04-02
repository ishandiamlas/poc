import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SuperAdmilPanelOverView from "../SuperAdminPanelOverView";
import SuperAdmilPanelRevenue from "../SuperAdminPanelRevenue";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const SuperAdmilPanel = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			SuperAdmilPanel
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Overview" />
						<Tab label="Revenue" />
						<Tab label="Time" />
						<Tab label="Subscription" />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<SuperAdmilPanelOverView />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SuperAdmilPanelRevenue />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Time
				</TabPanel>
				<TabPanel value={value} index={2}>
					Subscription
				</TabPanel>
			</Box>
		</div>
	);
};

export default SuperAdmilPanel;
