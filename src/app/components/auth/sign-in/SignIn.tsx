import React from 'react';
import { Container, Checkbox, Button } from '@material-ui/core';
import './sign-in.css';

const SignIn = () => {
  return (
        <section className="w-full h-full bg-login">
            <Container>
                <div className="flex justify-center items-center w-full h-screen ">
                    <div className="flex-1"></div>
                    <div className="flex-1 px-[15px] w-full">
                        <form action="" className="px-5 pt-4 my-0 pb-8 max-w-full mx-[150px] rounded-lg w-[360px] bg-white">
                            <div className="">
                                <h1 className="text-center mt-2 mb-5 text-[45px] font-semibold text-[#0064ff]">Welcome</h1>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-[#595959] font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="outline-none rounded-[10px] text-[#495057] border-2 px-2 py-1"
                                    />
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <label htmlFor="" className="text-[#595959] font-semibold mb-2">
                                            Password
                                        </label>
                                        <span>Forgot Password?</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="outline-none rounded-[10px] text-[#495057] w-full border-2 px-2 py-1"
                                    />
                                </div>
                                <div className="my-2">
                                    <span className="text-[#db0f34] text-[12px] font-semibold invisible">
                                        Username is an invalid email address
                                    </span>
                                </div>
                                <div className="flex w-full ml-[-15px] mr-[-20px]">
                                    <div className="flex basis-1/2 items-center px-4">
                                        <Checkbox className="!p-0" />
                                        <label className="text-xs font-semibold">Remember me</label>
                                    </div>
                                    <div className="flex justify-end basis-1/2 px-3">
                                        <Button variant="contained" color="primary" className="!min-w-[120px]">
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
  )
}

export default SignIn