import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        setLoading(true);
        navigate('/signup');
    };

    const handleLogin = () => {
        setLoading(true);
        navigate('/login');
    };

    return (
        <div className="flex sm:items-center items-end justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-4 sm:bg-white sm:rounded-lg sm:shadow-md mb-7 sm:mb-0">
                <h1 className="text-2xl font-bold sm:text-center text-black mb-3">
                    Welcome to PopX
                </h1>

                <p className="sm:text-center text-gray-600 mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <Button
                    className={`w-full py-6 sm:text-lg ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'}`}
                    onClick={handleCreateAccount}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Create Account'}
                </Button>

                <Button
                    className="w-full py-6 sm:text-lg mt-4 text-black bg-indigo-200 hover:bg-indigo-300 cursor-pointer"
                    onClick={handleLogin}
                >
                    Already Registered? Login
                </Button>
            </div>
        </div>
    )
}

export default Home
