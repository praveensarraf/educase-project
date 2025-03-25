import React from 'react'
import { Camera } from "lucide-react";

const Profile = () => {
    return (
        <div className='flex sm:items-center items-start justify-center min-h-screen bg-gray-50'>
            <div className="w-full max-w-lg sm:rounded-lg sm:shadow-lg">
                <div className='bg-white w-full p-4 sm:rounded-t-lg'>
                    <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
                </div>

                <div className='p-4 bg-gray-100 sm:rounded-b-lg sm:border-none border-b-2 border-dashed border-gray-300'>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="relative w-16 h-16">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-indigo-600 p-1 rounded-full cursor-pointer">
                                <Camera className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-900 font-semibold">Praveen Kumar</p>
                            <a href='mailto:praveen96650@gmail.com' target='_blank' className="text-gray-500 text-sm no-underline">praveen96650@gmail.com</a>
                        </div>
                    </div>

                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
