import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OverView from "./dashboard/SuperAdminPanelOverView";
import SuperAdmilPanel from "./dashboard/SuperAdminPanel";
import ProfileDetails from "./components/ProfileDetails";
import ProductForm from "./components/ProductForm";
import CircleAccessReturn from "./components/CircleAccessReturn";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={SignUp} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/overview" element={<OverView />} />
					<Route path="/superadmin" element={<SuperAdmilPanel />} />
					<Route path="/profile-details" element={<ProfileDetails />} />
					<Route path="/product-form" element={<ProductForm />} />
					<Route path="/return/url" element={<CircleAccessReturn/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
