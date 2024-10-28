import { Link } from "react-router-dom";
import welcome from "../../assets/images/welcome.png";
import { Button } from "@/components/ui/button";

const Register = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white border-2 border-white shadow-2xl rounded-3xl overflow-hidden flex flex-col xl:flex-row">
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Create Account</h1>
                    <form className="w-full max-w-md">
                        <input type="text" placeholder="Username" className="w-full p-3 mb-4 border rounded" />
                        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
                        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" />
                        <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-4 border rounded" />
                        <Button className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Register</Button>
                        <p className="text-sm text-gray-500 mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                    </form>
                </div>
                <div className="flex-1 p-8 flex items-center justify-center">
                    <img src={welcome} alt="Welcome" className="max-w-full max-h-full object-contain"/>
                </div>
            </div>
        </div>
    )
}

export default Register;
