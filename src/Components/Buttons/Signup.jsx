import React from 'react'

const Signup = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> 18:45*/}
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="fa fa-user-plus me-2"></i>Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 " id="exampleModalLabel"> Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-outline-dark w-100 mb-4">
                                <span className="fa fa-google me-2" ></span>Sign up with Google
                            </button>
                            <button className="btn btn-outline-dark w-100 mb-2">
                                <span className="fa fa-facebook me-2" ></span>Sign up with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                    <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100 mb-5">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup