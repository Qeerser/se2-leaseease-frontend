// pages/signup.tsx
import { useState } from 'react';
import type { NextPage } from 'next';
import { register } from '@/src/api/auth'
interface SignUpProps {
    setPage: (page: string) => void;
}

const SignUp: NextPage<SignUpProps> = ({ setPage }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('lessee');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here (e.g., API call)
        console.log({ name, surname, dob, email, password, accountType });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">

                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Sign up account</h2>
                    <p className="text-gray-600 mb-6 text-center">Enter your details to sign up your account</p>

                    <form onSubmit={handleSubmit} className='space-y-4 p-6'>
                        <div className='mb-4 flex space-x-5'>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border rounded text-gray-700"
                                    value={name}
                                    placeholder='Name'
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="surname" className="block text-gray-700">Surname</label>
                                <input
                                    type="text"
                                    id="surname"
                                    className="w-full p-2 border rounded text-gray-700"
                                    value={surname}
                                    placeholder='Surname'
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dob" className="block text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full p-2 border rounded text-gray-700"
                                placeholder='Date of Birth'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border rounded text-gray-700"
                                value={email}
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border rounded text-gray-700"
                                value={password}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2">Choose your account type</label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-500"
                                        value="lessee"
                                        checked={accountType === 'lessee'}
                                        onChange={() => setAccountType('lessee')}
                                    />
                                    <span className="ml-2">Lessee <span className="text-gray-500">(Want to rent the property)</span></span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-500"
                                        value="lessor"
                                        checked={accountType === 'lessor'}
                                        onChange={() => setAccountType('lessor')}
                                    />
                                    <span className="ml-2">Lessor <span className="text-gray-500">(Want to lease out the property)</span></span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" onClick={()=>register(1,name,"ban na",email,password,accountType)}>
                            Sign up
                        </button>

                        <p className="text-center text-gray-600">
                            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setPage('login')}>Sign In</span>
                        </p>
                    </form>
                </div>
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('bg-condo.jpg')" }} />
            </div>

        </div>

    );
};

export default SignUp;
