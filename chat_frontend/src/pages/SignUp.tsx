import React from 'react'

const SignUp = () => {
  return (
    <>
        <div className="flex items-center justify-center">
            <div className="">
                <h1 className=''>Sign Up</h1>
                <h3>Create an account</h3>
                <form action="">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="email" name="username" id="username" />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button type='submit'>Log In</button>
                </form>
            </div>
        </div>
    </>
    
  )
}

export default SignUp