import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const SignIn: React.FC = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignIn = async () => {

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const data = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        };

        try {
            const res = await api.post("/register", data);
            console.log("✅ Registered:", res.data);
            alert("Registration Successful!");
            navigate("/");
        } catch (err) {
            console.error("Register error:", err);
            alert("Registration failed");
        }

    }

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center min-h-screen min-w-screen justify-center'>
            <div className='mb-15'>
                <h1 className='text-2xl font-bold'>SignIn Here</h1>
            </div>
            <div className='mb-6 max-w-sm w-full'>
                <label className='block text-sm font-medium text-gray-700'>Username</label>
                <div className='relative'>
                    <i className='bi bi-person-fill text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3'></i>
                    <input type="email" className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" />
                </div>
            </div>
            <div className='mb-6 max-w-sm w-full'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <div className='relative'>
                    <i className='bi bi-envelope-fill text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3'></i>
                    <input type="email" className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=> {setEmail(e.target.value)}} placeholder="Enter your Email" />
                </div>
            </div>
            <div className='mb-6 max-w-sm w-full'>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <div className='relative'>
                    <i className='bi bi-person-fill-lock text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3'></i>
                    <input type="password" className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=> {setPassword(e.target.value)}} placeholder="Enter your Password" />
                </div>
            </div>
            <div className='mb-6 max-w-sm w-full'>
                <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                <div className='relative'>
                    <i className='bi bi-person-fill-lock text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3'></i>
                    <input type="password" className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=> {setConfirmPassword(e.target.value)}} placeholder="Enter your Password" />
                </div>
            </div>
            <div className='max-w-sm w-full'>
                <button  disabled={!username || !email || !password || !confirmPassword} onClick={handleSignIn} className='w-35 shadow-lg bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200'>SignIn</button>
                <div className='text-end -mt-8'>
                    <button>
                        <span onClick={() => navigate("/")} className='text-sm text-gray-800 hover:text-blue-400 transition duration-100'>Already have an account?</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;