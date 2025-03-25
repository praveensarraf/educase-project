import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            console.log(formData);
            setLoading(false);
            navigate("/profile");
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md p-6 sm:bg-white sm:rounded-lg sm:shadow-lg">
                <h1 className="text-2xl font-bold sm:text-center text-gray-900 mb-6">
                    Sign in to your PopX account
                </h1>
                <p className="text-gray-500 text-sm sm:text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer block w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 -top-2 text-indigo-500 text-xs transition-all sm:bg-white bg-gray-50 px-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:font-semibold duration-300"
                        >
                            Email Address<span className="text-red-500">*</span>
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer block w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 -top-2 text-indigo-500 text-xs transition-all sm:bg-white bg-gray-50 px-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:font-semibold duration-300"
                        >
                            Password<span className="text-red-500">*</span>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-indigo-600 text-white text-lg py-6 mt-5 rounded-md hover:bg-indigo-700 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Wait..." : "Login"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
