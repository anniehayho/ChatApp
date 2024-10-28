import { Link } from "react-router-dom";
import welcome from "../../assets/images/welcome.png";

const Login = () => {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4">
			<div className="w-full max-w-6xl bg-white border-2 border-white shadow-2xl rounded-3xl overflow-hidden flex flex-col xl:flex-row">
				<div className="flex-1 flex flex-col items-center justify-center p-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Welcome</h1>
					<form className="w-full max-w-md">
						<input type="text" placeholder="Username" className="w-full p-3 mb-4 border rounded" />
						<input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" />
						<button className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Login</button>
						<p className="text-sm text-gray-500 mt-4">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
						<p className="text-sm text-gray-500 mt-2">Forgot your password? <Link to="/forgot-password" className="text-blue-500 hover:underline">Reset Password</Link></p>
					</form>
				</div>
				<div className="flex-1 p-8 flex items-center justify-center">
					<img src={welcome} alt="Welcome" className="max-w-full max-h-full object-contain"/>
				</div>
			</div>
		</div>
	)
}

export default Login;
