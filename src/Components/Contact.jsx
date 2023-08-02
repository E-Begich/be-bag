import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-6">
            <h1>Have some question? Ask us</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src={process.env.PUBLIC_URL+ "/assets/images/contactus.gif"}  alt="contact us" height="500px" width="600px" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">Full name</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your question</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-dark">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact