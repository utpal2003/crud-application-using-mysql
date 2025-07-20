import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosPersonAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';



const Studentlist = () => {
    const [students, setstudents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => setstudents(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center  p-4 bg-gradient-to-r from-green-400 via-purple-500 to-blue-500">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Student List</h2>
                    <Link to="/addstudent" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex justify-center items-center space-x-2">
                        <IoIosPersonAdd size={20} /><span>Add</span>
                    </Link>
                </div>

                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr className="hover:bg-gray-100" key={index}>
                                <td className="px-4 py-2 border">{student.Name}</td>
                                <td className="px-4 py-2 border">{student.Email}</td>
                                <td className="px-4 py-2 border">
                                    <div className="flex justify-center items-center space-x-2">
                                        <button><FaRegEdit className='text-green-500' size={20} /></button>
                                        <button><MdDelete className='text-red-600' size={20} /></button>
                                    </div>
                                </td>

                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Studentlist;
