import React, {useContext, FormEvent} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Login = () => {

  const {loginUser} = useContext(AuthContext)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  return (
    <div className="flex flex-col gap-14 items-center justify-center min-h-screen">
          <img src="/home.svg" alt="home" />
            <div className="bg-white border-grey border rounded-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-medium mb-4 text-center">👋Welcome back</h1>
                <h3 className="text-sm mb-4 text-center font-normal">Login to your account</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 p-2 border rounded-md w-full bg-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mb-4 mt-1 p-2 border rounded-md w-full bg-gray-100"
                        />
                    </div>

                    <a className="text-orange-400 font-semibold mt-4 mb-6" href=""> <span> Forgot Password?</span></a>

                    <button
                        type="submit"
                        className="bg-primary text-white p-2 rounded-md hover:bg-blue-500 w-full mt-6"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>

  )
}

export default Login