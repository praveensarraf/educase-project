import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "yes",
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            console.log(formData);
            setLoading(false);
            navigate('/login');
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md p-6 sm:bg-white sm:rounded-lg sm:shadow-lg">
                <h1 className="text-2xl font-bold sm:text-center text-gray-900 mb-6">Create your PopX account</h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="relative">
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer block w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="fullName"
                            className="absolute left-3 -top-2 text-indigo-500 text-xs transition-all sm:bg-white bg-gray-50 px-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:font-semibold duration-300"
                        >
                            Full Name<span className="text-red-500">*</span>
                        </label>
                    </div>


                    <div className="relative">
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer block w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="phoneNumber"
                            className="absolute left-3 -top-2 text-indigo-500 text-xs transition-all sm:bg-white bg-gray-50 px-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:font-semibold duration-300"
                        >
                            Phone number<span className="text-red-500">*</span>
                        </label>
                    </div>


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
                            Email address<span className="text-red-500">*</span>
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


                    <div className="relative">
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer block w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="companyName"
                            className="absolute left-3 -top-2 text-indigo-500 text-xs transition-all sm:bg-white bg-gray-50 px-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:font-semibold duration-300"
                        >
                            Company name
                        </label>
                    </div>


                    <div className="mt-4">
                        <p className="text-gray-700 text-sm font-medium mb-2">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </p>
                        <RadioGroup
                            defaultValue={formData.isAgency}
                            onValueChange={(value) => setFormData({ ...formData, isAgency: value })}
                            className="flex gap-6"
                        >

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="yes"
                                    id="yes"
                                    className="border-gray-400 text-indigo-600 data-[state=checked]:border-indigo-600 data-[state=checked]:ring-1 data-[state=checked]:ring-indigo-500"
                                />
                                <label htmlFor="yes" className="text-gray-900 cursor-pointer">
                                    Yes
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="no"
                                    id="no"
                                    className="border-gray-400 text-indigo-600 data-[state=checked]:border-indigo-600 data-[state=checked]:ring-1 data-[state=checked]:ring-indigo-500"
                                />
                                <label htmlFor="no" className="text-gray-900 cursor-pointer">
                                    No
                                </label>
                            </div>
                        </RadioGroup>
                    </div>


                    <Button
                        type="submit"
                        className="w-full bg-indigo-600 text-white text-lg py-6 mt-5 rounded-md hover:bg-indigo-700 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
