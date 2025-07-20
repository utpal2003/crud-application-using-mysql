import axios from 'axios';
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addstudent = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            return alert("Please fill all the fields");
        }

        axios.post('http://localhost:8000/addstudent', { name, email })
            .then(res => {
                console.log(res)
                navigate('/');
            })
            .catch(err => console.log(err))
        console.log(name, email)
        setemail('')
        setname('')

    }
    return (
        <div className="min-h-screen flex items-center justify-center  p-4 bg-gradient-to-r from-green-400 via-purple-500 to-blue-500">
            <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6 flex flex-col">
                <div className='flex justify-center align-center'>
                    <h2 className="my-2 font-bold text-xl bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Add a new student
                    </h2>

                </div>

                <form onSubmit={handleSubmit}>
                    <div className="my-2">
                        <label className="block text-md font-semibold text-gray-700 mb-1">
                            Enter the student name :
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Student name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className=' mt-4'>
                        <label className='block text-md font-semibold'>Enter the Email :</label>
                        <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ' placeholder='example123@gmail.com'
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />

                    </div>
                    <div className='flex justify-center align-center'>
                        <button className='bg-green-500 mt-6 rounded-md w-20 h-8 hover:bg-green-800 hover:text-gray-200' type='submit'>Submit</button>
                    </div>

                </form>

            </div>


        </div>
    )
}

export default Addstudent