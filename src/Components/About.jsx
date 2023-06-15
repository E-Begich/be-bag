import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-dark fw-bold mb-4'>About us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut nihil nostrum consequuntur, inventore molestiae pariatur delectus magni aliquam expedita doloribus non et neque nulla maiores, illo perferendis voluptatum aperiam? Vero impedit doloremque, molestiae facere sapiente magni sint veritatis eveniet neque repudiandae earum est, corrupti facilis. Rem vel vero iste architecto, neque earum suscipit dicta nisi harum praesentium? Maiores suscipit neque culpa atque provident? Ad dignissimos dolorem esse. Exercitationem illo nisi, laboriosam perspiciatis voluptatem laudantium facere iusto temporibus reiciendis id blanditiis nulla, necessitatibus, molestiae illum dolor rem! Provident perferendis sed, dignissimos architecto dolore amet, similique laborum dicta vel fuga facilis.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="./assets/images/sabrina.jpg" alt="about us" height="600px" width="500px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
