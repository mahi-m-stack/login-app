import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        const data = {
            email: email,
            password: password
        };

        try {
            const res = await api.post("/login", data);
            console.log("Logined:", res.data);
            alert("Login Successful!");
        } catch (err) {
            console.error("Login error:", err);
            alert("Login failed");
        }
    }

    const navigate = useNavigate();

    return (
        <div className='flex flex-col overflow-hidden items-center min-h-screen min-w-screen justify-center'>
            <div className='mb-15'>
                <h1 className='text-2xl font-bold'>Login Here</h1>
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
                    <input type="password" className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=> {setPassword(e.target.value)}} placeholder="Enter your Passoword" />
                </div>
            </div>
            <div className='max-w-sm w-full'>
                <button onClick={handleLogin} className='w-35 shadow-lg bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200'>Login</button>
                <div className='text-end -mt-8'>
                    <button>
                        <span onClick={() => navigate("/register")} className='text-sm text-gray-800 hover:text-blue-400 transition duration-100'>Don't have an account?</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login